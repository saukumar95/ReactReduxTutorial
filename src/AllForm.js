import React, { Component } from 'react';
import { connect } from 'react-redux';
class AllForm extends Component {

    render() {
        const renderPost = <ul>
            {this.props.posts.map((post) => {
                return (
                    <li key={post.id}><h3>{post.title}</h3>
                        <p>{post.message}</p>
                        <button>Edit</button>
                        <button
                            onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: post.id })}>
                            Delete</button>
                    </li>
                )
            })
            }
        </ul>
        return (
            <div>
                <h1>All Posts</h1>

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