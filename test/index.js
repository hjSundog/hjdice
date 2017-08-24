// test/index.js
var assert = require('assert')
var hjdice = require('../index')
var diceObj = new hjdice();

describe('hjdice', function () {
    describe('usage', function () {
        it('require(this-module) returns a function', function () {
            assert(typeof hjdice === 'function', 'hjdice should be a function')
        })
        it('module\'s roll method should return a integer', function () {
            assert(Number.isInteger(diceObj.roll()), 'roll method should return a integer')
        })
    })
})