const axios = require('axios')

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

const helpers = {
  getPlayersInfo: function(players){

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
}

module.exports = helpers
