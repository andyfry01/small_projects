module.exports = {
  character: function(HP, attackPower){
    function charObj(HP, attackPower){
      this.HP = HP
      this.attackPower = attackPower
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
  init: function(gridSize=10, playerStats={HP: 10, attackPower: 10}){
    const gameGrid = this.grid(gridSize)
    const character = this.character(playerStats.HP, playerStats.attackPower)
    function gameObj(){
      this.gameGrid = gameGrid
      this.playerCharacter = character
    }
    let game = new gameObj()
    return game
  }
}
