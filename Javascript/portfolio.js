/* script.js */
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! I will get back to you soon.");
    this.reset();
});