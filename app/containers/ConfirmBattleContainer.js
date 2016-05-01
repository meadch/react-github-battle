const React = require('react'),
      PropTypes = React.PropTypes,
      ConfirmBattle = require('../components/ConfirmBattle')

const ConfirmBattleComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // Components needs to know whether loading or not
  getInitialState () {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount () {
    // Grab usernames and fetch infor from GitHub API
    const query = this.props.location.query

    // Now Ajax request and change state
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleComponent;
