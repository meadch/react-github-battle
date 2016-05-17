import React, {Component} from 'react'
import Results from '../components/Results'
import { battle } from '../utils/githubHelpers'

class ResultsContainer extends Component {
  constructor () {
    super()
    this.state =  {
      isLoading: true,
      scores: []
    }
  }
  async componentDidMount () {
    try {
      const results = await battle(this.props.location.state.playersInfo)
      this.setState({
        scores: results,
        isLoading: false
      })
    } catch (err){
      console.log('Error in ResultsContainer')
    }
  }
  render () {
    return <Results
              isLoading={this.state.isLoading}
              scores={this.state.scores}
              playersInfo={this.props.location.state.playersInfo} />
  }
}

export default ResultsContainer
