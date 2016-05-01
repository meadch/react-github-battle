const React = require('react');

// Great way to throw objects on screen
const puke = (obj) => {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

const ConfirmBattle = (props) => (
  props.isLoading === true ?
  <p>LOADING!</p> :
  <pre>CONFIRM BATTLE! {puke(props)}</pre>
)

module.exports = ConfirmBattle
