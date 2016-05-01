const React = require('react'),
      Link = require('react-router').Link
      transparentBg = require('../styles').transparentBg

const Home = React.createClass({
  render () {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>What even is a jQuery?</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    )
  }
})

module.exports = Home
