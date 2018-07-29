import React, { Component } from 'react'
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleEditing = (event) => {
        event.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const newData = {
            newTitle,
            newMessage,
        }
        this.props.dispatch({
            type: 'UPDATE_POST',
            id: this.props.post.id,
            newData
        })
    }

    render() {
        return (
            <div key={this.props.post.id}>
                <form onSubmit={this.handleEditing}>
                    <div className='form-group'>
                        <div className='row'>
                            <div className='col-sm-4'></div>
                            <input required type="text" autoComplete="off" defaultValue={this.props.post.title} placeholder="Enter Post Title" className='form-control col-sm-4' ref={(input) => this.getTitle = input} />
                            <div className='col-sm-4'></div>
                        </div>
                        <p />
                        <div className='row'>
                            <div className='col-sm-4'></div>
                            <textarea required rows="5" cols="28" autoComplete="off" defaultValue={this.props.post.message} placeholder="Enter Post" className='form-control col-sm-4' ref={(input) => this.getMessage = input} />
                            <div className='col-sm-4'></div>
                        </div>
                        <p />
                        <div className='row'>
                            <div className='col-sm-3'></div>
                            <button className='btn btn-outline-success form-control col-sm-2'>Update</button>
                            <div className='col-sm-3'></div>
                            <button className='btn btn-outline-secondary form-control col-sm-2' onClick={() => this.props.dispatch({ type: 'GO_BACK', editing: false })}>Back</button>
                            <div className='col-sm-3'></div>
                        </div>
                        <p />
                    </div>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);