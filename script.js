
function updateTime() {
  const timeEl = document.getElementById("time");
  if (timeEl) {
    timeEl.textContent = Date.now();
  }
}
setInterval(updateTime, 1000);
updateTime();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return; 

  const success = document.getElementById("success");
  const loading = document.getElementById("loading");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    success.hidden = true;
    loading.hidden = false;

    let valid = true;
    document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""));

    const { name, email, subject, message } = form;

    if (!name.value.trim()) {
      document.getElementById("error-name").textContent = "Full name is required.";
      valid = false;
    }
    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
      document.getElementById("error-email").textContent = "Please enter a valid email.";
      valid = false;
    }
    if (!subject.value.trim()) {
      document.getElementById("error-subject").textContent = "Subject is required.";
      valid = false;
    }
    if (!message.value.trim() || message.value.trim().length < 10) {
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
      valid = false;
    }

    if (!valid) {
      loading.hidden = true;
      return;
    }

    setTimeout(() => {
      loading.hidden = true;
      success.hidden = false;
      form.reset();
    }, 2000);
  });
});
