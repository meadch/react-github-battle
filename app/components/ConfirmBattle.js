import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import {transparentBg, space, profileImg } from '../styles'
import UserDetailsWrapper from './UserDetailsWrapper'
import UserDetails from './UserDetails'
import Jumbotron from './JumbotronWrapper'
import Loading from './Loading'


const ConfirmBattle = (props) => {
  const playerDetails = props.playersInfo.map((playerInfo, idx) => (
    <UserDetailsWrapper key={idx} header={`Player ${idx+1}`} >
      <UserDetails key={idx} info={playerInfo} />
    </UserDetailsWrapper>
  ))
  // Check to see isLoading status
  return (
    props.isLoading === true ?
      <Jumbotron>
        <Loading text="Waiting"/>
      </Jumbotron>:
      <Jumbotron
        style={transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          { playerDetails }
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12'>
            <button style={space} type='button' className='btn btn-lg btn-success' onClick={props.onStartBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12'>
            <Link to='/playerOne'>
              <button style={space} type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </Jumbotron>
  )
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onStartBattle: PropTypes.func.isRequired
}

export default ConfirmBattle
