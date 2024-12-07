const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

submitButton.addEventListener("click", () => {
  contactPage.innerHTML =
    '<p class="large-text">Thank you for your message !</p>';
});
