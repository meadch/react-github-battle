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

const getRepos = ( username='meadch' ) => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}

const getTotalStars = (repos) => repos.data.reduce( (prev, curr) => prev + curr.stargazers_count, 0 )

async function getPlayerData(player) {
  try {
    const repos = await getRepos(player.login)
    return {
      followers: player.followers,
      totalStars: getTotalStars(repos)
    }
  } catch (err){
    console.log("Error in getPlayerData", err)
  }
}

const calculateTotalScores = (players) => players.map( (player) => player.followers * 3 + player.totalStars)

export async function getPlayersInfo (players) {
  try {
    const info = await Promise.all( players.map( (playerName) => getUserInfo(playerName) ))

    // Iterate through info and replace with just the data piece of object
    // before it goes back to component
    return info.map( (userData) => userData.data )
  } catch (err){
    console.log("Error in getPlayersInfo", err)
  }
}

export async function battle (playersInfo) {
  try {
    // getPlayerData returns promise; both calls to axios.all and when finished pass the resulting data (an array of objects that look like {followers: x, totalStars: y}) to calculateTotalScores, which maps over the inputs and places the objects with final scores
    const players = await Promise.all([getPlayerData(playersInfo[0]), getPlayerData(playersInfo[1])])
    return calculateTotalScores(players)
  } catch (err) {
    console.log('Error in battle', err)
  }

}
