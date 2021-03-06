const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, '/public'))

    // app.use(express.static(__dirname + '/public'));
    // app.get('/', function(request, response) {
    //   response.sendFile(__dirname + '/index.html');
    // });

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}