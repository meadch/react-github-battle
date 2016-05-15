import React, { PropTypes } from 'react'
import UserDetailsWrapper from './UserDetailsWrapper'
import UserDetails from './UserDetails'
import {Link} from 'react-router'
import Jumbotron from './JumbotronWrapper'
import Loading from './Loading'

// Example of private functional stateless component
const StartOver = () => (
  <div className="col-sm-12">
    <Link to="/playerOne">
      <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
    </Link>
  </div>
)

const Results = ({isLoading, scores, playersInfo}) => {
  if (isLoading === true) {
    return <Jumbotron><Loading text="Just a sec"/></Jumbotron>
  }
  // Check first for tie
  if (scores[0] === scores[1]){
    return (
      <Jumbotron>
        <h1>It's a tie at {scores[0]}.</h1>
        <StartOver/>
      </Jumbotron>
    )
  }
  const winnerIdx = (scores[0] > scores[1]) ? 0 : 1,
        loserIdx = (winnerIdx === 0) ? 1 : 0

  return (
    isLoading === true ?
    <p>Loading...</p>:
    <Jumbotron>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={scores[winnerIdx]} info={playersInfo[winnerIdx]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={scores[loserIdx]} info={playersInfo[loserIdx]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver/>
    </Jumbotron>
  )
}

Results.PropTypes = {
  isLoading : PropTypes.bool.isRequired,
  playersInfo : PropTypes.array.isRequired,
  scores : PropTypes.array.isRequired
}

export default Results
