// script.js

// For the contact form, you can add an event listener to handle form submission.
// This example simply shows an alert message when the form is submitted.

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        alert('Thank you for your message! We will get back to you soon.');
        // Here, you could add additional code to send the form data via AJAX
        contactForm.reset();
      });
    }
  });
  
