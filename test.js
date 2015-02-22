var gitio = require('./index');

var urls = [
  ["https://github.com/passcod/node-gitio", "https://git.io/AuAj"],
  ["https://passcod.name", "[Error: Git.io 500 Internal Server Error]"]
];

console.log("Input, Expected output");
urls.forEach(function(url) {
  var source = url[0];
  var result = url[1];
  console.log(source + ', ' + result);
});
console.log("-----");
console.log("(Results may not be in order)");

urls.forEach(function(source) {
  gitio(source[0], function(err, url) {
    if (err) {
      console.log("Got error: ", err);
    } else {
      console.log("Got URL: ", url);
    }
  });
});
