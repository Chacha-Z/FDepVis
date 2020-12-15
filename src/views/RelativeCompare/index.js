import React, { Component } from 'react';
import * as d3 from "d3";
import './RelativeCompare.css';

export default class RelativeCompare extends Component {
    constructor(props){
        super(props)
        this.state = {
            nodes: [    //节点集
                {name:"xxx", isDep: false},
                {name:"xx", isDep: true},
                {name:"xx", isDep: false},
                {name:"xxxx", isDep: true},
                {name:"x", isDep: true},
                {name:"xxxx", isDep: false},
                {name:"xxx", isDep: false},
                {name:"xxx", isDep: true},
                {name:"xx", isDep: false}, 
                {name:"xxx", isDep: false},
                {name:"xx", isDep: true},
                {name:"xx", isDep: false},
                {name:"xxxx", isDep: true},
                {name:"x", isDep: true},
                {name:"xxxx", isDep: false},
                {name:"xxx", isDep: false},
                {name:"xxx", isDep: true},
                {name:"xx", isDep: false}
            ],
            edges: [    //边集
                {source:0,target:4,value:1.3},
                {source:4,target:5,value:1},
                {source:4,target:6,value:1},
                {source:4,target:7,value:1},
                {source:1,target:6,value:2},
                {source:2,target:5,value:0.9},
                {source:3,target:7,value:1},
                {source:5,target:6,value:1.6},
                {source:6,target:7,value:0.7},
                {source:6,target:8,value:2},
                {source:13,target:5,value:0.9},
                {source:9,target:3,value:0.9},
                {source:10,target:7,value:1},
                {source:12,target:6,value:1.6},
                {source:11,target:7,value:0.7},
                {source:14,target:5,value:2},
                {source:15,target:2,value:0.7},
                {source:16,target:4,value:2},
                {source:17,target:8,value:2}
            ]
        }
    }
    componentDidMount(){
        this.drawChart()
    }




    drawChart(){
        function ticked(){
            links
                .attr("x1", function(d){return validateXY(d.source.x, 'x')})
                .attr("y1", function(d){return validateXY(d.source.y, 'y')})
                .attr("x2", function(d){return validateXY(d.target.x, 'x')})
                .attr("y2", function(d){return validateXY(d.target.y, 'y')});
                
            gs.attr("transform", function(d) { return "translate(" + validateXY(d.x, 'x') + "," + validateXY(d.y, 'y') + ")"; });
        }
    
        
        function started(d){
            if(!d3.event.active){
                forceSimulation.alphaTarget(0.8).restart();//设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
            }
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d){
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }
        function ended(d){
            if(!d3.event.active){
                forceSimulation.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        }

        function validateXY(val, type){
            var r = 20;
            if(val < r) return r;
            if(type == 'x'){
                if(val > width - r) return width - r;
            }else{
                if(val > height - r) return height - 2*r;
            }
            return val
        }

        const width = document.getElementById("RelativeCompare").clientWidth
        const height = document.getElementById("RelativeCompare").clientHeight - 30
        
        var marge = {top:10, bottom:10, left:10, right:10}
        var svg = d3.select("#RelativeCompare").append('svg')
                    .attr("width", width).attr("height", height)
        var g = svg.append("g")
                    .attr("transform", "translate("+marge.top+","+marge.left+")");

        ////初始化力学仿真器，通过布局函数格式化数据    
        var forceSimulation = d3.forceSimulation()
                                .force("link", d3.forceLink())
                                .force("charge", d3.forceManyBody())
                                .force("center", d3.forceCenter());
        
        //生成节点数据
        forceSimulation.nodes(this.state.nodes)
                        .on("tick", ticked);//这个函数很重要，后面给出具体实现和说明
        
        //生成边数据
    	forceSimulation.force("link")
                        .links(this.state.edges)
                        .distance((d) => {//每一边的长度
                            return d.value*80;
                        })
        //设置图形的中心位置	
    	forceSimulation.force("center")
                        .x(width/2)
                        .y(height/2);
        
        //绘制边
    	var links = g.append("g")
                    .selectAll("line")
                    .data(this.state.edges)
                    .enter()
                    .append("line")
                    .attr("stroke", '#bbb')
                    .attr("stroke-width", d => d.value);
        //建立用来放在每个节点和对应文字的分组<g>
        var gs = g.selectAll(".circleText")
                    .data(this.state.nodes)
                    .enter()
                    .append("g")
                    .attr("transform", (d,i) => {
                        var cirX = d.x;
                        var cirY = d.y;
                        return "translate("+cirX+","+cirY+")";
                    })
                    .call(d3.drag()
                        .on("start", started)
                        .on("drag", dragged)
                        .on("end", ended)
                    )
                
        //绘制节点
        gs.append("circle")
            .attr("r", 20)
            .attr("fill", d=>d.isDep == true?'#295981':'#eee')
        //文字
        gs.append("text")
            .attr("x", 0)
            .attr("y", 0)
            .attr("dy", '0.38em')
            .attr('text-anchor', 'middle')
            .attr('fill', d=>d.isDep == true?'#fff':'#000')
            .text((d)=>{
                return d.name;
            })
    }

    render() {
        return (
            <div id='RelativeCompare' className='pane'>
                <div className='header'>Relative Compare</div>

            </div>
        )
    }
}