import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditComponent from './EditComponent';
class AllForm extends Component {

    render() {
        const renderPost =
            (this.props.posts.length !== 0) ? (<ul className="list-group">
                <div className='row'>
                    <div className='col-sm-5'></div>
                    <h1>All Posts</h1>
                    <div className='col-sm-5'></div>
                </div>
                {this.props.posts.map((post) => {
                    return (
                        (post.editing) ? (<EditComponent post={post} key={post.id} />) : (<li key={post.id} className="list-group-item">
                            <div className='row'>
                                <div className='col-sm-5'></div>
                                <h3>{post.title}</h3>
                                <div className='col-sm-5'></div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-5'></div>
                                <p>{post.message}</p>
                                <div className='col-sm-5'></div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-3'></div>
                                <button type='button' className='btn btn-outline-info col-sm-2' onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: post.id })}>Edit</button>
                                <div className='col-sm-1'></div>
                                <button type='button' className='btn btn-outline-danger col-sm-2' onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: post.id })}>Delete</button>
                                <div className='col-sm-4'></div>
                            </div>
                        </li>)
                    )
                })
                }
            </ul>) : null
        return (
            <div>
                {renderPost}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllForm);