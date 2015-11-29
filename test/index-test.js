import test from 'tape'

import isPromise from '../src'

const noop = function () {}
const promise = new Promise(noop, noop)
const promiseLookalike = { then: function () {} }
function * gen () {}

test('It should pass when', t => {
  t.equal(isPromise(promise), true, 'called with a Promise')
  t.equal(isPromise(promiseLookalike), true, 'called with a Promise like object')
  t.end()
})

test('It should fail when', t => {
  t.equal(isPromise(gen), false, 'called with a Generator')
  t.equal(isPromise(null), false, 'called with null')
  t.equal(isPromise(undefined), false, 'called with undefined')
  t.equal(isPromise(noop), false, 'called with a function')
  t.equal(isPromise([]), false, 'called with an Array')
  t.equal(isPromise({}), false, 'called with an object')
  t.equal(isPromise('str'), false, 'called with a string')
  t.end()
})
