
var start = document.getElementById('start');
var home = document.getElementById('home');

home.addEventListener('click', () => {
    if (start.style.bottom == "0px"){
        start.style.bottom = "80px";
        start.style.zIndex = 4;
        start.style.opacity = 0.95;
        console.log('Opened Start Menu')
    } else {
        // start.innerHTML = '';
        start.style.bottom = "0px";
        start.style.zIndex = -1;
        start.style.opacity = 0;
        console.log('Closed Start Menu');
    }
});

var power = document.getElementById('power-off-btn');
var power_content = document.getElementById('power-content');
var cross = document.getElementById('cross');
power.addEventListener('click', () => {
    power_content.style.opacity = 1;
    power_content.style.zIndex = 10;
    power_content.style.cursor = "pointer";
});
cross.addEventListener('click', () => {
    power_content.style.opacity = 0;
    power_content.style.zIndex = -4;
    power_content.style.cursor = "default";
});
