import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTweets } from '../actions/actions'
import TweetCard from './TweetCard'

class TweetList extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getTweets())
  }

  render () {
    return (
      <div>
        {this.props.tweets.map(cur =>
          <TweetCard key={cur._id} body={cur.body} authorId={cur.authorId} displayName={cur.displayName} />
        )}
      </div>
    )
  }
}

function whatToConnect (state) {
  return {
    tweets: state.tweets
  }
}

export default connect(whatToConnect)(TweetList)
