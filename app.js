const express = require('express')
const logger = require('morgan')

let app = express()

app.use(logger('dev'))

app.get('/', function(req, res, next) {
  console.log("RIGHT HERE")
  res.status(200).json({
    message: "Hello World11"
  })
})

module.exports = app
