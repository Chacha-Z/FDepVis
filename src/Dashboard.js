import React, { Component } from 'react';
import {  Row, Col  } from 'antd';
import ScatterPlot from './views/ScatterPlot';
import FamilySelector from './views/FamilySelector';
import FamilyTree from './views/FamilyTree';
import AttributesHeatmap from './views/AttributesHeatmap';
import DetailInfo from './views/DetailInfo';
import './dashboard.css';


export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Row style={{ height: '95vh' }}>
                    <Col span={6} style={{ height: '100%' }}>
                        <Row style={{ height: '40%' }}>
                            <ScatterPlot />
                        </Row>
                        <Row style={{ height: '60%' }}>
                            <FamilySelector />
                        </Row>
                    </Col>
                    <Col span={18} style={{ height: '100%' }}>
                        <Row style={{ height: '60%' }}>
                            <FamilyTree/>
                        </Row>
                        <Row style={{ height: '40%' }}>
                            <Col span={13} style={{ height: '100%' }}><AttributesHeatmap /></Col>
                            <Col span={11} style={{ height: '100%' }}><DetailInfo /></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ height: '5vh' }} id='footer' >
                    <div style={{textAlign: "center"}}>
                        Source Code <a href='https://github.com/Chacha-Z/FDepVis'>https://github.com/Chacha-Z/FDepVis</a>;
                        Author <a href='#'>我来取个名</a>;
                    </div>
                </Row>
            </div>
        )
    }
}
