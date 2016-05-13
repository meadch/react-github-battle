const React = require('react'),
      styles = require('../styles')

const Jumbotron = (props) => (
  <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
    {props.children}
  </div>
)

module.exports = Jumbotron
