import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditComponent from './EditComponent';
class AllForm extends Component {

    render() {
        const renderPost =
            (this.props.posts.length !== 0) ? (<ul className="list-group">
                <h1 className='text-center'>All Posts</h1>
                {this.props.posts.map((post) => {
                    return (
                        (post.editing) ? (<EditComponent post={post} key={post.id} />) : (<li key={post.id} className="list-group-item">
                            <h3 className='text-center'>{post.title}</h3>
                            <p className='text-center'>{post.message}</p>
                            <div className='row'>
                                <div className='col-sm-3'></div>
                                <button type='button' className='btn btn-outline-info col-sm-2' onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: post.id })}>Edit</button>
                                <div className='col-sm-2'></div>
                                <button type='button' className='btn btn-outline-danger col-sm-2' onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: post.id })}>Delete</button>
                                <div className='col-sm-3'></div>
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