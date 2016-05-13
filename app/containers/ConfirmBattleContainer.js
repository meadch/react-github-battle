const React = require('react'),
      PropTypes = React.PropTypes,
      ConfirmBattle = require('../components/ConfirmBattle'),
      githubHelpers = require('../utils/githubHelpers')

const ConfirmBattleComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // Components needs to know whether loading or not
  getInitialState () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount () {
    // Grab usernames and fetch infor from GitHub API
    const query = this.props.location.query

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then( (githubData) => {
      if(!githubData) { throw new Error("No GitHub data...") }
      this.setState({
        isLoading: false,
        playersInfo: githubData
      })
    })
    .catch((err) => {
      this.setState({
        isLoading: false,
        playersInfo: []
      })
    })
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

module.exports = ConfirmBattleComponent;
