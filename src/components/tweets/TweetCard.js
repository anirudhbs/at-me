import React, { Component } from 'react'

class TweetCard extends Component {
  render () {
    return (
      <div>
        <a href={'/user/' + this.props.authorId}>{this.props.displayName}</a>
        <div>
          tweet: {this.props.body}
        </div>
      </div>
    )
  }
}

export default TweetCard
