import React, { Component } from 'react'

class TweetCard extends Component {
  render () {
    return (
      <div>
        tweet: {this.props.body}
      </div>
    )
  }
}

export default TweetCard
