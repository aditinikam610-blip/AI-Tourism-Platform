fetch("http://localhost:3000/dashboard")
  .then(res => res.json())
  .then(data => {

    const ctx = document.getElementById("chart").getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map(d => d.name),
        datasets: [{
          label: "Popularity Score",
          data: data.map(d => d.popularity)
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });

  });