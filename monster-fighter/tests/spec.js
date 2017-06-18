const chai = require('chai')
const mocha = require('mocha')
const assert = chai.assert
const expect = chai.expect

const fighterApp = require ('../public/fighterApp.js')

describe('fighter app', () => {
  it('should exist', () => {
    let actual = typeof fighterApp
    let expected = 'object'
    assert.equal(actual, expected)
  })
  describe('', ()=>{

  })
})


/*

describe('', ()=>{

})

*/
