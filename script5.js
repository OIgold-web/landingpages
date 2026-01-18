const form = document.getElementById("leadForm");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  msg.textContent = "✅ Thank you! You’re on the waitlist.";
  msg.style.color = "green";
  form.reset();
    window.location.href = 'https://www.fiverr.com/s/8z34Q8V'

});
