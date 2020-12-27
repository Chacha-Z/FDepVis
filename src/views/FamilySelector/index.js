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
        }, ()=>{
            this.setFocus();
        });
        store.subscribe(()=>{
            this.setFocus();
        })
    }

    setFocus(){
        let focusFamily = store.getState().focusFamily;
        let nodes = document.getElementsByClassName('ant-table-row');
        console.log(nodes)
        for(var i = 0; i < nodes.length; i++){
            let key = nodes[i].getAttribute('data-row-key')
            if(key == focusFamily){
                nodes[i].classList.add('onFocus')
            }else{
                nodes[i].classList.remove('onFocus')
            }
        }
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
                                let nclasses = node.getAttribute('class');
                                if(nclasses.indexOf('onSelect') == -1){ // 未选中 - 选中
                                    node.classList.add('onSelect')
                                    store.dispatch(action.addFamily(record.ID)) 
                                }else{                                  // 选中
                                    if(nclasses.indexOf('onFocus') == -1){  // 选中，但未focus - focus
                                        node.classList.add('onFocus')
                                        store.dispatch(action.selectFamily(record.ID))
                                    }else{
                                        node.classList.remove('onSelect')   // 选中，且focus - 取消选中
                                        store.dispatch(action.removeFamily(record.ID))
                                    }
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