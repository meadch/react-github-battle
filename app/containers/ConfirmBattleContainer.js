import React, {PropTypes, Component} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import {getPlayersInfo} from '../utils/githubHelpers'

class ConfirmBattleComponent extends Component {

  // Components needs to know whether loading or not
  constructor () {
    super()
    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }
  async componentDidMount () {
    // Grab usernames and fetch infor from GitHub API
    const { query } = this.props.location

    try {
      const githubData = await getPlayersInfo([query.playerOne, query.playerTwo])

      if(!githubData) { throw new Error("No GitHub data...") }

      this.setState({
        playersInfo: githubData,
        isLoading: false
      })
    } catch (err) {
      console.log("ERROR:", err)
      this.setState({
        isLoading: false,
        playersInfo: []
      })
    }
  }
  handleStartBattle () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }
  render () {
    // Because handleStartBattle will be called in the context of the ConfirmBattle component, we need to wrap in an arrow function to protect this.
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onStartBattle={() => this.handleStartBattle() } />
    );
  }
}

ConfirmBattleComponent.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleComponent
