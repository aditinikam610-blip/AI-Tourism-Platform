fetch("http://localhost:3000/sites")
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("recommendations");
    container.innerHTML = "";

    data
      .filter(site => site.status === "Low")
      .forEach(site => {
        container.innerHTML += `
          <div class="card">
            <img src="${site.image}">
            <div class="card-content">
              <h3>${site.name}</h3>
              <p>${site.location}</p>
              <button class="btn">Explore</button>
            </div>
          </div>
        `;
      });

  });