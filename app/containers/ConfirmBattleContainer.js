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
      this.setState({
        isLoading: false,
        playersInfo: githubData
      })
    })


    // Now Ajax request and change state
  },
  render: function() {
    console.log(this.state)
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleComponent;
