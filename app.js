
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
        start.style.zIndex = -11;
        start.style.opacity = 0;
        console.log('Closed Start Menu');
    }
});

//====================================================================

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

//=====================================================================

var search = document.getElementById('search');
var searchLabel = document.getElementById('search-label');
searchLabel.addEventListener('click', () => {
    if (search.style.width == "0px") {
        search.style.zIndex = 5;
        search.style.opacity = 1;
        search.style.width = "300px";
        search.style.left = "calc(50% + 85px)";
    } else {
        search.style.zIndex = -1;
        search.style.opacity = 0;
        search.style.width = "0px";
        search.style.left = "calc(50% - 60px)";
    }
});

//=====================================================================

var i = 0;
var letters = document.getElementsByClassName('falling-letters');
var message = document.getElementById('messages');
var messageBtn = document.getElementById('message_click');
var redLine = document.getElementsByClassName('red-line');
var me = document.getElementById('me');
var h21 = document.getElementById('h21');
var ele = document.getElementsByClassName('inside-div');
var notif = document.getElementById('notif');
messageBtn.addEventListener('click', () => {
    if (message.style.right == "-400px"){
        message.style.right = "0px";
        redLine[0].style.animation = "sliding1 1.5s forwards";
        redLine[1].style.animation = "sliding2 1.3s forwards";
        redLine[0].style.animationDelay = "0.5s";
        redLine[1].style.animationDelay = "1.5s";
        me.style.animation = "falling 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards";
        me.style.animationDelay = "1.5s";
        h21.style.animation = "falling 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards"
        h21.style.animationDelay = "2.5s";
        notif.innerHTML = '';
        notif.style.width = "0px";
        notif.style.height = "0px";
        for (i=0; i<16; i++){
            letters[i].style.animation = "falling 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards";
            letters[i].style.animationDelay = i/10 + 's';
        }
        for (i=0; i<5; i++){
            ele[i].style.animation = "falling 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards"
            ele[i].style.animationDelay = 3 + i/5 + "s";
        }
    } else {
        message.style.right = "-400px";
        redLine[0].style.animation = "none";
        redLine[1].style.animation = "none";
        me.style.animation = "none";
        h21.style.animation = "none";
        for (i=0; i<16; i++){
            letters[i].style.animation = "none";
        }
        for (i=0; i<5; i++){
            ele[i].style.animation = "none";
        }
    }
    
});

//=====================================================================