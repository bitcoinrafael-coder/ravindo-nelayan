fetch('assets/data/tide-data.json')
  .then(r => r.json())
  .then(data => {
    const forecast = document.getElementById("forecast");
    const bestDays = document.getElementById("best-days");
    let html = "<h2>Data Pasang Surut</h2><ul>";
    let best = [];
    data.forEach(day => {
      html += `<li>${day.date}: Tinggi: ${day.high1.height}m (${day.high1.time}), Rendah: ${day.low1.height}m (${day.low1.time})</li>`;
      if (day.high1.height >= 2 && day.low1.height <= 0.5) {
        best.push(day.date);
      }
    });
    html += "</ul>";
    forecast.innerHTML = html;
    bestDays.innerHTML = "<h2>Tanggal Terbaik Mencari Ikan:</h2><p>" + best.join(", ") + "</p>";
  });
