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
  }
}
