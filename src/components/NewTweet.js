import React, { Component } from 'react'

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
    console.log('post tweet')
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
