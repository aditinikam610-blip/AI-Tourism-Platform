fetch("http://localhost:3000/dashboard")
  .then(response => response.json())
  .then(data => {

    const labels = data.map(item => item.name);
    const values = data.map(item => item.popularity);

    const ctx = document.getElementById("chart").getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Crowd Level (AI Prediction)",
          data: values,
          backgroundColor: values.map(v =>
            v > 70 ? "rgba(255, 99, 132, 0.8)" :
            v > 40 ? "rgba(255, 159, 64, 0.8)" :
                     "rgba(75, 192, 192, 0.8)"
          ),
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });

  })
  .catch(err => console.error("Dashboard error:", err));