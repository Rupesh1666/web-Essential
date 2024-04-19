document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const messageInput = document.getElementById("message");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      
      const message = messageInput.value.trim();
      
      if (message === "") {
        alert("Please enter a message.");
        return;
      }
      
      // You can add your logic here to send the message
      // For demonstration, we'll just show a confirmation pop-up
      alert("Message has been sent!");
  
      // Reset the form
      contactForm.reset();
    });
  });
  