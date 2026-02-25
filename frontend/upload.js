document.querySelector("form").addEventListener("submit", async e => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", document.getElementById("name").value);
  formData.append("location", document.getElementById("location").value);
  formData.append("image", document.getElementById("image").files[0]);

  const res = await fetch("http://localhost:3000/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  alert(data.message);
});