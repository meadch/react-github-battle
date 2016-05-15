import React from 'react'
import Results from '../components/Results'
import { battle } from '../utils/githubHelpers'

const ResultsContainer = React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount () {
    battle(this.props.location.state.playersInfo)
    .then( (results) => {
      this.setState({
        scores: results,
        isLoading: false
      })
    })
  },
  render () {
    return <Results
              isLoading={this.state.isLoading}
              scores={this.state.scores}
              playersInfo={this.props.location.state.playersInfo} />
  }
})

export default ResultsContainer
