import React, { Component } from "react";
import * as d3 from "d3";
import "./AttributesHeatmap.css";
import store from "../../redux/index";
import axios from "axios";
import action from "../../redux/actions";

export default class AttributesHeatmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["m0", "m1", "m2", "m3", "m4"], //家族人名
      attrs: [
        "alcohol",
        "psychosis",
        "anxiety-non-trauma",
        "somatic disorder",
        "eating",
        "bipolar spectrum illness",
        "depression",
        "interpersonal trauma",
        "PD-Cluster C-anxiety",
        "PD-Cluster B-emotional",
        "PD",
        "Impulse control disorder",
        "obesity",
        "cardiovascular",
        "COPD",
        "asthma",
        "immune-autoimmune",
      ], //临床属性 17个

      attrsmap: {
        alcohol: 0,
        psychosis: 1,
        "anxiety-non-trauma": 2,
        "somatic disorder": 3,
        eating: 4,
        "bipolar spectrum illness": 5,
        depression: 6,
        "interpersonal trauma": 7,
        "PD-Cluster C-anxiety": 8,
        "PD-Cluster B-emotional": 9,
        PD: 10,
        "Impulse control disorder": 11,
        obesity: 12,
        cardiovascular: 13,
        COPD: 14,
        asthma: 15,
        "immune-autoimmune": 16,
      }, //临床属性17个键值对

      allTimes: [1, 2, 4],

      values: [],
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.uploadData();
    });
    this.uploadData();
  }

  uploadData() {
    const focusFamily = store.getState().focusFamily;
    axios
      .get("http://106.52.126.175/api/getAttrview/" + "?fid=" + focusFamily)
      .then((res) => {
        let data = res.data;
        // console.log("attr", data)
        this.setData(data);
        document.getElementById("BarChart").innerHTML = "";
        document.getElementById("Heatmap").innerHTML = "";
        this.drawChart();
      });
  }

  setData(data) {
    // console.log(data)
    let row = 0;
    let myData = [];
    let allCount = [];
    let names = [];

    for (let i = 0; i < data.length; i++) {
      let objNum = Object.values(data[i]).filter((value) => {
        return typeof value === "number";
      });
      objNum = objNum.slice(2);
      //求数组值的和
      let count = objNum.reduce((a, b) => a + b, 0);
      if (count !== 0) {
        names.push(data[i].pid);
        let j = -2; // 除去前面2个id属性
        for (let key in data[i]) {
          //  console.log(key,data[i][key],j) // 每个小格子
          if (j >= 0) {
            myData.push({
              row: row,
              col: j,
              times: data[i][key],
            });
          }
          j++;
        }
        row++;
      }
    }

    let data_count;
    // 柱状图统计
    if (data.length) {
      let data_keys = Object.keys(data[0]).filter(
        (item) => ["pid", "fid"].indexOf(item) < 0
      ); //对象键映射
      data_count = new Object();
      data_keys.forEach((e) => {
        data_count[e] = data
          .map((item) => {
            return item[e];
          })
          .reduce((a, b) => a + b, 0); //求和，初值0
      });
    }
    // console.log(data_count)

    let allTimes = Object.values(data_count).map((value) => value); //对象的值映射，对象变数组
    // console.log(allTimes) //

    this.setState({
      values: myData,
      names: names,
      allTimes: allTimes,
    });
  }

  drawChart() {
    // console.log(this.state.values)
    const _this = this;
    const width = document.getElementById("AttributesHeatmap").clientWidth;
    // const height = document.getElementById("AttributesHeatmap").clientHeight - 30

    const gridSize = (width * 0.87) / 17; //width
    // const gridHeight = Math.floor(height / this.state.names.length) //格子高度

    const height = this.state.names.length * gridSize + 20;
    const height1 =
      document.getElementById("AttributesHeatmap").clientHeight * 0.18;

    const margin = {
      top: 5,
      bottom: 10,
      left: 10,
      right: 10,
    };

    //let maxTimes = Math.max.apply(Math,this.state.allTimes.map(item => {return item.times}))

    let times = this.state.values.map((item) => {
      return item.times;
    });
    // console.log(d3.max(times))

    //颜色
    const color = d3
      .scaleLinear()
      .domain([0, d3.max(times)])
      //.domain([0, 4])
      .range(["white", "#2171b5"]);

    const colors = [
      "#8dd3c7",
      "#ffffb3",
      "#bebada",
      "#fb8072",
      "#80b1d3",
      "#fdb462",
      "#b3de69",
      "#fccde5",
      "#d9d9d9",
      "#bc80bd",
      "#ccebc5",
      "#ffed6f",
      "#eea60d",
      "#a9402a",
      "#845d54",
      "#056f1f",
      "#475e4c",
    ];

    /* ----------------------------柱状图------------------------  */

    // 文字legend
    const height2 = height1 * 2 - 20;
    const svg2 = d3
      .select("#BarChart")
      .append("svg")
      .attr("width", width)
      .attr("height", height2)
      .attr("id", "barlabel");
    // .attr('transform', `translate(0, 0)`)

    const text_g = svg2.append("g");
    // .attr("transform", "translate(12,16)");

    let attrLabels = text_g
      .selectAll(".attrLabels")
      .data(this.state.attrs)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) =>
          `translate(${i * gridSize + width * 0.085 + gridSize / 3
          }, ${height2})`
      ); // 直接transform <g>

    attrLabels
      .append("text")
      .text((d) => d)
      .attr("font-size", "8pt")
      .attr("fill", "#595959")
      .attr("transform", "rotate(-75)");

    // x轴

    //  const types = ['1', '2', ' 3', ' 4', '5', '6', '7',' 8','9','10','11', '12', '13 ','14','15','16','17']
    //  let xScale = d3.scaleBand()
    //     .domain(types)
    //     .range([0, axisWidth]

    const tooltip = d3.select(".heatmap-tooltip");
    //.attr("transform", "translate(10,150)")

    const svg1 = d3
      .select("#BarChart")
      .append("svg")
      .attr("width", width)
      .attr("height", height1 + 5);

    //let axisWidth = width - margin.left - margin.right - 70

    //let axisWidth = width - 70
    let axisWidth = width * 0.87;
    let xScale = d3.scaleLinear().domain([0, 17]).range([0, axisWidth]);

    let axis = d3
      .axisBottom(xScale) //定义一个axis，由bottom可知，是朝下的
      .ticks(17); //设置刻度数目 当使用 band 和 point 比例尺时没有作用

    let xAxis = svg1
      .append("g")
      .attr("transform", `translate(${width * 0.085}, ${height1})`)
      .call(axis);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.state.allTimes)])
      .range([height1, 0]);

    const g = svg1
      .append("g")
      .attr("transform", `translate(${width * 0.085}, 0)`);

    // console.log(this.state.allTimes)
    const gs = g
      .selectAll(".bar")
      .data(this.state.allTimes)
      .enter()
      .append("g")
      .attr("class", "bar");

    const rectPadding = width * 0.015; //矩形之间的间隙 20
    let container = d3.select("#AttributesHeatmap").node();
    let container1 = d3.select("#BarChart").node();
    let container2 = d3.select("#Heatmap").node();

    gs.append("rect")
      .attr("x", function (d, i) {
        //console.log(d, i)
        return gridSize * i + gridSize * 0.1875;
      })
      .attr("y", function (d) {
        //console.log(yScale(d));
        return yScale(d);
        //return yScale(d + 10);
      })
      .attr("width", function () {
        return gridSize * 0.625;
      })
      .attr("height", function (d) {
        // console.log(height1 - yScale(d));
        return height1 - yScale(d);
      })
      .attr("fill", "#91c0db")
      .on("mousemove", function (d, i) {
        let coordinates = d3.mouse(container1);
        tooltip
          .style("left", coordinates[0] + 10 + "px")
          .style("top", coordinates[1] + 10 + "px")
          .style("display", "inline-block")
          .html(_this.state.attrs[i] + "<br>" + "sum：" + d)
          .style("opacity", 0.9);
      })
      .on("mouseout", function (d) {
        tooltip.style("display", "none").style("opacity", 0);
      });

    /* ----------------------------热力图------------------------  */

    const svg = d3
      .select("#Heatmap")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "heatmap");

    //圆形+字母 legends

    let focusPerson = store.getState().focusPID;
    const nameLabels = svg
      .append("g")
      .attr("class", "nameLabel")
      .attr("transform", "translate(5, " + (5 + gridSize / 2) + ")")
      .selectAll("text")
      .data(this.state.names)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", 0)
      .attr("y", function (d, i) {
        return i * gridSize;
      })
      .attr("font-size", "8.5pt")
      .attr("cursor", "pointer")
      .attr("fill", (d) => (d == focusPerson ? "#2171b5" : "#595959"))
      .on("click", (d) => {
        store.dispatch(action.selectPerson(d));
      });

    const cards = svg
      .append("g")
      .attr("transform", `translate(${width * 0.085}, 0)`)
      .attr("class", "heatcards")
      .selectAll("rect")
      .data(this.state.values)
      .enter();

    //console.log(cards)

    //  .enter().append("rect")
    console.log(this.state.values);

    const cardsEnter = cards
      .append("rect")
      .attr("x", function (d, i) {
        return ((width * 0.87) / 17) * d.col + 2;
      })
      .attr("y", function (d) {
        return d.row * gridSize;
      })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", gridSize - 5)
      .attr("height", gridSize - 5)
      .attr("stroke", (d) =>
        this.state.names[d.row] == focusPerson ? "black" : "none"
      )
      .attr("stroke-width", (d) => (d.times == 0 ? "0" : "0.3"))
      .style("fill", function (d) {
        return color(d.times);
      })
      .attr("cursor", "pointer")
      .on("click", (d) => {
        store.dispatch(action.selectPerson(this.state.names[d.row]));
      })
      .on("mousemove", function (d, i) {
        let coordinates = d3.mouse(container2);
        // let coordinates = this.setMouse(d3.mouse(this))
        // console.log(coordinates)

        tooltip
          .style("left", coordinates[0] + 10 + "px")
          .style("top", coordinates[1] + 150 + "px")
          .style("display", "inline-block")
          .html(_this.state.attrs[d.col] + "： " + d.times)
          .style("opacity", 0.9);
        // console.log(tooltip)
      })
      .on("mouseout", function (d) {
        tooltip.style("display", "none").style("opacity", 0);
      });

    // console.log(heatmap)
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <div className="header"> Attributes Heatmap </div>

        <div id="AttributesHeatmap" className="pane">
          <div
            className="heatmap-tooltip"
            style={{
              opacity: 0,
            }}
          >
            {" "}
          </div>
          <div id="BarChart"> </div>
          <div
            id="Heatmap"
            style={{
              overflowX: "hidden",
            }}
          >
            {" "}
          </div>{" "}
          {/* <BarChart data={data} width={1000} height={550}/> */}
        </div>
      </>
    );
  }
}
