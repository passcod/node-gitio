console.log('(Results may not be in order)')
console.log('Input : Expected output')

[
  ['https://github.com/passcod/node-gitio', 'https://git.io/AuAj'],
  ['https://passcod.name', 'The url https://passcod.name is not a valid address for git.io']
].map(function(url) {
  console.log(url.join(' : '))
  return url
}).forEach(function(source) {
  require('.')(source[0], function(err, url) {
    console.log(source[0], ':', err && err.message || url)
  })
})

