import React, { Component } from 'react';
import * as d3 from "d3";
import './AttributesHeatmap.css';

export default class AttributesHeatmap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            names: ["m0", "m1", "m2", "m3", "m4"],  //家族人名
            attrs: ["alcohol", "psychosis", "anxiety-non-trauma", "somatic disorder", "eating", "bipolar spectrum illness", "depression", "interpersonal trauma", "PD-Cluster C-anxiety", "PD-Cluster B-emotional", "PD", "Impulse control disorder", "obesity", "cardiovascular", "COPD", "asthma", "immune-autoimmune"],  //临床属性 17个

            allTimes : [4, 2, 4],

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
        this.drawChart()
    }

    drawChart() {
        const _this = this;
        const width = document.getElementById("AttributesHeatmap").clientWidth
        const height = document.getElementById("AttributesHeatmap").clientHeight - 30
        const height1 = height - 300
        console.log(height1)
        const gridSize = Math.floor(width / this.state.attrs.length)

        const margin = { top: 5, bottom: 10, left: 10, right: 10 }

        //颜色
        const color = d3.scaleLinear()
            //.domain([0, d3.max(this.state.values)])
            .domain([0, 4])
            .range(['white', "#2171b5"])

        const svg = d3.select("#AttributesHeatmap").append('svg')
            .attr("width", width).attr("height", height)

        /* ----------------------------柱状图------------------------  */

        const svg1 = d3.select("#BarChart").append('svg')
        .attr("width", width).attr("height", height1)
        
        const g = svg1.append("g")
        .attr("transform","translate(12,0)");

        const xScale = d3.scaleBand()
            .domain(d3.range(this.state.allTimes))
            .rangeRound([0, width - margin.left - margin.right]);
        const xAxis = d3.axisBottom(xScale);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(this.state.allTimes)])
            .range([height1, 0]);
        const yAxis = d3.axisLeft(yScale);

        const gs = g.selectAll(".bar")
    		.data(this.state.allTimes)
    		.enter()
            .append("g");
            
        const rectPadding = 20;//矩形之间的间隙
    	gs.append("rect")
    		.attr("x",function(d,i){
                console.log(d,i)
    			return i*gridSize + rectPadding/2;
    		})	
    		.attr("y",function(d){
                console.log(yScale(d));
    			return yScale(d);
    		})
    		.attr("width",function(){
    			return gridSize - rectPadding/2;
    		})
    		.attr("height",function(d){
                console.log(height1-yScale(d));
    			return height1-yScale(d);
    		})
    		.attr("fill",d => color(d));

        /* ----------------------------热力图------------------------  */
        const nameLabels = svg.selectAll(".nameLabel")
            .data(this.state.names)
            .enter().append("text")
            .text(function (d) { return d; })
            .attr("x", 0)
            .attr("y", function (d, i) { return i * gridSize + margin.top; })
            .attr("font-size", "9pt")
            .attr("fill", "#aaa")
            .attr("transform", "translate(0," + (margin.left + gridSize / 1.5) + ")")

        const attrLabels = svg.selectAll(".attrLabels")
            .data(this.state.attrs)
            .enter().append("text")
            .text(function (d) { return d.substr(0, 1); })
            .attr("x", function (d, i) { return i * gridSize; })
            .attr("y", margin.top)
            .attr("font-size", "9pt")
            .attr("fill", "#aaa")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (10 + gridSize / 2) + ", 12)")

        const tooltip = d3.select(".heatmap-tooltip").attr("transform", "translate(10,20)")

        const cards = svg.selectAll(".attr")
            .data(this.state.values)
        //console.log(cards)

        //  .enter().append("rect")

        const cardsEnter = cards.enter().append("rect")
            .attr("x", function (d) { return 10 + (d.col) * gridSize; })
            .attr("y", function (d) { return (d.row) * gridSize + margin.top; })
            .attr("transform", "translate(10,20)")
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", gridSize)
            .attr("height", gridSize)
            .style("fill", function (d) { return color(d.times); })
            .on("mousemove", function (d, i) {
                let coordinates = d3.mouse(this);
                tooltip.style("left", (coordinates[0] + 5) + 'px')
                    .style("top", (coordinates[1] + 5) + 'px')
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
                <div>
                    {/* <BarChart data={data} width={1000} height={550}/> */}
                    <div className='heatmap-tooltip' style={{ opacity: 0 }}></div>
                </div>
            </div>


        )
    }
}