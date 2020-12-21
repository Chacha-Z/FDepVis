import React, { Component } from 'react';
import './FamilyTree.css';
import * as d3 from 'd3';
import store from '../../redux/index';
import axios from 'axios';

export default class FamilyTree extends Component {

  constructor(props){
    super(props)
    this.state = {
      focusFamily: 0
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
        this.uploadData()
    })
    this.uploadData();
  }
      
  uploadData() {
    const _this = this;
    
    const focusFamily = store.getState().focusFamily
    axios.get("http://106.52.126.175/api/getFamilyTree/"+'?fid='+focusFamily
    ).then((res) => {
        let data = res.data;

        this.drawHorPro(data);
    })
}
  
  // 径向树
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

  // 垂直树 
  drawHor(){
        const width = document.getElementById("FamilyTree").clientWidth
        const height = document.getElementById("FamilyTree").clientHeight-45
    
        var graphicOpt = {
          width: width,
          height: height,
          margin: 20,
        }
    
        let graphicOpt_radialC = {  //节点大小和颜色设置
            width:16,
            height:16,
            color: d3.scaleOrdinal()
                // .range(["aqua", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "black", "yellow"])
                .range(["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f","#eea60d","#a9402a","#845d54",,"#056f1f","#475e4c"])
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
            //   .append('circle')
              .append('g')
              .attr('transform',d=>`translate(${d.key === 'ind' ? 0 : (d.key === "mal" ? -12 : 12)},${d.key === 'ind' ? 0 : (d.key === "mal" ? -7 : 0)})`)
              .each(function(d){
                  let coupleholder =  d3.select(this);
                  if(d.key === 'ind'){
                    coupleholder.append('circle')
                                .attr("r", 7)
                  }else if(d.key === "mal"){
                    coupleholder.append('rect')
                                .attr("width", 14)
                                .attr("height", 14)
                  }else{
                    coupleholder.append('circle')
                                .attr("r", 7)
                  }
              })
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

    
  }

  // 改进垂直树
  drawHorPro(data){

        console.log('drawHorPro')
        const width = document.getElementById("FamilyTree").clientWidth
        const height = document.getElementById("FamilyTree").clientHeight-45
    
        var graphicOpt = {
          width: width,
          height: height,
          margin: 20,
        }
    
        let graphicOpt_radialC = {  //节点大小和颜色设置
            width:16,
            height:16,
            color: d3.scaleOrdinal()
                // .range(['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f', "silver", "teal", "black", "yellow"])
                .range(["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f","#eea60d","#a9402a","#845d54","#056f1f","#475e4c"])
        }
    
        d3.selection.prototype.moveToFront = function() {
            return this.each(function(){
                this.parentNode.appendChild(this);
            });
        };  
        let dataLists =[];
        
        loadTree(0);
        makeKey();
    
        function loadTree(isRight){
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
              .size([width*pn-margin*2, height-margin*3]);  //  [width, height]
    
          // 为cluster布局绑定数据:
          var root = d3.stratify()
              .id(function (d) {
                  return d.id;
              })
              .parentId(function (d) {
                  return d.parent;
              })
              (data);
    
          console.log(cluster(root));
    
          // 节点与节点之间链接生成器
          var linksGenerator = d3.linkVertical()
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
                  datainput = [{key: 'ind', data: [d.data]}];
              else
                  datainput = [{key: 'self', data: [d.data]}, {key: 'spouse', data: d.data.spouse}];
              if(d.data.children){
                datainput.push({key: 'children', data: d.data.children})
              }

              return datainput.filter(p => p.data.filter(pp => !pp.clinical_data )); // 只针对未自杀或自杀却没有临床属性数据的
            }).enter()
              .append('g')
              .attr('transform',d=>{
                let rad = d.key === 'individual'?3:8;
                let par = d.key === 'individual'?2.8:2.2;
                let x = 0, y = 0;
                if(d.key === 'spouse'){
                    x = rad*par;
                }
                if(d.key === 'children'){
                    x -= d.data.length%2 == 0 ? (d.data.length/2)*rad-rad/2 : Math.floor((d.data.length/2))*rad;
                    y = 15;
                }
                return `translate(${x}, ${y})`
              })
              .selectAll('g')
              .data(d => d.data)
              .enter()
              .append('g')
              .attr('transform',(d, i)=>{
                let rad = d.group === 'individual'?3:8;
                let par = d.group === 'individual'?2.8:2.2;
                let x = i*rad*par, y = 0;
                if(d.sex === 'M' ){
                    x -= rad;
                    y -= rad;
                }
                return `translate(${x}, ${y})`
              })
              .each(function(d){
                  let coupleholder =  d3.select(this);
                  let rad = d.group === 'individual'?3:8;
                  if(d.sex === 'F'){ 
                    coupleholder.append('circle')
                                .attr("r", rad)
                  }else{
                    coupleholder.append('rect')
                                .attr("width", rad*2)
                                .attr("height", rad*2)
                  }
              })
              .style("fill", function (d) {
                  if (d.is_suicide == 'Y') { //自杀的人（却没有临床属性数据），红色
                      return "red"
                  }else {
                      return "#ccc"
                  }
    
              })
              .attr("stroke", "#999")
              .style("stroke-width", .5);

          node  // 针对自杀且有临床属性数据的，使用饼图进行绘制
              .selectAll('g.personRadial').data(d => {
                let datainput=[];
                if (d.data.group === "individual")
                    datainput = [{key: 'ind', data: d.data}];
                else
                    datainput = [{key: 'self', data: d.data}, {key: 'spouse', data: d.data.spouse[0]}];
      
                return datainput.filter(p => p.data.clinical_data );
              }).enter()
                .append('g')
                .attr('class','personRadial')
                .attr('transform',d=>{
                  let rad = d.key === 'individual'?3:8;
                  let par = d.group === 'individual'?2.8:2.2;
                  let x = 0, y = 0; 
                  if(d.key === 'spouse'){
                    x = rad*par;
                  }
                  return `translate(${x}, ${y})`
                })
                .on('mouseover',function(){
                    // d3.select(this.parentNode).moveToFront();
                    d3.select(this).select('g').attr('transform','scale(4)');
                }).on('mouseout',function(){
                    d3.select(this).select('g').attr('transform','scale(1)');
                })
                .each(function(d){
                    // 画饼图
                    drawRadialChart({holder: d3.select(this),    //在该遍历数据及元素上绘制
                                     d: d.data,
                                     graphicopt: graphicOpt_radialC})
                })
        }
    
        function drawRadialChart({holder, d, graphicopt}) {
          let width = graphicopt.width;
          let height = graphicopt.height;
          let barHeight = height / 2;
          let color = graphicopt.color;
          let g = holder.append("g")
          // .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

        
          var data = d3.pie().value(d=>d.value)(d3.entries(d.clinical_data));
    
          var arc = d3.arc()
              .innerRadius(0)
              .outerRadius(barHeight);
          
          if(d.sex === 'M' ){
            arc.outerRadius(Math.sqrt(2)*barHeight);
            g.append("circle")
                .attr("r", Math.sqrt(2)*barHeight)
                .classed("outer", true)
                .style("fill", "white")
                .style("stroke", "red")
                .style("stroke-width", 0.5);
            g.append('rect')
                    .attr('x', -barHeight)
                    .attr('y', -barHeight)
                    .attr('width', barHeight*2)
                    .attr('height', barHeight*2)
                    .style("fill", "white")
                    .style("stroke", "red")
                    .style("stroke-width", 0.5);
            
            //蒙版
            g.append('clipPath')
                .attr('id', 'mark-area')
                .append('rect')
                .attr('x', -barHeight)
                .attr('y', -barHeight)
                .attr('width', barHeight*2)
                .attr('height', barHeight*2)
            g.attr('clip-path', 'url(#mark-area)')
          }else{
            g.append("circle")
                .attr("r", barHeight)
                .classed("outer", true)
                .style("fill", "white")
                .style("stroke", "red")
                .style("stroke-width", 0.5);

          }
            
          var segments = g.selectAll("path")
            .data(data)
            .enter().append("path")
            .style("fill", function (d) {
                return color(d.data.key);
            })
            .attr("d", arc)
    
        }

        function makeKey(){
            var keys = [
                "alcohol","psychosis","anxiety-non-trauma","somatic disorder", "eating", 
                "bipolar spectrum illness","depression","interpersonal trauma","PD-Cluster C-anxiety","PD-Cluster B-emotional",
                "PD","Impulse control disorder","obesity","cardiovascular","COPD","asthma","immune-autoimmune"]

            var colors = ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f","#eea60d","#a9402a","#845d54","#056f1f","#475e4c"]

            var group = d3.select("#FamilyTree svg")
                        .append("g").attr('class', 'legends')
                        .selectAll('g')
                        .data(keys)
                        .enter()
                        .append('g').attr('class', 'keysgroup')
                        .attr('transform', (d, i)=>`translate(${5}, ${i*20})`)
            group
                .append('circle')
                .attr("cx", 10)
                .attr("cy", 15)
                .attr("r", 6)
                .style("fill", (d, i)=>colors[i])
            group.append('text')
                .attr("y", '1.5em')
                .attr("dx", 23)
                .attr("dy", 3)
                .style("font-size", "10px")
                .text(d=>d);
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