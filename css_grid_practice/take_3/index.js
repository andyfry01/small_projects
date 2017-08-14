function changeClass(e, oldClass) {
  console.log('what is e?');
  return function(newClass) {
    if (e.className.includes(oldClass)) {
      console.log(e.className);
      let newClassRegex = new RegExp(`(.+)?(${oldClass})(.+)?`)
      let matches = newClassRegex.exec(e.className)
      let testMAtch = matches[1]
      console.log(testMAtch);
      testMAtch.splice(0, matches[1].length -2)
      console.log(testMAtch);
      e.className = matches[1]
      return
    } else {
      e.className += ` ${newClass}`
      console.log(e.className);

      return
    }
  }
}

window.onload = () => {
  let skills = document.getElementsByClassName('skills')
  skills[0].addEventListener('mouseover', (e) => {
    changeClass(skills[0], 'fadeOut')('fadeIn')
  })
  skills[0].addEventListener('mouseout', (e) => {
    changeClass(skills[0], 'fadeIn')('fadeOut')
  })
}
