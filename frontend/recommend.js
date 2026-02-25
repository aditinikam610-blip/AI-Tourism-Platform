fetch("http://localhost:3000/sites")
.then(res => res.json())
.then(data => {
  const container = document.getElementById("recommendations");

  data.filter(site => site.crowd === "Low").forEach(site => {
    container.innerHTML += `
      <div class="card">
        <img src="${site.image || 'https://via.placeholder.com/400x200'}">
        <div class="card-content">
          <h3>${site.name}</h3>
          <p>${site.location}</p>
          <button class="btn">Explore</button>
        </div>
      </div>
    `;
  });
});