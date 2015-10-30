module.exports = require('util').deprecate(function (url, callback) { 
  require('gitio')(url).then(function (url) {
    callback(null, url)
  }, callback)
}, 'gitio2: Deprecated. Use gitio instead.')
