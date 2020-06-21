const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const user = document.getElementById('userfield');
const message = document.getElementById('messagefield');
const send = document.getElementById('send');
const noteDot = document.getElementById('notifications');
const noteBell = document.getElementById('not-bell').parentNode;
const trafficList = document.getElementsByClassName('traffic-nav')[0];
const noteMessages = $('#dropdown')[0];
let noneLeft = false;
function findIndex(e, list) {
    for(let i=0; i<list.children.length; i++) {
        if(e.target.textContent == list.children[i].textContent) {
            return i;
        }
    }
}

//Alert Banner
alertBanner.innerHTML = 
    `
    <div class='alert-banner' id='alert-banner'>
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class='alert-banner-close' id='banner-close'>x</p>
    </div>
    `;

$('.alert-banner-close').click(function() {
    $('.alert-banner').slideUp();
});

//Dropdown
$('#dropdown')[0].style.display = 'none';
$(noteBell).click(function() {
    if($('#dropdown')[0].style.display == 'none'){
        $('#dropdown').slideDown();
        noteDot.style.opacity = '0';
    }else{
        $('#dropdown').slideUp();
        if(!noneLeft){
            noteDot.style.opacity = '1';
        }
    }
});

$('#dropdown')[0].addEventListener('click', (e) => {
    for(let i=0; i<noteMessages.children.length; i++) {
        if(e.target.textContent == 'x') {
            if(noteMessages.children[i].children[0].textContent == e.target.parentNode.children[0].textContent) {
                noteMessages.removeChild(noteMessages.children[i]);
            }
            if(noteMessages.children.length == 0) {
                const newLink = document.createElement('a');
                const newDiv = document.createElement('div');
                newLink.appendChild(newDiv);
                newDiv.className = 'note-message';
                newDiv.textContent = 'No messages to display';
                noteMessages.appendChild(newLink);
                noneLeft = true;
            }
        }
    }
});

//Traffic Line Graph
//Traffic Times
trafficList.addEventListener('click', (e) => {
    for(let i=0; i<trafficList.children.length; i++) {
        trafficList.children[i].className = 'traffic-nav-link';
    }
    trafficList.children[findIndex(e, trafficList)].classList.add('active');
    if(trafficList.children[findIndex(e, trafficList)].textContent == 'Hourly') {
        trafficData = {
            labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
            datasets: [{
                data: [8, 5, 8, 1, 2, 6, 3, 4, 1, 9, 2, 7, 2, 7, 10, 3, 7, 2, 8, 8, 10, 3, 6, 9],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };
        trafficOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        };
        new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }else if(trafficList.children[findIndex(e, trafficList)].textContent == 'Daily') {
        trafficData = {
            labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
            datasets: [{
                data: [75, 115, 175, 125, 225, 200, 100],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };
        trafficOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        };
        new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }else if(trafficList.children[findIndex(e, trafficList)].textContent == 'Weekly'){
        trafficData = {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
            datasets: [{
                data: [750, 1250, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 2250],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };
        trafficOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        };
        new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }else if(trafficList.children[findIndex(e, trafficList)].textContent == 'Monthly') {
        trafficData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                data: [18850, 17425, 11718, 21601, 21401, 18728, 7896, 13130, 9840, 19750, 15320, 17415],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };
        trafficOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        };
        new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }
});

//Graph Data
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

//Traffic Donut Graph
const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477bf',
            '#88cc95',
            '#51b6c8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//Messages
send.addEventListener('click', () => {
    if(user.value == '' && message.value == '') {
        alert('Please fill out both user and message fields before sending.');
    }else if(user.value == '') {
        alert('Please fill out the user field before sending.');
    }else if(message.value == '') {
        alert('Please fill out the message field before sending.');
    }else {
        alert(`Message sent to ${user.value}.`);
    }
    document.getElementById('userfield').value = '';
    document.getElementById('messagefield').value = '';
});