// definition and initialization of variables
let homeCount = 0; // set home count to initial 0
let guestCount = 0; // set guest count to initial 0
let homeLead = "Birds are Leading"  // string for the home leader board
let guestLead = "Turtles are Leading" // string for the guest leader board

// prints values to html elements
document.getElementById("homescr").textContent = homeCount;
document.getElementById("guestscr").textContent = guestCount;


// timer logic
let count = 60; // countdown sets to 60sec
let timer = null; // initial to null
let checkInterval = null; // sets interval for checking point to null 
// start timer function 
function startTimer() {
  if (timer != null) return;
  document.getElementById("timer").textContent = count; 
  
  timer = setInterval(function() {
    count--;  // counts down every second by 1
    if (count === 0) { // if 0 is reached sets timer and intervall to null
      clearInterval(timer);
      clearInterval(checkInterval);
      timer = null;
      document.getElementById("timer").textContent = "Game Over";

      finalResult(); //calling to check the final result
    } else {
      document.getElementById("timer").textContent = count;
    }
     }, 1000);
  
// Function to check the point balance between Home & Guest every 20sec
checkInterval = setInterval(function() {
  const diff = Math.abs(homeCount - guestCount);
  
  if (diff > 3) {
    if (homeCount > guestCount) {
      document.getElementById("leadersign").textContent = homeLead;
    } else {
      document.getElementById("leadersign").textContent = guestLead;
  }
} else {
  document.getElementById("leadersign").textContent = "";
  }
 }, 10000);
  }

  //checking final result
  function finalResult() {
    if (document.getElementById("timer").textContent === "Game Over") {
        if (homeCount > guestCount) {
            document.getElementById("leadersign").textContent = "Birds Wins";
          } else {
            document.getElementById("leadersign").textContent = "Turtles Wins";
        }

    }
  }


// reset game function
function resetTimer() {
  if (document.getElementById("timer").textContent === "Game Over") {
    count = 60;
    document.getElementById("timer").textContent = count;
    clearInterval(timer);
    clearInterval(checkInterval);
    timer = null;
    checkInterval = null;
    document.getElementById("leadersign").textContent = "";
    document.getElementById("homescr").textContent = 0;
    document.getElementById("guestscr").textContent = 0;
  }
}

// function to +1 for home
function homePlusOne() {
  homeCount = homeCount + 1;
  document.getElementById("homescr").textContent = homeCount; 
 
}
// function to +2 for home
function homePlusTwo() {
  homeCount = homeCount + 2;
  document.getElementById("homescr").textContent = homeCount; 
}
// function to + 3 for home
function homePlusThree() {
  homeCount = homeCount + 3;
  document.getElementById("homescr").textContent = homeCount; 
}
// function reset home count to 0
function resetHome() {
  homeCount = 0;
  document.getElementById("homescr").textContent = homeCount; 
}
// function to +1 for guest
function guestPlusOne() {
  guestCount = guestCount + 1;
  document.getElementById("guestscr").textContent = guestCount;

 }
// function to +2 for guest
function guestPlusTwo() {
  guestCount = guestCount + 2;
  document.getElementById("guestscr").textContent = guestCount;
}
// function to + 3 for guest
function guestPlusThree() {
  guestCount = guestCount + 3;
  document.getElementById("guestscr").textContent = guestCount;
}
// function reset guest count to 0
function resetGuest() {
  guestCount = 0;
  document.getElementById("guestscr").textContent = guestCount;
}
