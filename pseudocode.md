# PseudoCode

## Key Terms
  - State (setState) (implied in render function)
  - Render
  - Randomize
  -possibly "buildUserInterface" or "getData" **?**

# Needed
* Need CARD Format via Bootstrap
* Need State Function (housed in object)
* need Render Function
* something to Randomize the Symbols
* List of Arrays for each slide 
* Way to adjust refresh button
* Way to adjust text for each slide
* List of symbols for slide 5

## Start
## Init
  - Create Bootstrap Layout
  - Input HTML Elements (buttons, text headers, etc.)
  - link HTML elements to JavaScript
  - Create arrays for pages and symbols
  - JS Functions for refresh, render, and randomize **?**
## End

## Functional
- Create state array
- create pages array
- Use document.getElementById to link HTML and JS
- function for button click to move to next page
- function render-loop through card items, update each time with state from array
- function randomize- to return a chosen symbol
- function for refreshbutton
- call functions when needed


## OOP
  ### All functions embedded into mindReader() **?**
- function mindReader() {
      var state =["slide 1",etc. "slide 6"];
      
      function render () {
      for (var i = 0; i <pages.length; i ++) {
        ?
      }
      
      function randomize () {
  }
