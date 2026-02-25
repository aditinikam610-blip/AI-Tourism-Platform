document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  fetch("http://localhost:3000/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      location: document.getElementById("location").value,
      image: document.getElementById("image").value
    })
  })
  .then(() => alert("Uploaded Successfully"));
});