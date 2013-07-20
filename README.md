Git.io 2
========

A simple module to call the [git.io url shortener service][0].
Updated to use its newer API.

Install
-------

```bash
$ npm install gitio2
```

Usage
-----

```javascript
var gitio = require('gitio');

gitio('https://github.com/passcod/node-gitio', console.log);
//=> null,    http://git.io/abcde
//   ^ error  ^ short url
```

[0]: https://github.com/blog/985-git-io-github-url-shortener

