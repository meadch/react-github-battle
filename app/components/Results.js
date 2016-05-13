const React = require('react'),
      PropTypes = React.PropTypes,
      styles = require('../styles'),
      UserDetailsWrapper = require('../components/UserDetailsWrapper'),
      UserDetails = require('../components/UserDetails'),
      Link = require('react-router').Link,
      Jumbotron = require('./JumbotronWrapper'),
      Loading = require('./Loading')

// Example of private functional stateless component
const StartOver = () => (
  <div className="col-sm-12">
    <Link to="/playerOne">
      <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
    </Link>
  </div>
)

const Results = (props) => {
  if (props.isLoading === true) {
    return <Jumbotron><Loading text="Just a sec"/></Jumbotron>
  }
  // Check first for tie
  if (props.scores[0] === props.scores[1]){
    return (
      <Jumbotron>
        <h1>It's a tie at {props.scores[0]}.</h1>
        <StartOver/>
      </Jumbotron>
    )
  }
  const winnerIdx = (props.scores[0] > props.scores[1]) ? 0 : 1,
        loserIdx = (winnerIdx === 0) ? 1 : 0

  return (
    props.isLoading === true ?
    <p>Loading...</p>:
    <Jumbotron>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winnerIdx]} info={props.playersInfo[winnerIdx]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[loserIdx]} info={props.playersInfo[loserIdx]}/>
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

module.exports = Results
