import React, { Component } from 'react';
import * as d3 from "d3";
import './AttributesHeatmap.css';
import store from '../../redux/index';
import axios from 'axios';

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

            values: []
        }

    }

    componentDidMount() {
        store.subscribe(() => {
            this.uploadData()
        })
        this.uploadData();

    }

    uploadData() {
        const focusFamily = store.getState().focusFamily
        axios.get("http://106.52.126.175/api/getAttrview/" + '?fid=' + focusFamily
        ).then((res) => {
            let data = res.data;
            // console.log("attr", data)
            this.setData(data)
            document.getElementById("BarChart").innerHTML = ''
            document.getElementById("Heatmap").innerHTML = ''
            this.drawChart()
        })
        // // 后端test
        // fetch('http://106.52.126.175/api/getAttrview/?fid=38'
        //     , {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json;charset=UTF-8'
        //         },
        //         mode: 'cors',
        //         cache: 'default'
        //     })
        //     .then(res => res.json())
        //     .then((data) => {
        //         _this.setData(data)
        //         _this.drawChart()
        //     })
    }

    setData(data) {
        // console.log(data)
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

            //求数组值的和
            let count = objNum.reduce((a, b) => a + b, 0)

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

        // console.log(myData)

        let data_count
        // 柱状图统计
        if (data.length) {
            let data_keys = Object.keys(data[0]).filter(item => ["pid", "fid"].indexOf(item) < 0) //对象键映射
            data_count = new Object()
            data_keys.forEach(e => {
                data_count[e] = data.map(item => {
                    return item[e]
                }).reduce((a, b) => a + b, 0) //求和，初值0
            });

        }
        // console.log(data_count)

        let allTimes = Object.values(data_count).map(value => value) //对象的值映射，对象变数组
        // console.log(allTimes) //

        this.setState({
            values: myData,
            names: names,
            allTimes: allTimes,
        })
    }

    drawChart() {

        // console.log(this.state.values)
        const _this = this;
        const width = document.getElementById("AttributesHeatmap").clientWidth
        // const height = document.getElementById("AttributesHeatmap").clientHeight - 30


        const gridSize = Math.floor((width - 60) / this.state.attrs.length) //width
        // const gridHeight = Math.floor(height / this.state.names.length) //格子高度

        const height = this.state.names.length * gridSize + 20;
        const height1 = document.getElementById("AttributesHeatmap").clientHeight * 0.18

        const margin = { top: 5, bottom: 10, left: 10, right: 10 }

        //let maxTimes = Math.max.apply(Math,this.state.allTimes.map(item => {return item.times}))

        let times = this.state.values.map(item => { return item.times })
        // console.log(d3.max(times))

        //颜色
        const color = d3.scaleLinear()
            .domain([0, d3.max(times)])
            //.domain([0, 4])
            .range(['white', "#2171b5"])

        const colors = ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f", "#eea60d", "#a9402a", "#845d54", "#056f1f", "#475e4c"]



        /* ----------------------------柱状图------------------------  */



        // 文字legend
        const height2 = height1 * 2 - 20;
        const svg2 = d3.select("#BarChart").append('svg')
            .attr("width", width).attr("height", height2)
            .attr('id', 'barlabel')
           // .attr('transform', `translate(0, 0)`)

        const text_g = svg2.append("g")
            // .attr("transform", "translate(12,16)");

        let attrLabels = text_g.selectAll(".attrLabels")
            .data(this.state.attrs)
            .enter()
            .append("g")
            .attr('transform', (d, i) => `translate(${i * gridSize + width*0.11}, ${height2})`) // 直接transform <g>

        attrLabels.append("text")
            .text(d => d)
            // .attr("x", function (d, i) { return i * gridSize + 5; })
            //.attr("y", margin.top + 20)
            .attr("font-size", "8pt")
            //.attr("fill", "#aaa")
            .attr("fill", "#595959")
            // .style("text-anchor", "middle")
            // .attr('transform', `translate(20, 20)`)
            .attr("transform", "rotate(-75)")

        // x轴

        //  const types = ['1', '2', ' 3', ' 4', '5', '6', '7',' 8','9','10','11', '12', '13 ','14','15','16','17']
        //  let xScale = d3.scaleBand()
        //     .domain(types)
        //     .range([0, axisWidth]

        const tooltip = d3.select(".heatmap-tooltip")
        //.attr("transform", "translate(10,150)")

        const svg1 = d3.select("#BarChart").append('svg')
            .attr("width", width).attr("height", height1 + 5)

        //let axisWidth = width - margin.left - margin.right - 70

        //let axisWidth = width - 70
        let axisWidth = width*0.87
        let xScale = d3.scaleLinear()
            .domain([0, 17])
            .range([0, axisWidth])

        let axis = d3.axisBottom(xScale) //定义一个axis，由bottom可知，是朝下的
            .ticks(17);//设置刻度数目 当使用 band 和 point 比例尺时没有作用 

        let xAxis = svg1.append("g")
            .attr('transform', `translate(${width*0.085}, ${height1 })`)
            .call(axis)

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(this.state.allTimes)])
            .range([height1, 0]);

        const g = svg1.append("g")
            .attr("transform", `translate(${width*0.092}, 0)`);

        // console.log(this.state.allTimes)
        const gs = g.selectAll(".bar")
            .data(this.state.allTimes)
            .enter()
            .append("g")
            .attr('class', 'bar')


        const rectPadding = width*0.015;//矩形之间的间隙 20
        let container = d3.select("#AttributesHeatmap").node()
        let container1 = d3.select("#BarChart").node()
        let container2 = d3.select("#Heatmap").node()


        gs.append("rect")
            .attr("x", function (d, i) {
                //console.log(d, i)
                return i * gridSize + rectPadding / 2 - width*0.006;
            })
            .attr("y", function (d) {
                //console.log(yScale(d));
                return yScale(d);
                //return yScale(d + 10);
            })
            .attr("width", function () {
                return gridSize / 1.6;
            })
            .attr("height", function (d) {
                // console.log(height1 - yScale(d));
                return height1 - yScale(d);
            })
            .attr("fill", "#91c0db")
            .on("mousemove", function (d, i) {
                let coordinates = d3.mouse(container1);
                tooltip.style("left", (coordinates[0] + 10) + 'px')
                    .style("top", (coordinates[1] + 10) + 'px')
                    .style("display", "inline-block")
                    .html(_this.state.attrs[i] + "<br>" + "sum:" + d)
                    .style("opacity", .9);
            })
            .on("mouseout", function (d) { tooltip.style("display", "none").style("opacity", 0); });




        /* ----------------------------热力图------------------------  */

        const svg = d3.select("#Heatmap").append('svg')
            .attr("width", width).attr("height", height)
            .attr('id', 'heatmap')



        //圆形+字母 legends

        // const attrCircle = svg.selectAll(".legend")
        //     .data(colors)
        //     .enter().append("circle")
        //     .attr("cx", function (d, i) { return i * gridSize + 5; })
        //     .attr("cy", margin.top - 4) //circle的x和y为cx、cy
        //     .attr("r", 8)
        //     .attr("fill", d => d)
        //     .attr("transform", "translate(60, 12)")

        // const attrLabels = svg.selectAll(".attrLabels")
        //     .data(this.state.attrs)
        //     .enter().append("text")
        //     .text(function (d) { return d.substr(0, 1); })
        //     .attr("x", function (d, i) { return i * gridSize + 5; })
        //     .attr("y", margin.top)
        //     .attr("font-size", "9pt")
        //     //.attr("fill", "#aaa")
        //     .attr("fill", "black")
        //     .style("text-anchor", "middle")
        //     .attr("transform", "translate(60, 12)")

        const nameLabels = svg.append('g')
            .attr('class', 'nameLabel')
            .attr("transform", "translate(5, " + (5 + gridSize / 2) + ")")
            .selectAll("text")
            .data(this.state.names)
            .enter()
            .append("text")
            .text(d => d)
            .attr("x", 0)
            .attr("y", function (d, i) { return i * gridSize; })
            .attr("font-size", "8.5pt")
            //.attr("fill", "#aaa")
            .attr("fill", "#595959")



        const cards = svg.append('g')
            .attr("transform", "translate(30,5)")
            .attr('class', 'heatcards')
            .selectAll("rect")
            .data(this.state.values)
            .enter()

        //console.log(cards)

        //  .enter().append("rect")


        const cardsEnter = cards.append("rect")
            .attr("x", function (d) {
                //console.log(d); 20 +
                return width*0.038 + (d.col) * gridSize;
            })
            .attr("y", function (d) { return (d.row) * gridSize; })
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", gridSize - 5)
            .attr("height", gridSize - 5)
            .style("fill", function (d) { return color(d.times); })

            .on("mousemove", function (d, i) {
                let coordinates = d3.mouse(container2);
               // let coordinates = this.setMouse(d3.mouse(this))
                // console.log(coordinates)
                
                tooltip.style("left", (coordinates[0] + 10) + 'px')
                    .style("top", (coordinates[1] + 150) + 'px')
                    .style("display", "inline-block")
                    .html(_this.state.attrs[d.col] + "<br>" + d.times)
                    .style("opacity", .9);
            // console.log(tooltip)
                })
            .on("mouseout", function (d) { tooltip.style("display", "none").style("opacity", 0); });

        // console.log(heatmap)
    }

  

    render() {
        const { data } = this.props;
        return (
        <>
            <div className='header' >Attributes Heatmap</div>

            <div id='AttributesHeatmap' className='attr'>
              
                <div className='heatmap-tooltip' style={{ opacity: 0 }}></div>

                <div id='BarChart'></div>

                <div id='Heatmap' style={{overflowX : "hidden"}}></div>
                {/* <BarChart data={data} width={1000} height={550}/> */}

            </div>
        </>

        )
    }
}