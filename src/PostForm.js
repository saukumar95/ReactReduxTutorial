import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value
        const message = this.getMessage.value
        const data  = {
            id : new Date(),
            title,
            message
        }
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getTitle.value=''
        this.getMessage.value=''
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="Enter Post Title" ref={(input) => this.getTitle = input } /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Enter Post" ref={(input) => this.getMessage = input } /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect() (PostForm);