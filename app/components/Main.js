const React = require('react');
// We want styling in this file to be applied to the component in this file
// Need to configure Webpack for this and bring in transition group
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')
require('../main.css');

const Main = React.createClass({
  render () {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {/*this.props.children needs a key to fit w/ transition, so we have to use cloneElement to generate a component that we provide a key to*/}
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

module.exports = Main
