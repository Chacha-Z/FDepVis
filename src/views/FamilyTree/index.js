import React, { Component } from 'react';
import './FamilyTree.css';
import * as d3 from 'd3';
import store from '../../redux/index'

export default class FamilyTree extends Component {

  componentDidMount(){
    store.subscribe(()=>{
        this.drawHor()
    })
    this.drawHor();
  }
  
  draw(){
    
    const width = document.getElementById("FamilyTree").clientWidth
    const height = document.getElementById("FamilyTree").clientHeight-45

    var graphicOpt = {
      width: width,
      height: height,
      radius: height/2,
    }

    let graphicOpt_radialC = {  //节点大小和颜色设置
        width:14,
        height:14,
        color: d3.scaleOrdinal()
            .range(["aqua", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "black", "yellow"])
            //.range(["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f","#eea60d","#a9402a","#845d54",,"#056f1f","#475e4c"])
    }

    d3.selection.prototype.moveToFront = function() {
        return this.each(function(){
            this.parentNode.appendChild(this);
        });
    };
    let dataLists =[];
    // 加载数据
    loadTree("family149_3",0);
    loadTree("family176860_3",1);
    // makeKey();

    function loadTree(familyName,isRight){
      var data = store.getState()[familyName]
      dataLists[+isRight] = {id: 'Tree'+(+isRight), data:data};
      createHolder(dataLists)
    }


    // 添加SVG对象
    function createHolder(listTree) { // [{id: family1, data: loaded from json}]
      let holders = d3.select('#FamilyTree')
          .selectAll('div.svgHolder')
          .data(listTree, d=>d.id)
          .call(updateHoders);
      holders.exit().remove();
      holders
          .enter()
          .append('div')
          .attr('class','svgHolder')
          .call(updateHoders);

      function updateHoders(p){
          return p.attr('id',d=>d.id)
              .each(function(d){drawTree('#'+d.id, d.data, graphicOpt)});
      }
    }

    function drawTree(holder, data, graphicOpt) {
      // 定义画布维度和边界
      var width = graphicOpt.width;
      var height = graphicOpt.height;
      var radius = graphicOpt.radius; // dendrogram的直径

      let div = d3.select(holder);
      let svg = div.select('svg g.content')
          .attr("transform", "translate(" +  (radius+50) + "," + radius + ")");
      if (svg.empty()) // no svg
      {
          svg = div
              .append("svg")
              .attr("width", radius*2+150)
              .attr("height", radius*2)
              .append("g")
              .attr('class','content')
              .attr("transform", "translate(" +  (radius+50) + "," + radius + ")");
      }
      svg.selectAll("*").remove();

      // 定义cluster(dendrogram)布局:
      var cluster = d3.cluster()
          .size([360, radius - 20]);  // 360指整个圆. radius-60指dendrogram周围有20个像素

      // 为cluster布局绑定数据:
      var root = d3.stratify()
          .id(function (d) {
              return d.name;
          })
          .parentId(function (d) {
              return d.parent;
          })
          (data);

      cluster(root);
      console.log(cluster(root));

      // 节点与节点之间链接生成器
      var linksGenerator = d3.linkRadial()
          .angle(function (d) {
              return d.x / 180 * Math.PI;
          })
          .radius(function (d) {
              return d.y;
          });

      // 在节点间添加链接:
      svg.selectAll('path')
          .data(root.links())
          .enter()
          .append('path')
          .attr("d", linksGenerator)
          .style("fill", 'none')
          .attr("stroke", '#ccc')


      // 为每个节点添加圆.
      var node = svg.selectAll(".node")
          .data(root.descendants())
          .enter()
          .append("g")
          .attr("class", "node")
          .attr("transform", function (d) {
              return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
          });

      //console.log(svg.selectAll(".node"));
      node.selectAll('circle').data(d => {
          let datainput=[];
          if (d.data.group === "individual")
              datainput = [{key: 'ind', data: d}];
          else
              datainput = [{key: 'mal', data: d}, {key: 'fem', data: d}];

          return datainput.filter(person=>!d.data[person.key+'_data']);
      }).enter()
          .append('circle')
          .attr("r", 7)

          //.style("fill", "#69b3a2")
          .style("fill", function (d) {
              if (d.data.data[d.key + '_suicide'] == 'Y') {
                  return "red"
              }
              if (d.data.data[d.key + '_deceased'] == 'Y') {
                  return "black"
              } else {
                  return "#69b3a2"
              }

          })
          .attr("cy", d => d.key === 'ind' ? 0 : (d.key === "mal" ? -8 : 8))
          .attr("stroke", "black")
          .style("stroke-width", .5);
      node
          .selectAll('g.personRadial').data(d => {
          let datainput=[];
          if (d.data.group === "individual")
              datainput = [{key: 'ind', data: d}];
          else
              datainput = [{key: 'mal', data: d}, {key: 'fem', data: d}];

          return datainput.filter(person=>d.data[person.key+'_data']);
      }).enter()
          .append('g')
          .attr('class','personRadial')
          .attr('transform',d=>`translate(0,${d.key === 'ind' ? 0 : (d.key === "mal" ? -8 : 8)})`)
          .on('mouseover',function(){
              d3.select(this.parentNode).moveToFront();
              d3.select(this).select('g').attr('transform','scale(8)');
          }).on('mouseout',function(){
              d3.select(this).select('g').attr('transform','scale(1)');
          })
          .each(function(d){
              // draw radial function
              drawRadialChart({holder:d3.select(this),
                  data:d.data.data[d.key+'_data'],
                  graphicopt:graphicOpt_radialC})
          })
    }

    function drawRadialChart({holder,data,graphicopt}) {
      let width = graphicopt.width;
      let height = graphicopt.height;
      let barHeight = height / 2;
      let color = graphicopt.color;
      let svg = holder.append("g")
          // .attr("transform", "translate(" + width/2 + "," + height/2 + ")");
      data = d3.entries(data);
      var extent = d3.extent(data, function (d) {
          return d.value;
      });
      var barScale = d3.scaleLinear()
          .domain(extent)
          .range([0, barHeight]);
      console.log(data)
      var keys = data.map(function (d, i) {
          return d.key;
      });
      var numBars = keys.length;

      var arc = d3.arc()
          .startAngle(function (d, i) {
              return (i * 2 * Math.PI) / numBars;
          })
          .endAngle(function (d, i) {
              return ((i + 1) * 2 * Math.PI) / numBars;
          })
          .innerRadius(0)
          .outerRadius(d => barScale(+d.value));
      svg.append("circle")
          .attr("r", barHeight)
          .classed("outer", true)
          .style("fill", "white")
          .style("stroke", "red")
          .style("stroke-width", 0.5);
      var segments = svg.selectAll("path")
          .data(data)
          .enter().append("path")
          .each(function (d) {
              d.outerRadius = 0;
          })
          .style("fill", function (d) {
              return color(d.key);
          })
          .attr("d", arc);

    }
}

