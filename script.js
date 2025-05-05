// script.js
document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("imageFile");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select an image first.");
    return;
  }

  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch("https://your-backend-api.com/generate", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    alert("Video created: " + result.videoUrl);
  } catch (error) {
    alert("An error occurred.");
    console.error(error);
  }
});
