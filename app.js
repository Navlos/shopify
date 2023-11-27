
// Function to change the logo based on screen size

const changeLogo = () => {
    const logo = document.getElementById('logo');
    const screenWidth = window.innerWidth;
     const breakpoint = 1024

    if (screenWidth  < breakpoint) {
        logo.src = "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
    } else {
        logo.src = "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg"
    }
}

// change the logo whenever the screen is reesized
window.addEventListener('resize', changeLogo);
changeLogo();


// FUNCTION TO TOGGLE AlERT BUTTON

const alertBtn  = document.getElementById("notification-icon");
const alertNotification = document.getElementById("notification");


// add event listener to toggle alert notification on alert button click

alertBtn.addEventListener("click", () => {
 console.log({alertNotification})
})



//  FUNCTION TO CANCEL THE PLAN NOTIFICATION IF THE USER IS NOT INTERESTED

const cancelBtn = document.getElementById("cancel-btn");
const planNotification = document.getElementById("plan-notification");

cancelBtn.addEventListener('click', () => {
    planNotification.style.display = 'none';
    
    // Ensure screen readers don't announce the hidden plan notification
    notification.setAttribute('aria-hidden', 'true');
})




// FUNCTION TO COLLASPE AND DISPLAY THE SETUP GUIDE INFORMATION ON CLICK

const arrowBtn = document.getElementById("arrow-down");
const SetupInformation = document.getElementById('setup-instructions');
const arrowImg = document.getElementById("arrow-img");


arrowBtn.addEventListener("click", () => {

    if (SetupInformation.style.display === 'none') {

        // If the setup insrtuction is currently hidden, show it

        SetupInformation.style.display = 'block';

       // change the arrow-btn icon
        arrowImg.src ="https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";

    } 
    else {
        // If the setup insrtuction is currently visible, hide it

        SetupInformation.style.display = 'none';

         // change the arrow-btn icon

         arrowImg.src = "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
    }

    

   


} )


// FUNCTION TO HANDLE CHECKBOx CLICK


// Constants for CSS classes
const HIDDEN_CLASS = "hidden"; // CSS class to hide an element
const MARKED_AS_DONE_CLASS = 'checkbox-done'; // CSS class to style the checkbox as completed

// DOM elements - Use querySelectorAll to select all elements with the specified class
const checkBoxButtons = document.querySelectorAll('.shopping-item-checkbox');
const notCompletedIcons = document.querySelectorAll(".not-completed-icon");
const completedIcons = document.querySelectorAll(".completed-icon");
const spinnerIcons = document.querySelectorAll(".spinner-icon");

// Function to handle marking the checkbox as done
function handleMarkAsDone(buttonIndex) {
  notCompletedIcons[buttonIndex].classList.add(HIDDEN_CLASS); // Hide the not completed icon
  spinnerIcons[buttonIndex].classList.remove(HIDDEN_CLASS); // Show the loading spinner

  setTimeout(() => {
    spinnerIcons[buttonIndex].classList.add(HIDDEN_CLASS); // Hide the loading spinner
    completedIcons[buttonIndex].classList.remove(HIDDEN_CLASS); // Show the completed icon
    checkBoxButtons[buttonIndex].classList.add(MARKED_AS_DONE_CLASS); 

    // Increase the progress bar
    increaseProgressBar();

  }, 300);
}

// Function to handle marking the checkbox as not done
function handleMarkAsNotDone(buttonIndex) {
  completedIcons[buttonIndex].classList.add(HIDDEN_CLASS); // Hide the completed icon
  spinnerIcons[buttonIndex].classList.remove(HIDDEN_CLASS); // Show the loading spinner

  setTimeout(() => {
    spinnerIcons[buttonIndex].classList.add(HIDDEN_CLASS); // Hide the loading spinner
    notCompletedIcons[buttonIndex].classList.remove(HIDDEN_CLASS); // Show the not completed icon
    checkBoxButtons[buttonIndex].classList.remove(MARKED_AS_DONE_CLASS); 

    // reduce the progress bar
    reduceProgressBar();



  }, 300);
}

// Function to handle the click event on the checkbox
function handleDoneOrNotDone(event) {
  const buttonIndex = Array.from(checkBoxButtons).indexOf(event.currentTarget);
  const markedAsDone = checkBoxButtons[buttonIndex].classList.contains(MARKED_AS_DONE_CLASS);

  // Call the appropriate function based on the current state
  if (markedAsDone) {
    handleMarkAsNotDone(buttonIndex);
  } else {
    handleMarkAsDone(buttonIndex);
  }
}

// Add a click event listener to each checkbox
checkBoxButtons.forEach((button) => {
  button.addEventListener("click", handleDoneOrNotDone);
});



// FUNCTION TO INCREASE THE PROGRESS BAR



// Initialize variables

let loadProgressBar = 0;  
let counterNum = 0;  

function increaseProgressBar() {
  // Check if the maximum progress updates (5) have been reached
  if (counterNum >= 5) {

    return;

  } 
  else {

    // Increase the progress and counter
    loadProgressBar += 20;
    counterNum += 1;

    // Update the width of the progress bar

    document.getElementById('progress-bar').style.width = `${loadProgressBar}%`;

    // Update the counter display

    document.getElementById('counter').textContent = counterNum;

    // Adjust the border radius based on the progress value

    if (loadProgressBar === 100) {
      document.getElementById('progress-bar').style.borderRadius = '100px';
    } else {
      document.getElementById('progress-bar').style.borderTopLeftRadius = '100px';
      document.getElementById('progress-bar').style.borderBottomLeftRadius = '100px';
      document.getElementById('progress-bar').style.borderTopRightRadius = '';
      document.getElementById('progress-bar').style.borderBottomRightRadius = '';
    }
  }
}




// FUNCTION TO REDUCE THE PROGRESS BAR

function reduceProgressBar() {
  // Check if the progress is already at 0, then return
  if (loadProgressBar === 0) {
    return; // Exit the function if the progress is already at the minimum
  }

  // Decrease progress
  loadProgressBar -= 20;

  // Adjust border radius based on the updated progress value
  if (loadProgressBar === 100) {
    document.getElementById('progress-bar').style.borderRadius = '100px';
  } else {
    document.getElementById('progress-bar').style.borderTopLeftRadius = '100px';
    document.getElementById('progress-bar').style.borderBottomLeftRadius = '100px';
    document.getElementById('progress-bar').style.borderTopRightRadius = '';
    document.getElementById('progress-bar').style.borderBottomRightRadius = '';
  }

  // Update the width of the progress bar
  document.getElementById('progress-bar').style.width = `${loadProgressBar}%`;

  // Update the counter, ensuring it doesn't go below 0
  counterNum = Math.max(0, counterNum - 1);
  document.getElementById('counter').textContent = counterNum;
}
