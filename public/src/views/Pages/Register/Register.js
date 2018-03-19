import React, { Component } from 'react'
import { auth } from '../../../services/Authentication/Auth'

function setErrorMsg(error) {
  console.log('message', error.message);
  this.setState({ErrorPresent : true})
  return {
    registerError: error.message  
  }
 
}

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      registerError: "",
      ErrorPresent : false
    };
    this.OnChange = this.OnChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
   // this.OnRedirect =  this.OnRedirect.bind(this);
    
  } 
   OnChange(event){
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
   }
  handleSubmit (e) {
    e.preventDefault()
    let CompRef = this;
    auth(CompRef.state.user.Email, CompRef.state.user.Password)
    .catch(e => this.setState({ registerError: e.message , ErrorPresent: true  }))
  }

  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" name="Email"  onChange={this.OnChange} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="Password" className="form-control" onChange={this.OnChange} placeholder="Password"  />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError} 
              {this.state.ErrorPresent}
            </div>
          }
          <button type="submit" href="#/login" className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
}
