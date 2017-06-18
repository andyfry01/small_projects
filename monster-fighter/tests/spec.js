const chai = require('chai')
const mocha = require('mocha')
const assert = chai.assert
const expect = chai.expect

const fighterApp = require ('../public/fighterApp.js')

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

describe('fighter app', () => {
  it('should exist', () => {
    let actual = typeof fighterApp
    let expected = 'object'
    assert.equal(actual, expected)
  })
  describe('character creator', () => {
    it('should exist', () => {
      let actual = isFunction(fighterApp.character)
      let expected = true
      assert.equal(actual, expected)
    })
    it('should return an object', () => {
      let character = fighterApp.character()
      let actual = typeof character
      let expected = 'object'
      assert.equal(actual, expected)
    })
    it('should return an object with health stats and attack stats', () => {
      let character = fighterApp.character()
      let actual1 = character.hasOwnProperty('HP')
      let actual2 = character.hasOwnProperty('attackPower')
      let expected = true
      assert.equal(actual1, expected)
      assert.equal(actual2, expected)
    })
    it('should take arguments for hp and attack', () => {
      let character = fighterApp.character(20, 2)
      let actualHP = character.HP
      let actualAttack = character.attackPower
      let expectedHP = 20
      let expectedAttack = 2
      assert.equal(actualHP, expectedHP)
      assert.equal(actualAttack, expectedAttack)
    })
  })

  describe('grid creator', ()=>{
    it('should exist', () => {
      let actual = isFunction(fighterApp.grid)
      let expected = true
      assert.equal(actual, expected)
    })
    it('should return an array', () => {
      let actual = Array.isArray(fighterApp.grid())
      let expected = true
      assert.equal(actual, expected)
    })
    it('should return a two-dimensional array', () => {
      let grid = fighterApp.grid(3)
      let actual = Array.isArray(grid[0])
      let expected = true
      assert.equal(actual, expected)
    })
    it ('should return a square two-dimensional array corresponding to user input', () => {
      function checkNestedArrays(grid) {
        return new Promise((resolve, reject) => {
          grid.forEach(gridColumn => {
            let actual = gridColumn.length
            resolve(actual)
          })
        })
      }
      let grid = fighterApp.grid(5)
      let expected = 5
      return checkNestedArrays(grid)
      .then(actual => {
        assert.equal(actual, expected)
      })
    })
  })

})


/*

describe('', ()=>{

})

it('should ', () => {
  let actual =
  let expected = true
  assert.equal(actual, expected)
})

*/
