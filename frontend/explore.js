fetch("http://localhost:3000/sites")
  .then(res => res.json())
  .then(sites => {
    const container = document.getElementById("sites");
    container.innerHTML = "";

    sites.forEach(site => {
      container.innerHTML += `
        <div class="card">
          <img src="${site.image}" />
          <h3>${site.name}</h3>
          <p>📍 ${site.location}</p>
          <span class="badge ${site.status.toLowerCase()}">
            ${site.status} Crowd
          </span>
        </div>
      `;
    });
  });