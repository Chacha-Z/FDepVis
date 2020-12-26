import React, { Component } from 'react';
import './FamilySelector.css';
import { Table, Tag, Space } from 'antd';
// 使用redux
import store from '../../redux/index'
import action from '../../redux/actions'

export default class FamilySelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'ID',
                    key: 'ID'
                },
                {
                    title: 'people',
                    dataIndex: 'people',
                    key: 'people'
                },
                {
                    title: 'SNum',
                    dataIndex: 'SNum',
                    key: 'SNum'
                }
            ]
        };
    }
    componentDidMount(){
        this.setState({
            dataSource: store.getState().familyInfo
        });
    }

    onRowClick(e){
        console.log(e)
    }

    getElementByAttr(tag,attr,value){
        var aElements=document.getElementsByTagName(tag);
        var aEle=[];
        for(var i=0;i<aElements.length;i++)
        {
            if(aElements[i].getAttribute(attr)==value)
                aEle.push( aElements[i] );
        }
        return aEle;
    }
    render() {
        return (
            <div id='FamilySelector' className='pane'>
                <div className='header'>Family Selector</div>
                <Table 
                    onRow={record => {
                        return {
                            onClick: event => {
                                console.log(record)
                                let node = this.getElementByAttr('tr', 'data-row-key', record.key)[0];
                                if(node.getAttribute('class').indexOf('onSelect') == -1){
                                    node.classList.add('onSelect')
                                    store.dispatch(action.addFamily(record.ID))
                                }else{
                                    node.classList.remove('onSelect')
                                    store.dispatch(action.removeFamily(record.ID))
                                }
                            }
                        };
                    }}
                    rowClassName={record => {
                        return  store.getState().selectedFamily.indexOf(record.key) !== -1 ? 'onSelect' : '';
                    }}
                    dataSource={this.state.dataSource} columns={this.state.columns} size='small'
                    pagination={{
                        hideOnSinglePage: true,
                        defaultPageSize: 10
                    }}
                />
            </div>
        )
    }
}