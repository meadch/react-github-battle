import React, {PropTypes} from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import {getPlayersInfo} from '../utils/githubHelpers'

const ConfirmBattleComponent = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  // Components needs to know whether loading or not
  getInitialState () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
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
  },
  handleStartBattle () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onStartBattle={this.handleStartBattle} />
    );
  }
});

export default ConfirmBattleComponent
