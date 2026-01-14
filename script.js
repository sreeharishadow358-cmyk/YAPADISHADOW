const ctxLine = document.getElementById('lineChart');
const ctxBar = document.getElementById('barChart');

new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['6AM','8AM','10AM','12PM','2PM','4PM','6PM'],
    datasets: [{
      data: [0,1.2,2.8,4.5,6.1,7.0,7.6],
      borderColor: '#6366f1',
      borderWidth: 2,
      tension: 0.4,
      fill: false
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  }
});

new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      data: [820, 760, 880, 940, 1020, 1100],
      backgroundColor: '#3b82f6'
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  }
});