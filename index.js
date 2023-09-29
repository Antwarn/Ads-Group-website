const contactButton = document.getElementsByClassName("home");

contactButton.addEventListener("click", function() {
  window.location.href = './nav-bar/contact/contact.html'
});

// script.js
const db = firebase.firestore();
const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = document.getElementById('emailInput').value;

  // Check if the email is valid before storing it
  if (isValidEmail(emailInput)) {
    // Store the email in Firestore (replace 'emails' with your Firestore collection name)
    db.collection('emails').add({ email: emailInput })
      .then(function () {
        console.log('Email successfully stored in Firestore');
        // Clear the input field
        document.getElementById('emailInput').value = '';
      })
      .catch(function (error) {
        console.error('Error storing email: ', error);
      });
  } else {
    alert('Please enter a valid email address');
  }
});

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
