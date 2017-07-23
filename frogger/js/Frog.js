import { Rectangle } from './Rectangle'

export function Frog(xPos, yPos, w, h) {
  // basics
  let frog = new Rectangle(w, h)
  frog.xPos = xPos
  frog.yPos = yPos

  // used for collision detecting
  frog.topEdge = frog.yPos
  frog.rightEdge = frog.xPos + frog.w
  frog.bottomEdge = frog.yPos + frog.h
  frog.leftEdge = frog.xPos

  // moves the frog!
  frog.move = function(direction){
    if (direction === 'UP') {
      frog.yPos -= frog.h
      frog.topEdge = frog.yPos
    }
    if (direction === 'RIGHT') {
      frog.xPos += frog.w
      frog.rightEdge = frog.xPos + frog.w
    }
    if (direction === 'DOWN') {
      frog.yPos += frog.h
      frog.topEdge = frog.yPos
      frog.bottomEdge = frog.yPos + frog.h
    }
    if (direction === 'LEFT') {
      frog.xPos -= frog.w
      frog.leftEdge = frog.xPos
    }
  }

  // update method, for moving frog on key input and when it encounters a car or log
  frog.update = function(direction, speed){
    // if direction isn't an integer and if no speed is given, it is user input
    if (!parseInt(direction) && speed === undefined) {
      frog.move(direction)
    // if direction IS an integer and there is a speed given, the frog is sitting on a log
    // and should move with the log
    } else {
      frog.xPos += speed * direction
      frog.rightEdge = frog.xPos + frog.w
      frog.leftEdge = frog.xPos
    }
  }
  return frog
}
