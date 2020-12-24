import React, { Component } from 'react';
import * as d3 from "d3";
import './AttributesHeatmap.css';

export default class AttributesHeatmap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            names: ["m0", "m1", "m2", "m3", "m4"],  //家族人名
            attrs:
                ["alcohol", "psychosis", "anxiety-non-trauma", "somatic disorder", "eating", "bipolar spectrum illness", "depression", "interpersonal trauma", "PD-Cluster C-anxiety", "PD-Cluster B-emotional", "PD", "Impulse control disorder", "obesity", "cardiovascular", "COPD", "asthma", "immune-autoimmune"],  //临床属性 17个

            attrsmap:
            {
                "alcohol": 0,
                "psychosis": 1,
                "anxiety-non-trauma": 2,
                "somatic disorder": 3,
                "eating": 4,
                "bipolar spectrum illness": 5,
                "depression": 6,
                "interpersonal trauma": 7,
                "PD-Cluster C-anxiety": 8,
                "PD-Cluster B-emotional": 9,
                "PD": 10,
                "Impulse control disorder": 11,
                "obesity": 12,
                "cardiovascular": 13,
                "COPD": 14,
                "asthma": 15,
                "immune-autoimmune": 16
            },  //临床属性17个键值对


            allTimes: [1, 2, 4],

            values: [ // 2*3 test
                {
                    row: 0, //行，第几个人
                    col: 0, //列，第几个属性
                    times: 1 //诊断次数
                },
                {
                    row: 0,
                    col: 1,
                    times: 2 //诊断次数
                },
                {
                    row: 0,
                    col: 2,
                    times: 3 //诊断次数
                },
                {
                    row: 1,
                    col: 0,
                    times: 3 //诊断次数
                },
                {
                    row: 1,
                    col: 1,
                    times: 0 //诊断次数
                },
                {
                    row: 1,
                    col: 2,
                    times: 1 //诊断次数
                }
            ]
        }

    }

    componentDidMount() {
        const _this = this;
        // 后端test
        fetch('http://106.52.126.175/api/getAttrview/?fid=38'
            , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                mode: 'cors',
                cache: 'default'
            })
            .then(res => res.json())
            .then((data) => {
                console.log(data)



                let row = 0;
                let myData = []
                let allCount = [] 
                let names = []


                for (let i = 0; i < data.length; i++) {
                    
                    let objNum = Object.values(data[i]).filter((value) => {
                        return typeof value === 'number';
                    });

                    objNum = objNum.slice(2)
                   // console.log(objNum)

                    let count = objNum.reduce((a, b) => { //求数组值的和
                        return a + b;
                    });
                    //allCount.push(count)
                    //console.log(count)

                    if (count !== 0) {
                        names.push(data[i].pid)
                        let j = -2; // 除去前面2个id属性
                        for (let key in data[i]) {
                            //  console.log(key,data[i][key],j) // 每个小格子
                            if (j >= 0) {
                                myData.push({
                                    row: row,
                                    col: j,
                                    times: data[i][key]
                                })
                            }
                            j++;
                        }
                        row++;
                    }

                    //break;
                }
  
                console.log(myData)

                let data_count
              // 柱状图统计
                if (data.length) {
                  let data_keys = Object.keys(data[0]).filter(item => ["pid", "fid"].indexOf(item) < 0) //对象键映射
                  data_count = new Object()
                  data_keys.forEach(e => {
                    data_count[e] = data.map( item => 
                        {
                            return item[e]
                        }).reduce((a, b) => a + b, 0) //求和，初值0
                    });
                 
                }
               console.log(data_count)
             
               let allTimes = Object.values(data_count).map(value => value) //对象的值映射，对象变数组
               console.log(allTimes) //

                _this.setState({
                    values: myData,
                    names: names,
                    allTimes: allTimes,
                })

                _this.drawChart()
            })


    }

    drawChart() {
        console.log(this.state.values)
        const _this = this;
        const width = document.getElementById("AttributesHeatmap").clientWidth
        // const height = document.getElementById("AttributesHeatmap").clientHeight - 30


        const gridSize = Math.floor((width - 60) / this.state.attrs.length) //width
        // const gridHeight = Math.floor(height / this.state.names.length) //格子高度

        const height = this.state.names.length * gridSize + 20;
        const height1 = document.getElementById("AttributesHeatmap").clientHeight * 0.2

        const margin = { top: 5, bottom: 10, left: 10, right: 10 }

        //let maxTimes = Math.max.apply(Math,this.state.allTimes.map(item => {return item.times}))

        let times = this.state.values.map(item => {return item.times})
        console.log(d3.max(times))

        //颜色
        const color = d3.scaleLinear()
            .domain([0, d3.max(times)])
            //.domain([0, 4])
            .range(['white', "#2171b5"])

        

        /* ----------------------------柱状图------------------------  */

        const svg1 = d3.select("#BarChart").append('svg')
            .attr("width", width).attr("height", height1)

        const g = svg1.append("g")
            .attr("transform", "translate(12,0)");

        const xScale = d3.scaleBand()
            .domain(d3.range(this.state.allTimes))
            .rangeRound([0, width - margin.left - margin.right]);
        //const xAxis = d3.axisBottom(xScale);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(this.state.allTimes)])
            .range([height1, 0]);
        //const yAxis = d3.axisLeft(yScale);

        const gs = g.selectAll(".bar")
            .data(this.state.allTimes)
            .enter()
            .append("g");

        const rectPadding = 20;//矩形之间的间隙
        gs.append("rect")
            .attr("x", function (d, i) {
                //console.log(d, i)
                return 29 + i * gridSize + rectPadding / 2;
            })
            .attr("y", function (d) {
                //console.log(yScale(d));
                return yScale(d);
            })
            .attr("width", function () {
                return gridSize - rectPadding / 2;
            })
            .attr("height", function (d) {
                console.log(height1 - yScale(d));
                return height1 - yScale(d);
            })
            .attr("fill", d => color(d));

        /* ----------------------------热力图------------------------  */

        const svg = d3.select("#AttributesHeatmap").append('svg')
            .attr("width", width).attr("height", height)

        const nameLabels = svg.selectAll(".nameLabel")
            .data(this.state.names)
            .enter().append("text")
            .text(d => d)
            .attr("x", 0)
            .attr("y", function (d, i) { return i * gridSize; })
            .attr("font-size", "9pt")
            .attr("fill", "#aaa")
            .attr("transform", "translate(0, " + (20 + gridSize / 2) + ")")

        const attrLabels = svg.selectAll(".attrLabels")
            .data(this.state.attrs)
            .enter().append("text")
            .text(function (d) { return d.substr(0, 1); })
            .attr("x", function (d, i) { return i * gridSize + 5; })
            .attr("y", margin.top)
            .attr("font-size", "9pt")
            .attr("fill", "#aaa")
            .style("text-anchor", "middle")
            .attr("transform", "translate(55, 12)")

        const tooltip = d3.select(".heatmap-tooltip").attr("transform", "translate(10,20)")

        const cards = svg.selectAll(".attr")
            .data(this.state.values)
        //console.log(cards)

        //  .enter().append("rect")

        const cardsEnter = cards.enter().append("rect")
            .attr("x", function (d) {
                //console.log(d);
                return 18 + (d.col) * gridSize;
            })
            .attr("y", function (d) { return (d.row) * gridSize; })
            .attr("transform", "translate(30,20)")
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", gridSize-5)
            .attr("height", gridSize-5)
            .style("fill", function (d) { return color(d.times); })
            .on("mousemove", function (d, i) {
                let coordinates = d3.mouse(this);
                tooltip.style("left", (coordinates[0] + 15) + 'px')
                    .style("top", (coordinates[1] + 80) + 'px')
                    .style("display", "inline-block")
                    .html(_this.state.attrs[d.col] + "<br>" + d.times)
                    .style("opacity", .9);
            })
            .on("mouseout", function (d) { tooltip.style("display", "none").style("opacity", 0); });

        // console.log(heatmap)
    }

    render() {
        const { data } = this.props;
        return (

            <div id='AttributesHeatmap' className='pane' >
                <div className='header' >Attributes Heatmap</div>
                <div id='BarChart'> </div>

                {/* <BarChart data={data} width={1000} height={550}/> */}
                <div className='heatmap-tooltip' style={{ opacity: 0 }}></div>

            </div>


        )
    }
}