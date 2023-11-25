
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













const checkbox = document.getElementById('myCheckbox');
const iconContainer = document.getElementById('iconContainer');
const checkboxLabel = document.getElementById('checkboxLabel');

function updateSVG() {
  iconContainer.innerHTML = ''; // Clear previous SVG content

  if (checkbox.checked) {
    // Show the spinner SVG first
    const spinnerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    spinnerSVG.innerHTML = `<image xlink:href="https://crushingit.tech/hackathon-assets/icon-spinner.svg" />`;
    iconContainer.appendChild(spinnerSVG);

    setTimeout(() => {
      // Show checkmark SVG when processing is complete
      const checkedSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      checkedSVG.innerHTML = `<image xlink:href="https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg" />`;
      iconContainer.innerHTML = ''; // Clear spinner
      iconContainer.appendChild(checkedSVG);

      // Add a click event listener to the checkmarkSVG
      checkedSVG.addEventListener('click', () => {
        console.log('checked');
      });
    }, 100);
  } else {
    // Show initial SVG when checkbox is not checked
    const initialSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    initialSVG.innerHTML = `<circle cx="16" cy="16" r="12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />`;
    iconContainer.appendChild(initialSVG);
  }
}

// Attach the updateSVG function to the change event of the checkbox
checkbox.addEventListener('change', updateSVG);

// Call the updateSVG function initially to set the initial state
updateSVG();





