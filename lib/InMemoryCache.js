'use strict'

const DEFAULT_CACHE_TIME = 1000 * 60 * 60 // one hour

class InMemoryCache {
  constructor (options) {
    options = options || {}
    this.cacheTime = options.expires || DEFAULT_CACHE_TIME
    this.cache = {}
    this.imageExpiries = {}
  }

  get (id) {
    if (!this.cache[id]) {
      return Promise.resolve(null)
    }

    this.startExpiry(id)
    return Promise.resolve(this.cache[id])
  }

  put (id, record) {
    if (!record) {
      return Promise.reject('Invalid record')
    }
    this.cache[id] = record
    this.startExpiry(id)
    return Promise.resolve()
  }

  startExpiry (id) {
    if (this.imageExpiries[id]) {
      clearTimeout(this.imageExpiries[id])
    }
    this.imageExpiries[id] = setTimeout(() => {
      delete this.cache[id]
      delete this.imageExpiries[id]
    }, this.cacheTime)
  }
}

module.exports = InMemoryCache
