import React, { Component } from 'react'
import { getAccessToken } from '../actions/actions'

class NewTweet extends Component {
  constructor () {
    super()
    this.state = {
      body: ''
    }
    this.changeBody = this.changeBody.bind(this)
    this.postTweet = this.postTweet.bind(this)
  }

  changeBody (e) {
    this.setState({
      body: e.target.value
    })
  }

  postTweet () {
    fetch('http://localhost:3000/api/tweets/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${getAccessToken()}`
      },
      body: JSON.stringify({
        body: this.state.body
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ body: '' })
      })
      .catch((err) => {
        console.log('Error while posting tweet', err) // todo: fix error
      })
  }

  render () {
    const { body } = this.state
    return (
      <div>
        <input type='text' value={body} onChange={this.changeBody} />
        <button onClick={this.postTweet}>post</button>
      </div>
    )
  }
}

export default NewTweet
