// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    // Optional: Update button text/icon
    if (body.classList.contains("dark-theme")) {
      toggleBtn.textContent = "🌙 Toggle Theme";
    } else {
      toggleBtn.textContent = "☀️ Toggle Theme";
    }
  });
});
