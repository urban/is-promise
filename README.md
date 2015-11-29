# is-promise

Tests whether an Object is a promise/A+ promise.


## Install

```sh
npm i @urban/is-promise
```


## Usage

```js
import isPromise from '@urban/is-promise'

function noop () {}
const promise = new Promise(noop, noop)
const promiseLookalike = { then: function () {} }
function * gen () {}

isPromise(promise)          // => true
isPromise(promiseLookalike) // => true
isPromise(gen)              // => false
isPromise(null)             // => false
isPromise(undefined)        // => false
isPromise(noop)             // => false
isPromise([])               // => false
isPromise({})               // => false
isPromise('str')            // => false
```


## License

[The MIT License (MIT)](LICENSE). Copyright (c) [Urban Faubion](http://urbanfaubion.com).
