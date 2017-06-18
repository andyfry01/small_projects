'use-strict'

window.onload = function(){
  let spinner = document.getElementsByClassName('spinner')[0]
  let bigger = document.getElementsByClassName('bigger')[0]
  let smaller = document.getElementsByClassName('smaller')[0]
  let rotate = document.getElementsByClassName('rotate')[0]

  let state = {
    rotation: 0,
    size: spinner.clientHeight
  }
  rotate.addEventListener('click', (e) => {
    e.preventDefault()
    state.rotation += 180
    spinner.style.transform = `rotate(${state.rotation}deg)`
  })
  bigger.addEventListener('click', (e) => {
    e.preventDefault()
    state.size += 50
    let newHeight = spinner.style.height + state.size
    let newWidth = spinner.style.width + state.size
    spinner.setAttribute('style', `height:${newHeight}px; width:${newWidth}px`)
    window.setTimeout(() => {
      state.size = spinner.clientHeight
    }, 500)
  })
  smaller.addEventListener('click', (e) => {
    e.preventDefault()
    state.size -= 50
    let newHeight = spinner.style.height + state.size
    let newWidth = spinner.style.width + state.size
    spinner.setAttribute('style', `height:${newHeight}px; width:${newWidth}px`)
    window.setTimeout(() => {
      state.size = spinner.clientHeight
    }, 500)
  })
}
