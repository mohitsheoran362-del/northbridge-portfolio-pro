const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      statusText.style.color = "green";
      statusText.textContent = result.message;
      form.reset();
    } else {
      statusText.style.color = "red";
      statusText.textContent = result.error;
    }
  } catch (error) {
    statusText.style.color = "red";
    statusText.textContent = "Server error. Please try again.";
  }
});
