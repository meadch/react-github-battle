const React = require('react'),
      Results = require('../components/Results'),
      githubHelpers = require('../utils/githubHelpers')

const ResultsContainer = React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount () {
    // When component mounts, have battle take place
    githubHelpers.battle(this.props.location.state.playersInfo)
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

module.exports = ResultsContainer
