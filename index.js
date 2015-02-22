var request = require('request');

module.exports = function(url, callback) { 
  request({
    url: 'https://git.io/create',
    method: 'post',
    form: {
      'url': url
    }
  }, function(err, res, body) {
    if (err) {
      return callback(err);
    }

    if (res.statusCode < 300 && res.statusCode >= 200) {
      callback(null, 'https://git.io/' + body);
    } else { 
      callback(new Error('Git.io ' + res.headers.status));
    }
  });
};
