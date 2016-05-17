import React from 'react'
import Prompt from '../components/Prompt'

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
    const { username } = this.state
    this.setState({username: ''})

    const {playerOne} = this.props.routeParams

    if(playerOne){
      // That means we're on player2 route, ready to move forward to battle
      this.context.router.push({
          pathname: '/battle',
          query: {
            playerOne,
            playerTwo: username
          }
      })
    } else {
      this.context.router.push(`/playerTwo/${username}`)
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


export default PromptContainer
