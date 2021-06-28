
var start = document.getElementById('start');
var home = document.getElementById('home');

home.addEventListener('click', () => {
    if (start.style.bottom == "0px"){
        start.style.bottom = "80px";
        start.style.height = "60%";
        start.style.width = "50%";
        start.style.zIndex = 4;
        console.log('Opened Start Menu')
    } else {
        // start.innerHTML = '';
        start.style.bottom = "0px";
        start.style.height = "0%";
        start.style.width = "0%";
        start.style.zIndex = -1;
        console.log('Closed Start Menu');
    }
});