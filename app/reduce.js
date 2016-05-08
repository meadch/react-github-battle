'use strict'

const votes = [
  'trump',
  'trump',
  'clinton',
  'sanders',
  'clinton',
  'sanders',
]

// The very first time the reducer function is called, it's going to be passed the initialValue you gave it (the 2nd argument to .reduce) and the first item in the actual array.
const initialValue = {}

const anotherReducer = (accum, food) => {
  (!accum[food]) ? accum[food] = 1 : accum[food]+=1
  // The thing that gets returned from the reducer function will then be passed as the accumulator the next time the function runs.
  return accum
}

let countedVotes = votes.reduce(anotherReducer, initialValue)

console.log(countedVotes)
