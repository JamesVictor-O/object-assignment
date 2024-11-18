let colors = ['red', 'blue', 'yellow', 'brown', 'orange']

let background = document.body
let buttonTest = document.getElementById("bottonId");
let menubar = false;
let startingPoint = 0;
let buttonPoint=1

// function for background change
function changeBackground() {
   
   startingPoint++;
   buttonPoint ++
  
   if (startingPoint == colors.length) {
      startingPoint = 0
   }
   if (buttonPoint == colors.length) {
      buttonPoint = 0
   }


   background.style.backgroundColor = `${colors[startingPoint]}`
   buttonTest.innerHTML = `change to ${colors[buttonPoint]}`
}

// function for side bar
function openNavBar() {
   if (menubar) {
      document.getElementById("menuBar").style.display = "block"
      document.getElementById('button2').innerHTML="close"
      menubar = false
      
   } else {
      document.getElementById("menuBar").style.display = "none"
      document.getElementById('button2').innerHTML="open"
      menubar = true
   }
   
}