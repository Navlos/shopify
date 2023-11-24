
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




//  Function for to cancel the plan Notification if the user is not interested

const cancelBtn = document.getElementById("cancel-btn");
const planNotification = document.getElementById("plan-notification");

cancelBtn.addEventListener('click', () => {
    planNotification.style.display = 'none';
    
    // Ensure screen readers don't announce the hidden plan notification
    notification.setAttribute('aria-hidden', 'true');
})
