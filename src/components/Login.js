import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { signUpUser } from '../actions/actions'

class Login extends Component {
  constructor (props) {
    super(props)
    this.loginSuccess = this.loginSuccess.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  signIn (userObject) {
    const { dispatch } = this.props
    dispatch(signUpUser(userObject))
  }

  loginSuccess (res) {
    const userObject = {
      googleId: res.googleId,
      displayName: res.w3.ig
    }
    this.signIn(userObject)
  }

  render () {
    return ( // todo: add form to input userName
      <div>
        <GoogleLogin
          clientId='51995173646-b85763mob6hf1fuu3mi3d2jmrqdmqi1a.apps.googleusercontent.com'
          buttonText='Start @me'
          onSuccess={this.loginSuccess}
        />
      </div>
    )
  }
}

function whatToConnect (state) {
  return {
    user: state.user
  }
}

export default connect(whatToConnect)(Login)
