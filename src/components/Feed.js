import React, { Component } from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'
class Feed extends Component {
  render () {
    return (
      <React.Fragment>
        <NewTweet />
        <TweetList />
      </React.Fragment>
    )
  }
}

export default Feed
