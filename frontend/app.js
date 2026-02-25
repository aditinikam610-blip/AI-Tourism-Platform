// Fetch heritage sites
fetch("http://localhost:3000/sites")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("sites");

    data.forEach(site => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${site.name}</h3>
        <p>📍 ${site.location}</p>
        <span class="badge ${site.status.toLowerCase()}">
          ${site.status} Crowd
        </span>
      `;

      container.appendChild(card);
    });
  });

// Dashboard Chart
fetch("http://localhost:3000/dashboard")
  .then(res => res.json())
  .then(data => {
    new Chart(document.getElementById("chart"), {
      type: "bar",
      data: {
        labels: data.map(d => d.name),
        datasets: [{
          label: "Popularity Score (AI Input)",
          data: data.map(d => d.popularity)
        }]
      },
      options: {
        responsive: true
      }
    });
  });