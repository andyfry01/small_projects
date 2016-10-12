'use strict';

window.onload = function() {
  console.log('hello from index.js!')

  /******************************/
  /*   **** DOM ELEMENTS ****   */
  /******************************/

  // Flexbox DOM elements
  const FLEXBOX_PARENT = document.getElementById('parent_box_flexbox')
  const FLEXBOX_CHILD = document.getElementById('child_box_flexbox')

  // Margin DOM elements
  const MARGIN_PARENT = document.getElementById('parent_box_margin')
  const MARGIN_CHILD = document.getElementById('child_box_margin')

  // Submit button
  const SUBMIT_BTN = document.getElementById('change_submit_btn')


  /******************************/
  /*    **** FUNCTIONS ****     */
  /******************************/

  // Submit button event listener, fires CHECK_VALS to make sure user inputs are valid.
  SUBMIT_BTN.addEventListener('click', function(){

    // Grabbing resizing input values from DOM
    let parentResizeVal = document.getElementById('parent_resize_val').value
    let childResizeVal = document.getElementById('child_resize_val').value

    // Saving resizing inputs in an object to make passing them into the compare function tidier
    let resizeVals = {
        parentResizeVal: parseInt(parentResizeVal),
        childResizeVal: parseInt(childResizeVal)
      }

    CHECK_VALS(resizeVals, FLEXBOX_PARENT, FLEXBOX_CHILD, MARGIN_PARENT, MARGIN_CHILD)

  })

  // CHECK_VALS checks current size of boxes against user input.
  // If the resize value for the parent is greater than the resize value for the child, BOX_RESIZE is called.
  const CHECK_VALS = function(resizeVals, flexboxParent, flexboxChild, marginParent, marginChild) {

    let parentBoxArray = [flexboxParent, marginParent]
    let childBoxArray = [flexboxChild, marginChild]

    if (resizeVals.parentResizeVal > resizeVals.childResizeVal) {
        BOX_RESIZE(resizeVals, parentBoxArray, 'parent')
        BOX_RESIZE(resizeVals, childBoxArray, 'child')
    } else {
      alert('Parent box dimensions must be greater than child box dimensions')
    }

  }

  // BOX_RESIZE resizes the boxes, called after CHECK_VALS. Indicator param controls whether boxes passed into the function are resized according
  // to the parent or child dimensions indicated by the user.
  const BOX_RESIZE = function(resizeVals, boxArray, indicator) {

    for (let box of boxArray) {
      if (indicator === 'parent') {
        box.style.height = `${resizeVals.parentResizeVal}px`
        box.style.width = `${resizeVals.parentResizeVal}px`
      }
      if (indicator === 'child') {
        box.style.height = `${resizeVals.childResizeVal}px`
        box.style.width = `${resizeVals.childResizeVal}px`
      }
    }

  }

}
