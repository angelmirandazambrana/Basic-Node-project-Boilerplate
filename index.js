var express = require('express');
var app = express();

app.use(express.static('public')); // serve all the files in the public directory
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(4000, function () {
  console.log('Server in port 4000');
});
