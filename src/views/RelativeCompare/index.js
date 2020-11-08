import React, { Component } from 'react';
import './RelativeCompare.css';

export default class RelativeCompare extends Component {

    selectUser = (user) => {
        this.props.changeSelectUser(user);
    }

    render() {
        const {data} = this.props;
        return (
            <div id='RelativeCompare' className='pane'>
                <div className='header'>Relative Compare</div>

            </div>
        )
    }
}