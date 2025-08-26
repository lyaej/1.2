// Select the DOM elements
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const body = document.body;

// Check for saved user preference
const darkMode = localStorage.getItem('darkMode');

// Function to enable dark mode
const enableDarkMode = () => {
  // Add the dark-mode class to the body
  body.classList.add('dark-mode');
  
  // Update the toggle button icon
  if (darkModeIcon) {
    darkModeIcon.src = '../../assets/icons/moon.svg'; // Path to moon icon
    darkModeIcon.alt = 'Switch to Light Mode';
  }
  
  // Save user preference to localStorage
  localStorage.setItem('darkMode', 'enabled');
};

// Function to disable dark mode
const disableDarkMode = () => {
  // Remove the dark-mode class from the body
  body.classList.remove('dark-mode');
  
  // Update the toggle button icon
  if (darkModeIcon) {
    darkModeIcon.src = '../../assets/icons/sun.svg'; // Path to sun icon
    darkModeIcon.alt = 'Switch to Dark Mode';
  }
  
  // Save user preference to localStorage
  localStorage.setItem('darkMode', null);
};

// Apply the saved preference if available
if (darkMode === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode(); // Ensure the correct initial icon is shown
}

// Add event listener to toggle button if it exists
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    // Toggle based on current state
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}

// Check system preference on page load
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkScheme.matches && darkMode !== 'disabled' && !darkMode) {
  enableDarkMode();
}

// Listen for changes to the system preference
prefersDarkScheme.addEventListener('change', (event) => {
  // Only auto-switch if user hasn't explicitly set a preference
  if (!localStorage.getItem('darkMode')) {
    if (event.matches) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
});