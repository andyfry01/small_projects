'use strict';

window.onload = function() {
  console.log('hello from index.js!');

  const FLEXBOX_PARENT = document.getElementById('parent_box_flexbox')
  const FLEXBOX_CHILD = document.getElementById('child_box_flexbox')

  const MARGIN_PARENT = document.getElementById('parent_box_margin')
  const MARGIN_CHILD = document.getElementById('child_box_margin')

  const SUBMIT_BTN = document.getElementById('change_submit_btn')

  const BOX_RESIZE = function() {
    console.log(MARGIN_PARENT);
  }

  SUBMIT_BTN.addEventListener('click', function(){
    BOX_RESIZE()
  })
}
