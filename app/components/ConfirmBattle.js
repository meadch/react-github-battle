const React = require('react');

const ConfirmBattle = (props) => (
  props.isLoading === true ?
  <p>LOADING!</p> :
  <p>CONFIRM BATTLE!</p>
)

module.exports = ConfirmBattle
