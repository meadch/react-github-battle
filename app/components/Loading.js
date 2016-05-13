const React = require('react')

const Loading = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    speed: React.PropTypes.number
  },
  getInitialState () {
    this.originalText = this.props.text
    return {
      text: this.originalText
    }
  },
  getDefaultProps() {
    // Default props for component if non passed in
    return {
      text: "Loading",
      speed: 250
    }
  },
  componentDidMount () {
    const endPoint = this.originalText + '...'
    this.interval = setInterval( () => {
      if (this.state.text == endPoint) {
        this.setState({
          text: "Loading"
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed);
  },
  componentWillUnmount () {
    // Need to clear interval as component unmounts to avoid calling setState() on an unmounted component, a big NO-NO
    clearInterval(this.interval)
  },
  render () {
    return (
      <div >
        <h1 >{this.state.text}</h1>
      </div>
    )
  }
})

module.exports = Loading
