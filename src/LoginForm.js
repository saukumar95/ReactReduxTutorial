import React, { Component } from 'react';
import { connect } from 'react-redux';
import WelcomePage from './WelcomePage';
class LoginForm extends Component {
    handleLogin = (event) => {
        event.preventDefault();
        const uname = this.getUname.value;
        const pass = this.getPass.value;
        const login = {
            id: new Date(),
            uname,
            pass
        }
        this.props.dispatch({
            type: 'LOGIN',
            login
        })
        this.getUname.value = '';
        this.getPass.value = '';
    }
    render() {
        return (
            <div>
                {(this.props.login.uname === 'saukumar95@gmail.com' && this.props.login.pass === 'sau')?(<WelcomePage login={this.props.login}/>):(<div>
                    <h1 className='text-center'>Login</h1>
                    <form onSubmit={this.handleLogin}>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-sm-3'></div>
                                <label className='form-control-label col-sm-1'>Email</label>
                                <input required type="email" autoComplete="off" placeholder="" className='form-control col-sm-4' ref={(input) => this.getUname = input} />
                                <div className='col-sm-4'></div>
                            </div>
                            <p />
                            <div className='row'>
                                <div className='col-sm-3'></div>
                                <label className='form-control-label col-sm-1'>Password</label>
                                <input required type="password" autoComplete="off" placeholder="Password" className='form-control col-sm-4' ref={(input) => this.getPass = input} />
                                <div className='col-sm-4'></div>
                            </div>
                            <p />
                            <div className='row'>
                                <div className='col-sm-5'></div>
                                <button className='btn btn-outline-success form-control col-sm-2'>Login</button>
                                <div className='col-sm-5'></div>
                            </div>
                        </div>
                    </form>
                </div>)}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        login: state
    }
}
export default connect(mapStateToProps)(LoginForm);