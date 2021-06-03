const fs = require('fs')
const path = require('path')

function readFortunes (cb) {
  const filepath = path.join(__dirname, 'fortunes.txt')
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message)
    }
    try {
      const fortunesUnformatted = data

      // now we want to put the string into an array before we pass it back to the cb()

      const fortuneArray = fortunesUnformatted.split('\n')

      cb(fortuneArray)
    } catch (loadingError) {
      console.error('something went wrong...')
    }
  })
}

function pickRandomFortune (fortuneArray) {
  const randIndex = Math.floor(Math.random() * fortuneArray.length)
  return fortuneArray[randIndex]
}

module.exports = { readFortunes, pickRandomFortune }
