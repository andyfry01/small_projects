module.exports = {
  character: function(HP, attackPower){
    function charObj(HP, attackPower){
      this.HP = HP
      this.attackPower = attackPower
    }
    return new charObj(HP, attackPower)
  }
}
