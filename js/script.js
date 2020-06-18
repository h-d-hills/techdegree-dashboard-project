//Alert Banner
const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');

alertBanner.innerHTML = 
    `
    <div class='alert-banner'>
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class='alert-banner-close'>x</p>
    </div>
    `;

$('.alert-banner-close').click(function() {
    $('.alert-banner').slideUp();
});

//Traffic Line Graph
let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 2250],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

//Traffic Bar Graph
const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477bf',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});