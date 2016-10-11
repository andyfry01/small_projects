'use strict';

window.onload = function() {
  console.log('hello from index.js!')

  /*  **** DOM ELEMENTS ****  */

  // Flexbox DOM elements and height/width styles
  const FLEXBOX_PARENT = document.getElementById('parent_box_flexbox')
  let flexboxParentHeight = FLEXBOX_PARENT.style.height
  let flexboxParentWidth = FLEXBOX_PARENT.style.width
  const FLEXBOX_CHILD = document.getElementById('child_box_flexbox')
  let flexboxChildHeight = FLEXBOX_CHILD.style.height
  let flexboxChildWidth = FLEXBOX_CHILD.style.width

  // Margin DOM elements and height/width styles
  const MARGIN_PARENT = document.getElementById('parent_box_margin')
  let marginParentHeight = MARGIN_PARENT.style.height
  let marginParentWidth = MARGIN_PARENT.style.width
  const MARGIN_CHILD = document.getElementById('child_box_margin')
  let marginChildHeight = MARGIN_CHILD.style.height
  let marginChildWidth = MARGIN_CHILD.style.width

  // Resizing inputs and submit button
  const PARENT_HEIGHT_RESIZE = document.getElementById('parent_height')
  const PARENT_WIDTH_RESIZE = document.getElementById('parent_width')
  const CHILD_HEIGHT_RESIZE = document.getElementById('child_height')
  const CHILD_WIDTH_RESIZE = document.getElementById('child_width')
  const SUBMIT_BTN = document.getElementById('change_submit_btn')


  /*  **** FUNCTIONS ****  */

  // Submit button event listener, fires BOX_RESIZE
  SUBMIT_BTN.addEventListener('click', function(){
    BOX_RESIZE()
  })

  // Resizing function
  const BOX_RESIZE = function() {

  }

  // Checks current size of boxes against user input, if the user input value !== current box size, boxes are resized, otherwise they are not.
  const COMPARE = function() {

  }

}
