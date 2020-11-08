import React, { Component } from 'react';
import './AttributesHeatmap.css';

export default class AttributesHeatmap extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='AttributesHeatmap' className='pane' >
                <div className='header' >Attributes Heatmap</div>
                <div>
                {/* <BarChart data={data} width={1000} height={550}/> */}
                </div>                
            </div>
        )
    }
}