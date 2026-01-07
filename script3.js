const form = document.getElementById("leadForm");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  msg.textContent = "✅ Thank you! You’re on the waitlist.";
  msg.style.color = "green";
  form.reset();
});
