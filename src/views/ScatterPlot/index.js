import React, { Component } from 'react';
import * as d3 from "d3";
import './ScatterPlot.css';
import axios from 'axios';

// 使用redux
import store from '../../redux/index'
import action from '../../redux/actions'

export default class ScatterPlot extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        [11, 27, 2],
        [98, 21, 2],
        [17, 40, 3],
        [43, 21, 3],
        [61, 1, 3],
        [2, 66, 1],
        [92, 52, 2],
        [41, 93, 1],
        [54, 59, 1],
        [12, 4, 1],
        [82, 90, 1],
        [90, 18, 1],
        [77, 54, 3],
        [60, 21, 1],
        [73, 47, 2],
        [64, 73, 1],
        [24, 30, 3],
        [42, 86, 2],
        [63, 35, 3],
        [27, 29, 1],
        [5, 87, 2],
        [89, 55, 2],
        [100, 24, 3],
        [76, 93, 3],
        [13, 1, 2],
        [99, 39, 3],
        [66, 96, 2],
        [41, 72, 1],
        [33, 28, 2],
        [1, 16, 2],
        [35, 19, 2],
        [48, 56, 1],
        [72, 2, 3],
        [96, 17, 1],
        [86, 19, 1],
        [20, 7, 1],
        [77, 39, 3],
        [15, 84, 2],
        [40, 51, 1],
        [25, 23, 2],
        [8, 51, 2],
        [31, 84, 3],
        [85, 1, 3],
        [100, 93, 2],
        [94, 85, 2],
        [100, 67, 1],
        [64, 93, 3],
        [44, 71, 1],
        [1, 80, 3],
        [50, 2, 3],
        [45, 87, 2],
        [60, 3, 1],
        [14, 60, 2],
        [22, 91, 3],
        [4, 59, 2],
        [100, 95, 2],
        [25, 38, 2],
        [71, 44, 2],
        [89, 10, 3],
        [38, 46, 2],
        [4, 38, 1],
        [78, 98, 3],
        [59, 92, 3],
        [91, 2, 1],
        [37, 27, 3],
        [45, 15, 2],
        [90, 90, 3],
        [77, 45, 2],
        [88, 20, 3],
        [19, 84, 2],
        [78, 46, 3],
        [68, 39, 3],
        [76, 32, 2],
        [69, 42, 1],
        [81, 71, 1],
        [65, 71, 1],
        [68, 96, 2],
        [3, 97, 1],
        [46, 56, 2],
        [47, 83, 2],
        [56, 87, 3],
        [8, 95, 1],
        [11, 42, 1],
        [13, 6, 3],
        [26, 81, 2],
        [1, 89, 2],
        [23, 64, 2],
        [71, 81, 1],
        [64, 28, 1],
        [87, 94, 2],
        [62, 20, 1],
        [53, 40, 1],
        [70, 18, 2],
        [78, 27, 2],
        [51, 96, 2],
        [83, 68, 1],
        [54, 10, 3],
        [24, 41, 3],
        [90, 4, 1],
        [56, 45, 1]
      ]
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.drawChart()
    })
    this.uploadData()
  }

  uploadData() {
    const _this = this;
    axios.get("http://106.52.126.175/api/getTsneview/"
    ).then((res) => {
      // console.log(res);
      let data = res.data;

      _this.setState(
        {
          data: data
        }, () => {
          // console.log(this.state);
          _this.drawChart();
        })
    })
  }
  drawChart() {
    var selectedF = store.getState().selectedFamily;
    d3.select("#ScatterPlot svg").remove()
    const points = this.state.data.filter(d => selectedF.indexOf(d.fid) !== -1)
    const margin = 20
    const marginRight = 90  // 定义右边距
    const width = document.getElementById("ScatterPlot").clientWidth
    const height = document.getElementById("ScatterPlot").clientHeight - 30
    const innerWidth = width - margin - marginRight
    const innerHeight = height - margin * 2

    const svg = d3.select("#ScatterPlot")
      .append("svg")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("viewBox", "0 0 " + width + " " + height)

    let x = d3.scaleLinear()
      .domain([0, Math.max(...points.map(d => d.x))])
      .range([0, innerWidth])

    let y = d3.scaleLinear()
      .rangeRound([0, innerHeight])
      .domain([Math.max(...points.map(d => d.y)), 0])

    let z = d3.scaleOrdinal()
      .domain(["38", "149", "27251", "42623", "68939", "176860", "603481", "791533", "903988"])
      .range(['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6'])

    let fig = svg.append('g')
      .attr('transform', 'translate(' + 10 + ',' + 10 + ')')
    let focusPerson = store.getState().focusPID
    // console.log('focusPerson', focusPerson)

    let $tooltip = d3.select('.plot-tooltip')
    fig.append('g') // 输出点
      .selectAll('circle')
      // .attr('class', 'points')
      .data(points)
      .enter()
      .append('circle')
      .attr('cursor', 'pointer')
      .attr('stroke', d => d.pid == focusPerson ? 'black' : 'none')
      .attr('stroke-width', '2.5')
      .attr('fill', function (d) {
        return z(d.fid)
      })
      .attr('cx', function (d) {
        return x(d.x)
      })
      .attr('cy', function (d) {
        return y(d.y)
      })
      .attr('r', 6)
      .style('opacity', "0.6")
      .on('mouseover', function (d) {
        d3.select(this)
          .style('opacity', 1)

        $tooltip.transition()
          .duration(100)
          .style('opacity', .7)

        let coordinates = d3.mouse(this);
        $tooltip.html('Family ID:  ' + d.fid + '<br/>' + 'Persion ID: ' + d.pid)
          .style('left', (coordinates[0] + 10) + 'px')
          .style('top', (coordinates[1]) + 'px')
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style('opacity', 0.6)

        $tooltip.transition()
          .duration(200)
          .style("opacity", 0);
      })
      .on('click', function (d) {
        store.dispatch(action.selectFamily(d.fid))
        store.dispatch(action.selectPerson(d.pid))
      })

    let legend = fig
      .append('g') // 画legend
      .attr('font-family', 'Arial')
      .attr('font-size', "12px")
      .attr("font-weight", "500")
      .attr('transform', `translate(${innerWidth + (margin / 2) + 10},0)`)
      .attr('text-anchor', 'start')
      .selectAll('g')
      .data(store.getState().selectedFamily)
      .enter()
      .append('g')
      .attr('transform', function (d, i) {
        return 'translate(0,' + i * 25 + ')'
      })
      .on('click', d => {
        store.dispatch(action.selectFamily(d))
      })
      .attr('cursor', 'pointer')


    var focusFamily = store.getState().focusFamily;
    legend.each(function (d) {
      if (d === focusFamily) {
        d3.select(this)
          .append('rect')
          .style("fill", '#bbb')
          .attr('width', 75)
          .attr('height', 20)
          .style("opacity", '0.7')
          .attr('rx', 5)
          .attr('x', -5)
          .attr('y', -4)
          .style("stroke-width", 0.5);
      }
    })
    legend
      .append('circle')
      .attr('r', 6)
      .attr('cx', 6)
      .attr('cy', 6)
      .attr('fill', z)
      .style("opacity", d => d === focusFamily ? '1' : '0.7')

    legend
      .append('text')
      .attr('x', 18)
      .attr('dy', 10)
      .text(function (d) {
        return "F" + d
      })
      .attr('fill', d => d === focusFamily ? '#fff' : '#000')

  }
  render() {

    return (
      <div id='ScatterPlot' className='pane'>
        <div className='header'>Scatter Plot</div>
        <div class='plot-tooltip'></div>
      </div>
    )
  }
}
