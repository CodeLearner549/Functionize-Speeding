// Caught Speeding CS10 Review

// Variables to store HTML Elements
let determineBtn = document.getElementById("determine-btn");
let driverSpeedInput = document.getElementById("driver-speed");
let speedLimitInput = document.getElementById("speed-limit");
let outputSpan = document.getElementById("output");

// Add Event Listener to Calculate Button
determineBtn.addEventListener("click", determineBtnClicked);

function determineBtnClicked() {
  // Input
  let driverSpeed = +driverSpeedInput.value;
  let speedLimit = +speedLimitInput.value;

  //Output
  outputSpan.innerHTML = determineTicket(driverSpeed,speedLimit)
  //it outputs the determineTicket function with the 
  //proccessed arguements
}

//Process
function determineTicket(a,b) {
  if (a >= b + 20) {
    return "BIG TICKET"; //it returns a string back to the output
  } else if (a > b) {
    return "SMALL TICKET";
  } else {
    return "NO TICKET";
  }

}
