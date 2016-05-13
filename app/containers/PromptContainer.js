const React = require('react'),
      Prompt = require('../components/Prompt')

const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      username: ''
    }
  },
  updateUserName (e) {
    this.setState({
      username: e.target.value
    })
  },
  submitUser (e) {
    e.preventDefault()
    var username = this.state.username
    this.setState({username: ''})

    if(this.props.routeParams.playerOne){
      // That means we're on player2 route, ready to move forward to battle
      this.context.router.push({
          pathname: '/battle',
          query: {
            playerOne: this.props.routeParams.playerOne,
            playerTwo: this.state.username
          }
      })
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`)
    }
  },
  render () {
    return (
      <Prompt
        header={this.props.route.header}
        username={this.state.username}
        submitUser={this.submitUser}
        updateUserName={this.updateUserName}
      />
    )
  }
})


module.exports = PromptContainer
