import React, { Component } from 'react';
import * as d3 from "d3";
import './DetailInfo.css';
import { Row, Col, List, Descriptions} from 'antd';
import store from '../../redux/index';
import axios from 'axios';

export default class DetailInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ID: 'ID: ',
            img:"./img/ASPHYXIA.jpg",
            data: {
                ID: 133,
                Sex: 'M',
                Birth_Year: 1900,
                Death_Year: 1950,
                BMI: 25,
                Suicide_Weapon: 'Rope',
                Death_Cause:'Acute carbon monoxide poisoning',
                suicide_glyphs:''
            },


        }
    }




    componentDidMount() {
        
        store.subscribe(() => {
            this.uploadData()
        })
        this.uploadData()
    }


    uploadData() {
        const focusPID = store.getState().focusPID
        axios.get("http://106.52.126.175/api/getDetailInfo/" + '?pid=' + focusPID
        ).then((res) => {
            let data = res.data;
            console.log("detailInfo", data)
            // if (data.maxbmi == 0) {
            //     data.maxbmi = 22
            // }
            this.setState({
                ID: 'ID: ' + data.pid,
                img: "./img/" + data.suicide_glyphs + ".png",
                data: {
                    ID: data.pid,
                    Sex: data.sex,
                    Birth_Year: data.bdate.slice(0,4),
                    Death_Year: data.ddate.slice(0,4),
                    BMI: data.maxbmi.toPrecision(4), //保留四位有效数字
                    Suicide_Weapon: data.weapon,
                    Death_Cause: data.cause_death,
                    
                },
    
            })
            // document.getElementById("BarChart").innerHTML = ''
            // document.getElementById("Heatmap").innerHTML = ''
            this.drawChart()
        })
    }

    drawChart() {

        // preserveAspectRatio="none" 不保留长宽比例
        const man_body = '<svg preserveAspectRatio="none" id="man" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2940" width="200" height="200"><path d="M512 88m-88 0a88 88 0 1 0 176 0 88 88 0 1 0-176 0Z" fill="#333333" p-id="2941"></path><path d="M744.9 619.6c-21.3 5.7-43.3-6.9-49-28.3l-64.1-239c-1.2-4.5-7.9-3.6-7.9 1V1008c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V640c0-8.8-7.2-16-16-16s-16 7.2-16 16v368c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V353.3c0-4.7-6.7-5.6-7.9-1l-64.1 239c-5.7 21.3-27.7 34-49 28.3-21.3-5.7-34-27.6-28.3-49l69.5-260C339 240.7 402.4 192 474.8 192h74.3c72.5 0 135.9 48.7 154.6 118.7l69.5 260c5.7 21.3-6.9 43.2-28.3 48.9z" fill="#333333" p-id="2942"></path></svg>'

        const woman_body = '<svg preserveAspectRatio="none" id="woman" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2987" width="225" height="225"><path d="M529.218 234.374c43.289 0 81.292 28.8 93 70.475l59.925 213.319c3.427 12.199-3.685 24.867-15.884 28.294-2.02 0.567-4.107 0.855-6.205 0.855-17.951 0-33.758-11.825-38.826-29.046l-53.568-182.01h-16.407l95.16 333.52h-87.43v244.56c0 19.694-15.966 35.659-35.66 35.659-19.693 0-35.658-15.965-35.658-35.659v-244.56h-17.112v245.697c0 18.983-15.39 34.372-34.372 34.372h-0.15c-19.09-0.084-34.522-15.583-34.522-34.673V669.78h-90.078l95.242-333.519h-14.872l-51.123 180.873c-5.047 17.855-21.342 30.183-39.897 30.183-13.136 0-23.785-10.649-23.785-23.785 0-2.17 0.297-4.329 0.882-6.418l59.465-212.205c11.687-41.706 49.705-70.535 93.017-70.535h98.858zM479.962 71c40.643 0 73.59 32.967 73.59 73.634 0 40.666-32.947 73.633-73.59 73.633s-73.59-32.967-73.59-73.633c0-40.667 32.947-73.634 73.59-73.634z" fill="#333333" p-id="2988"></path></svg>'

        let sex_icon;
        if(this.state.data.Sex == 'M') {
            sex_icon = man_body
        } else if (this.state.data.Sex == 'F'){
            sex_icon = woman_body
        }
        document.getElementById("body").innerHTML = sex_icon

        const height = document.getElementById("body").clientHeight
        const width = document.getElementById("body").clientWidth

        let bmi = this.state.data.BMI

        if (bmi == 0) {
            bmi = 22
        }

        //let new_width = 200;
        let new_width = width * (bmi / 22)
        let new_height = height * 0.9
        console.log(bmi / 22, new_width)

        if (this.state.data.Sex == 'M'){
        d3.select("#man")
            .attr('width', new_width)
            .attr("height", new_height)
            .attr("transform", `translate(${(200 - new_width) / 2},${new_height * 0.05})`)
            
        } else if (this.state.data.Sex == 'F') {
        d3.select("#woman")
            .attr('width', new_width)
            .attr("height", new_height)
            .attr("transform", `translate(${(200 - new_width) / 2}, ${new_height * 0.05})`)
        }
      

        // -----------------  rect 透明蒙板 ------------------------
        // console.log(this.state.data.ddate)
        // console.log(this.state.data.bdate)
        let age = this.state.data.Death_Year - this.state.data.Birth_Year

        console.log(age)

        let svg = d3.select("#body").append('svg')
            .attr("width", width*1.2).attr("height", height)
            .attr("transform", `translate(0, ${- (100-age) * 1.8})`);

        svg.append("rect")
            .attr("width", width*1.2).attr("height", 200)
            .attr("fill", "white")
            .attr("opacity", 0.35)
    }


    render() {
        return (
            <div id='DetailInfo' className='pane' style={{overflow : "hidden"}}>
                <div className='header'>Detail Information</div>

                {/* <div id = 'info' style={{ left : 200}}>  </div> */}

                <Row justify="space-around" align="middle">

                    <Col span={10} style={{ paddingTop: 10 }}>
                        <Row>                       
                            <div id='body' > </div>                       
                        </Row>

                        {/* <Row>
                        <img width={100} style={{}} src="./img/ASPHYXIA.jpg"/>
                        </Row> */}

                    </Col>

                    <Col span={14} >
                    
                        <Descriptions title={this.state.ID} style={{ padding: 10 }} >
                            <Descriptions.Item label="Sex" span={2}>
                                {this.state.data.Sex}
                            </Descriptions.Item>
                            
                            <Descriptions.Item label="BMI" span={2}>
                                {this.state.data.BMI}
                            </Descriptions.Item>

                            <Descriptions.Item label="Birth Year" span={2}>
                                {this.state.data.Birth_Year}
                            </Descriptions.Item>
                            
                            <Descriptions.Item label="Death Year" span={2}>
                                {this.state.data.Death_Year}
                            </Descriptions.Item>
                            
                            <Descriptions.Item label="Death Age" span={4}>
                                {this.state.data.Death_Year - this.state.data.Birth_Year}
                            </Descriptions.Item>

                    
                            

                            <Descriptions.Item label="Death Cause" span={4}>
                                {this.state.data.Death_Cause}
                            </Descriptions.Item>

                            <Descriptions.Item label="Suicide Weapon" span={2}>
                                {this.state.data.Suicide_Weapon}
                            </Descriptions.Item>     

                            <Descriptions.Item label=""  >
                                <img width={50} style={{}} src={this.state.img}/>
                            </Descriptions.Item>
                            
                        </Descriptions>

                    </Col>

                    {/* <Col span={1}></Col> */}

                </Row>

            </div>
        )
    }
}