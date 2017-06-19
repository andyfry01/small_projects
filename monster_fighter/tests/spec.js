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

  describe('grid creator', () => {
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

  describe('init', () => {
    it('should exist', () => {
      let actual = isFunction(fighterApp.init)
      let expected = true
      assert.equal(actual, expected)
    })
    it('should return a game object', () => {
      let game = fighterApp.init()
      let actual = typeof game
      let expected = 'object'
      assert.equal(actual, expected)
    })
    it('should take input for the game grid size', () => {
      let game = fighterApp.init(10)
      let actual = game.gameGrid.length
      let expected = 10
      assert.equal(actual, expected)
    })
    it('should assign a gridRef to the playerCharacter on invokation', () => {
      let game = fighterApp.init()
      let actual = game.playerCharacter.gridRef
      let expected = 0
      assert.equal(actual, expected)
    })
    it('should take input for character stats', () => {
      let game = fighterApp.init(10, {HP: 10, attackPower: 20})
      let actual = game.playerCharacter
      let expected = {
        HP: 10,
        attackPower: 20,
        gridRef: 0
      }
      assert.deepEqual(actual, expected)
    })
  })

  describe('gameObj', () => {
    let game = undefined
    beforeEach(() => {
      game = fighterApp.init()
    })
    it('should exist', () => {
      let actual = typeof game
      let expected = 'object'
      assert.equal(actual, expected)
    })
    it('should have a game grid', () => {
      let actual = game.hasOwnProperty('gameGrid')
      let expected = true
      assert.equal(actual, expected)
    })
    it('should have a moveChar method', () => {
      let actual = game.hasOwnProperty('moveChar')
      let expected = true
      assert.equal(actual, expected)
    })
    describe('placeChar', () => {
      it('should exist', () => {
        let actual = isFunction(fighterApp.placeChar)
        let expected = true
        assert.equal(actual, expected)
      })
      it('should place the playerCharacter at any specified coordinates', () => {
        let gameGrid = [[false, false],
                        [false, false]]
        let char = { HP: 10, attackPower: 10, gridRef: 0 }
        fighterApp.placeChar(char, gameGrid, 0, 1)
        let actual = gameGrid
        let expected = [[false, 0],
                        [false, false]]
        assert.deepEqual(actual, expected)
        gameGrid = [[false, false],
                    [false, false]]
        fighterApp.placeChar(char, gameGrid, 1, 1)
        actual = gameGrid
        expected = [[false, false],
                    [false, 0]]
      })
    })
    describe('moveChar', () => {
      it('should move a char in the gamegrid', () => {
        let game = fighterApp.init(2)
        game.moveChar(this.playerCharacter, 'down')
        let actual = game.gameGrid
        let expected = [[false, false],
                        [0, false]]
        assert.deepEqual(actual, expected)
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
