const express = require('express')
const hbs = require('express-handlebars')
const { readFortunes, pickRandomFortune } = require('./utils')
// const router =

const server = express()

// server config:
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// handlebars config:
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// add routes/router here:

server.get('/fortune', (req, res) => {
  readFortunes(fortuneArray => {
    const template = 'fortune'
    const viewData = {
      fortune: pickRandomFortune(fortuneArray)
    }
    res.render(template, viewData)
  })
})

server.get('/', (req, res) => {
  const template = 'home'
  const viewData = {}
  res.render(template, viewData)
})

module.exports = server
