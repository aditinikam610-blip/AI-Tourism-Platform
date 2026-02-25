fetch("http://localhost:3000/sites")
  .then(res => res.json())
  .then(sites => {

    const container = document.getElementById("sites");
    container.innerHTML = "";

    sites.forEach(site => {
      container.innerHTML += `
        <div class="card">
          <img src="${site.image}" />
          <div class="card-content">
            <h3>${site.name}</h3>
            <p>📍 ${site.location}</p>
            <p>
              Crowd Level:
              <span class="${site.status.toLowerCase()}">
                ${site.status}
              </span>
            </p>
          </div>
        </div>
      `;
    });

  });