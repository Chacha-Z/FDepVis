import React, { Component } from 'react';
import * as d3 from "d3";
import './ScatterPlot.css';

// 使用redux
import store from '../../redux/index'
import action from '../../redux/actions'

export default class ScatterPlot extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [
                [11,27,2],
                [98,21,2],
                [17,40,3],
                [43,21,3],
                [61,1,3],
                [2,66,1],
                [92,52,2],
                [41,93,1],
                [54,59,1],
                [12,4,1],
                [82,90,1],
                [90,18,1],
                [77,54,3],
                [60,21,1],
                [73,47,2],
                [64,73,1],
                [24,30,3],
                [42,86,2],
                [63,35,3],
                [27,29,1],
                [5,87,2],
                [89,55,2],
                [100,24,3],
                [76,93,3],
                [13,1,2],
                [99,39,3],
                [66,96,2],
                [41,72,1],
                [33,28,2],
                [1,16,2],
                [35,19,2],
                [48,56,1],
                [72,2,3],
                [96,17,1],
                [86,19,1],
                [20,7,1],
                [77,39,3],
                [15,84,2],
                [40,51,1],
                [25,23,2],
                [8,51,2],
                [31,84,3],
                [85,1,3],
                [100,93,2],
                [94,85,2],
                [100,67,1],
                [64,93,3],
                [44,71,1],
                [1,80,3],
                [50,2,3],
                [45,87,2],
                [60,3,1],
                [14,60,2],
                [22,91,3],
                [4,59,2],
                [100,95,2],
                [25,38,2],
                [71,44,2],
                [89,10,3],
                [38,46,2],
                [4,38,1],
                [78,98,3],
                [59,92,3],
                [91,2,1],
                [37,27,3],
                [45,15,2],
                [90,90,3],
                [77,45,2],
                [88,20,3],
                [19,84,2],
                [78,46,3],
                [68,39,3],
                [76,32,2],
                [69,42,1],
                [81,71,1],
                [65,71,1],
                [68,96,2],
                [3,97,1],
                [46,56,2],
                [47,83,2],
                [56,87,3],
                [8,95,1],
                [11,42,1],
                [13,6,3],
                [26,81,2],
                [1,89,2],
                [23,64,2],
                [71,81,1],
                [64,28,1],
                [87,94,2],
                [62,20,1],
                [53,40,1],
                [70,18,2],
                [78,27,2],
                [51,96,2],
                [83,68,1],
                [54,10,3],
                [24,41,3],
                [90,4,1],
                [56,45,1]
            ]
        }
    }

    componentDidMount(){
        this.drawChart();
        // store.dispatch(action.testAction(1))
    }
    drawChart() {
        const points = this.state.data
        const margin = 20
        const marginRight = 100  // 定义右边距
        const width = document.getElementById("ScatterPlot").clientWidth
        const height = document.getElementById("ScatterPlot").clientHeight - 30
        const innerWidth = width - margin - marginRight
        const innerHeight = height - margin*2

        const svg = d3.select("#ScatterPlot")
                        .append("svg")
                        .attr("preserveAspectRatio", "xMidYMid meet")
                        .attr("viewBox", "0 0 " + width +" "+ height)

        let x = d3.scaleLinear()
            .domain([0, Math.max(...points.map(x => x[0]))])
            .range([0, innerWidth])

        let y = d3.scaleLinear()
            .rangeRound([0, innerHeight])
            .domain([Math.max(...points.map(x => x[1])), 0])

        let z = d3.scaleOrdinal(d3.schemeCategory10) // 通用线条的颜色

        let fig = svg.append('g')
            .attr('transform', 'translate(' + 10 + ',' + 10 + ')')

        fig.append('g') // 输出点
            .selectAll('circle')
            // .attr('class', 'points')
            .data(points)
            .enter()
            .append('circle')
            .attr('cursor', 'pointer')
            // .on('mouseover', tip.show)
            // .on('mouseout', tip.hide)
            .attr('fill', function(d) {
                return z(d[2])
            })
            .attr('cx', function(d) {
                return x(d[0])
            })
            .attr('cy', function(d) {
                return y(d[1])
            })
            .attr('r', 6)
            .style('opacity',"0.6")
       
        let legend = fig
            .append('g') // 画legend
            .attr('font-family', 'Arial')
            .attr('font-size', "12px")
            .attr("font-weight","500")
            .attr('transform', `translate(${innerWidth+margin},0)`)
            .attr('text-anchor', 'start')
            .selectAll('g')
            .data(Array.from(new Set(points.map(i => i[2]))))
            .enter()
            .append('g')
            .attr('transform', function(d, i) {
                return 'translate(0,' + i * 30 + ')'
            })

        legend
            .append('rect')
            .attr('x', 0)
            .attr('rx', 4)
            .attr('width', 19)
            .attr('height', 19)
            .attr('fill', z)
            .style("opacity","0.7")

        legend
            .append('text')
            .attr('x', 19+5)
            .attr('dy', 13)
            .text(function(d) {
                return "Family" + d
            })

    }
    render() {

        return (
            <div id='ScatterPlot' className='pane'>
                <div className='header'>Scatter Plot</div>
            </div>
        )
    }
}
