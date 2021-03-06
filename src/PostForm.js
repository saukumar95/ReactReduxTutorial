import React, { Component } from 'react';
import { connect } from 'react-redux';
const fs = require('fs');
class PostForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value
        const message = this.getMessage.value
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        fs.writeFile('mynewfile3.txt', `${this.getTitle.value}
                                        ${this.getMessage.value}`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        this.getTitle.value = ''
        this.getMessage.value = ''
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <div className='row'>
                            <div className='col-sm-4'></div>
                            <input required type="text" autoComplete="off" placeholder="Enter Post Title" className='form-control col-sm-4' ref={(input) => this.getTitle = input} />
                            <div className='col-sm-4'></div>
                        </div>
                        <p />
                        <div className='row'>
                            <div className='col-sm-4'></div>
                            <textarea required rows="5" cols="28" autoComplete="off" placeholder="Enter Post" className='form-control col-sm-4' ref={(input) => this.getMessage = input} />
                            <div className='col-sm-4'></div>
                        </div>
                        <p />
                        <div className='row'>
                            <div className='col-sm-5'></div>
                            <button className='btn btn-outline-success form-control col-sm-2'>Post</button>
                            <div className='col-sm-5'></div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);