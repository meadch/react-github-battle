import axios from 'axios'

// If we get rate limited on GitHub API:
const id = "YOUR_CLIENt_ID",
      sec = "YOUR_SECRET_ID",
      param = `?client_id=${id}&client_secret=${sec}`


const getUserInfo = (username) => {
  return axios.get(`https://api.github.com/users/${username}`)
}

const handleError = (err) => {
  console.log(err);
}

const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}

const getTotalStars = (repos) => {
  return repos.data.reduce( (prev, curr) => {
    return prev + curr.stargazers_count
  },0)
}

const getPlayerData = (player) => {
  return getRepos(player.login)
  .then( (repos) => {
    return {
      followers: player.followers,
      totalStars: getTotalStars(repos)
    }
  })
}

const calculateTotalScores = (players) => {
  return players.map( (player) => {
    return player.followers * 3 + player.totalStars
  })
}



export const getPlayersInfo = (players) => {
  // Build array of promises
  // Wait until each promise is resolved
  // retun promise to calling component
  return axios.all(players.map((playerName) => {
    return getUserInfo(playerName)
  }))
  .then( (info) => {
    // Iterate through info and replace with just the data piece of object
    // before it goes back to component
    return info.map( (userData) => {
      return userData.data
    })
  })
  .catch(handleError)
}

export const battle = (playersInfo) => {
  // getPlayerData returns promise; both calls to axios.all and when finished pass the resulting data (an array of objects that look like {followers: x, totalStars: y}) to calculateTotalScores, which maps over the inputs and places the objects with final scores
  return axios.all([getPlayerData(playersInfo[0]), getPlayerData(playersInfo[1])])
  .then( calculateTotalScores )
  .catch ( (err) => { console.log("There was an error in the battle process", err)})
}
