# Librarian In Memory Cache

A [Librarian](https://github.com/librarianjs/librarian) cache plugin that stores images in memory. For development and experimentation only. You shouldn't use this in production. Passes the [cache plugin test suite](https://github.com/librarianjs/librarian/blob/master/plugin-tests/cache-plugin.js)

Compatible with Librarian v2.0 and above.

## Installation

```sh
npm install librarian-memory-cache
```

## Usage
```js
var librarian = require('librarian')
var InMemoryCache = require('librarian-memory-cache')
var app = librarian({
    cache: new InMemoryCache
})
app.listen(8888)
```
