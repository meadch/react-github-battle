const React = require('react'),
      styles = require('../styles'),
      Link = require('react-router').Link,
      PlayerDetailsWrapper = require('./UserDetailsWrapper'),
      UserDetails = require('./UserDetails'),
      Jumbotron = require('./JumbotronWrapper')

const ConfirmBattle = (props) => {

  playerDetails = props.playersInfo.map((playerInfo, idx) => (
    <UserDetailsWrapper key={idx} header={`Player ${idx+1}`} >
      <UserDetails key={idx} info={playerInfo} />
    </UserDetailsWrapper>
  ))
  // Check to see isLoading status
  return (
    props.isLoading === true ?
    <p>LOADING!</p> :
      <Jumbotron
        style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          { playerDetails }
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12'>
            <button style={styles.space} type='button' className='btn btn-lg btn-success' onClick={props.onStartBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12'>
            <Link to='/playerOne'>
              <button style={styles.space} type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </Jumbotron>
  )
}

ConfirmBattle.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  onStartBattle: React.PropTypes.func.isRequired,
}

module.exports = ConfirmBattle
