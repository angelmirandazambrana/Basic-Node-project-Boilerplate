var app = require('express')()
var server = require('http').Server(app)
var path = require('path')

server.listen(4000)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})