    drawHor(){
        const width = document.getElementById("FamilyTree").clientWidth
        const height = document.getElementById("FamilyTree").clientHeight-45
    
        var graphicOpt = {
          width: width,
          height: height,
          margin: 20,
        }
    
        let graphicOpt_radialC = {  //节点大小和颜色设置
            width:14,
            height:14,
            color: d3.scaleOrdinal()
                .range(["aqua", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "black", "yellow"])
                //.range(["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f","#eea60d","#a9402a","#845d54",,"#056f1f","#475e4c"])
        }
    
        d3.selection.prototype.moveToFront = function() {
            return this.each(function(){
                this.parentNode.appendChild(this);
            });
        };
        let dataLists =[];
        // 加载数据
        // loadTree("family149_3",0);
        loadTree(store.getState().focusFamily,0);
        // makeKey();
    
        function loadTree(familyName,isRight){
          var data = store.getState()[familyName]
          dataLists[+isRight] = {id: 'Tree'+(+isRight), data:data};
          createHolder(dataLists)
        }
    
        // 添加SVG对象
        function createHolder(listTree) { // [{id: family1, data: loaded from json}]
          let holders = d3.select('#FamilyTree')
              .selectAll('div.svgHolder')
              .data(listTree, d=>d.id)
              .call(updateHoders);
          holders.exit().remove();
          holders
              .enter()
              .append('div')
              .attr('class','svgHolder')
              .call(updateHoders);
    
          function updateHoders(p){
              return p.attr('id',d=>d.id)
                  .each(function(d){drawTree('#'+d.id, d.data, graphicOpt)});
          }
        }
    
        function drawTree(holder, data, graphicOpt) {
          // 定义画布维度和边界
          var width = graphicOpt.width;
          var height = graphicOpt.height;
          var margin = graphicOpt.margin; // dendrogram的直径
          var pn = Math.floor(data.length/100) == 0?1: Math.floor(data.length/100)+1;
          console.log(data.length, data.length/100, pn)
          let div = d3.select(holder);
          div.select('svg').remove()
          var svg = div
                    .append("svg")
                    .attr("width", width*pn)
                    .attr("height", height)
                    .append("g")
                    .attr('class','content')
                    .attr("transform", "translate(" + margin + "," + margin + ")");
          svg.selectAll("*").remove();
          // 定义cluster(dendrogram)布局:
          var cluster = d3.cluster()
            //   .size([360, radius - 20]);  // 360指整个圆. radius-60指dendrogram周围有20个像素
              .size([width*pn-margin*2, height-margin*2]);  //  [width, height]
    
          // 为cluster布局绑定数据:
          var root = d3.stratify()
              .id(function (d) {
                  return d.name;
              })
              .parentId(function (d) {
                  return d.parent;
              })
              (data);
    
          console.log(cluster(root));
    
          // 节点与节点之间链接生成器
          var linksGenerator = d3.linkHorizontal()
                                .x(function(d) { return d.x; })
                                .y(function(d) { return d.y; });
    
          // 在节点间添加链接:
          svg.selectAll('path')
              .data(root.links())
              .enter()
              .append('path')
              .attr("d", linksGenerator)
              .style("fill", 'none')
              .attr("stroke", '#ccc')
            console.log(root.links());
    
    
          // 为每个节点添加圆.
          var node = svg.selectAll(".node")
              .data(root.descendants())
              .enter()
              .append("g")
              .attr("class", "node")
              .attr("transform", function (d) {
                  return "translate(" + d.x +","+ d.y + ")";
              });
            console.log(root.descendants());
    
          // 为每个节点画一或两个圆，需要对原数据进行修改，将原数据拆分成一或二长度的数组，再对数组中每个数据进行操作（画圆）
          node.selectAll('circle').data(d => {
              let datainput=[];
              if (d.data.group === "individual")
                  datainput = [{key: 'ind', data: d}];
              else
                  datainput = [{key: 'mal', data: d}, {key: 'fem', data: d}];
    
              return datainput.filter(person=>!d.data[person.key+'_data']); // 只针对未自杀或自杀却没有临床属性数据的
            }).enter()
              .append('circle')
              .attr("r", 7)
    
              .style("fill", function (d) {
                  if (d.data.data[d.key + '_suicide'] == 'Y') { //自杀的人（却没有临床属性数据），红色
                      return "red"
                  }else if (d.data.data[d.key + '_deceased'] == 'Y') {    // 死亡的人
                      return "black"
                  } else {
                      return "#69b3a2"
                  }
    
              })
              .attr("cx", d => d.key === 'ind' ? 0 : (d.key === "mal" ? -8 : 8)) // 设置偏移量
              .attr("stroke", "black")
              .style("stroke-width", .5);

          node  // 针对自杀且有临床属性数据的，使用饼图进行绘制
              .selectAll('g.personRadial').data(d => {
                let datainput=[];
                if (d.data.group === "individual")
                    datainput = [{key: 'ind', data: d}];
                else
                    datainput = [{key: 'mal', data: d}, {key: 'fem', data: d}];
        
                return datainput.filter(person=>d.data[person.key+'_data']);
              }).enter()
                .append('g')
                .attr('class','personRadial')
                .attr('transform',d=>`translate(${d.key === 'ind' ? 0 : (d.key === "mal" ? -8 : 8)},0)`)
                .on('mouseover',function(){
                    d3.select(this.parentNode).moveToFront();
                    d3.select(this).select('g').attr('transform','scale(8)');
                }).on('mouseout',function(){
                    d3.select(this).select('g').attr('transform','scale(1)');
                })
                .each(function(d){
                    // 画饼图
                    drawRadialChart({holder: d3.select(this),    //在该遍历数据及元素上绘制
                                     data: d.data.data[d.key+'_data'],
                                     graphicopt: graphicOpt_radialC})
                })
              }
    
        function drawRadialChart({holder, data, graphicopt}) {
          let width = graphicopt.width;
          let height = graphicopt.height;
          let barHeight = height / 2;
          let color = graphicopt.color;
          let svg = holder.append("g")
              // .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

          data = d3.pie().value(d=>d.value)(d3.entries(data));
    
          var arc = d3.arc()
              .innerRadius(0)
              .outerRadius(barHeight);

          svg.append("circle")
              .attr("r", barHeight)
              .classed("outer", true)
              .style("fill", "white")
              .style("stroke", "red")
              .style("stroke-width", 0.5);

          var segments = svg.selectAll("path")
              .data(data)
              .enter().append("path")
              .style("fill", function (d) {
                  return color(d.data.key);
              })
              .attr("d", arc);
    
    }

    function makeKey(){
      var key1 = d3.select("svg")
          .append("g");
      key1.append("circle")
          .attr("cx", 20)
          .attr("cy", 20)
          .attr("r", 15)
          .style("fill", "aqua")
      key1.append("text")
          .attr("dx", 38)
          .attr("dy", 24)
          .style("font-size", "14px")
          .text("Alcohol");
      var key2 = d3.select("svg")
          .append("g");
      key2.append("circle")
          .attr("cx", 110)
          .attr("cy", 20)
          .attr("r", 15)
          .style("fill", "blue")
      key2.append("text")
          .attr("dx", 128)
          .attr("dy", 24)
          .style("font-size", "14px")
          .text("Psychosis");
      var key3 = d3.select("svg")
          .append("g");
      key3.append("circle")
          .attr("cx", 210)
          .attr("cy", 20)
          .attr("r", 15)
          .style("fill", "fuchsia")
      key3.append("text")
          .attr("dx", 228)
          .attr("dy", 24)
          .style("font-size", "14px")
          .text("Anxiety-non-trauma");
      var key4 = d3.select("svg")
          .append("g");
      key4.append("circle")
          .attr("cx", 370)
          .attr("cy", 20)
          .attr("r", 15)
          .style("fill", "gray")
      key4.append("text")
          .attr("dx", 388)
          .attr("dy", 24)
          .style("font-size", "14px")
          .text("Somatic disorder");
      var key5 = d3.select("svg")
          .append("g");
      key5.append("circle")
          .attr("cx", 510)
          .attr("cy", 20)
          .attr("r", 15)
          .style("fill", "green")
      key5.append("text")
          .attr("dx", 528)
          .attr("dy", 24)
          .style("font-size", "14px")
          .text("Bipolar spectrum illness");
      var key6 = d3.select("svg")
          .append("g");
      key6.append("circle")
          .attr("cx", 695)
          .attr("cy", 20)
          .attr("r", 15)
          .style("fill", "lime")
      key6.append("text")
          .attr("dx", 713)
          .attr("dy", 24)
          .style("font-size", "14px")
          .text("Depression");
      var key7 = d3.select("svg")
          .append("g");
      key7.append("circle")
          .attr("cx", 805)
          .attr("cy", 20)
          .attr("r", 15)
          .style("fill", "maroon")
      key7.append("text")
          .attr("dx", 823)
          .attr("dy", 24)
          .style("font-size", "14px")
          .text("Interpersonal trauma");
      var key8 = d3.select("svg")
          .append("g");
      key8.append("circle")
          .attr("cx", 965)
          .attr("cy", 20)
          .attr("r", 15)
          .style("fill", "navy")
      key8.append("text")
          .attr("dx", 983)
          .attr("dy", 24)
          .style("font-size", "14px")
          .text("PD-Cluster C-anxiety");
      var key9 = d3.select("svg")
          .append("g");
      key9.append("circle")
          .attr("cx", 20)
          .attr("cy", 60)
          .attr("r", 15)
          .style("fill", "olive")
      key9.append("text")
          .attr("dx", 38)
          .attr("dy", 64)
          .style("font-size", "14px")
          .text("PD-Cluster B-emotional");
      var key10 = d3.select("svg")
          .append("g");
      key10.append("circle")
          .attr("cx", 200)
          .attr("cy", 60)
          .attr("r", 15)
          .style("fill", "orange")
      key10.append("text")
          .attr("dx", 218)
          .attr("dy", 64)
          .style("font-size", "14px")
          .text("PD");
      var key11 = d3.select("svg")
          .append("g");
      key11.append("circle")
          .attr("cx", 265)
          .attr("cy", 60)
          .attr("r", 15)
          .style("fill", "purple")
      key11.append("text")
          .attr("dx", 283)
          .attr("dy", 64)
          .style("font-size", "14px")
          .text("Impulse control disorder");
      var key12 = d3.select("svg")
          .append("g");
      key12.append("circle")
          .attr("cx", 450)
          .attr("cy", 60)
          .attr("r", 15)
          .style("fill", "red")
      key12.append("text")
          .attr("dx", 468)
          .attr("dy", 64)
          .style("font-size", "14px")
          .text("Obesity");
      var key13 = d3.select("svg")
          .append("g");
      key13.append("circle")
          .attr("cx", 540)
          .attr("cy", 60)
          .attr("r", 15)
          .style("fill", "silver")
      key13.append("text")
          .attr("dx", 558)
          .attr("dy", 64)
          .style("font-size", "14px")
          .text("Cardiovascular");
      var key14 = d3.select("svg")
          .append("g");
      key14.append("circle")
          .attr("cx", 675)
          .attr("cy", 60)
          .attr("r", 15)
          .style("fill", "teal")
      key14.append("text")
          .attr("dx", 693)
          .attr("dy", 64)
          .style("font-size", "14px")
          .text("COPD");
      var key15 = d3.select("svg")
          .append("g");
      key15.append("circle")
          .attr("cx", 755)
          .attr("cy", 60)
          .attr("r", 15)
          .style("fill", "black")
      key15.append("text")
          .attr("dx", 773)
          .attr("dy", 64)
          .style("font-size", "14px")
          .text("Asthma");
      var key16 = d3.select("svg")
          .append("g");
      key16.append("circle")
          .attr("cx", 840)
          .attr("cy", 60)
          .attr("r", 15)
          .style("fill", "yellow")
      key16.append("text")
          .attr("dx", 858)
          .attr("dy", 64)
          .style("font-size", "14px")
          .text("Immune-autoimmune");
    }
    
  }


    render() {
        return (
            <div id='FamilyTree' className='pane' >
                <div className='header'>Family Tree</div>
            </div>
        )
    }
}