module.exports = {
  character: function(HP, attackPower){
    function charObj(HP, attackPower){
      this.HP = HP
      this.attackPower = attackPower
      this.gridCode
    }
    return new charObj(HP, attackPower)
  },
  grid: function(dimension){
    let grid = []
    for (let gridXAxis = 0; gridXAxis < dimension; gridXAxis++) {
      let gridCol = []
      for (let gridYAxis = 0; gridYAxis < dimension; gridYAxis++) {
        gridCol.push(false)
      }
      grid.push(gridCol)
    }
    return grid
  },
  placeChar: function(char, gameGrid, ycoord, xcoord) {
    gameGrid[ycoord].splice(xcoord, 1, char.gridRef)
  },
  init: function(gridSize=10, playerStats={HP: 10, attackPower: 10}){
    const gameGrid = this.grid(gridSize)
    const character = this.character(playerStats.HP, playerStats.attackPower)
    function gameObj(){
      this.gridRef = 0
      this.gameGrid = gameGrid
      this.playerCharacter = character
      this.playerCharacter.gridRef = this.gridRef
      this.moveChar = function(character){
        
      }
    }
    let game = new gameObj()
    game.gridRef++
    this.placeChar(game.playerCharacter, game.gameGrid, 0, 0)
    return game
  }
}
