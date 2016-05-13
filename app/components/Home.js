const React = require('react'),
      Link = require('react-router').Link
      transparentBg = require('../styles').transparentBg,
      Jumbotron = require('./JumbotronWrapper')

const Home = React.createClass({
  render () {
    return (
      <Jumbotron>
        <h1>Github Battle</h1>
        <p className='lead'>War of Stars & Followers</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </Jumbotron>
    )
  }
})

module.exports = Home
