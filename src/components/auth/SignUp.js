import React, { Component } from 'react'
import { singUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.singUp(this.state);
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
       
    }
    
    
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' /> 
        return (
     
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3"> Sign Up </h5>
                    <div className="input-field">
                        <label htmlFor="fname"> First Name </label>
                        <input type="text" id="fname" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lname"> Last Name </label>
                        <input type="text" id="lname" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"> Password </label>
                        <input type="password" id="password" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                       <button className="btn pink lighten-1 z-depth-0" >SignUp</button>
                       <div className="center red-text">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        singUp: (newUser) => dispatch(singUp(newUser))
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
  }



export default connect(mapStateToProps,mapDispatchToProps) (SignUp)
