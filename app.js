var state1 = 0;
var state2 = 0;

// Disable right click, for better user experience:
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

//====================================================================

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
        search.style.left = "calc(50% + 55px)";
        search.style.outline = "6px solid #f3f3f3"
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
    if (state1 == 0){
        state1 = 1;
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
        state1 = 0;
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

var poppup = document.getElementById('poppup');
var taskbarPoppup = document.getElementById('taskbarPoppup');
poppup.addEventListener('click', () => {
    if (state2 == 0){
        state2 = 1;
        poppup.style.transform = "rotateZ(180deg) translateY(17px)";
        taskbarPoppup.style.opacity = 1;
        taskbarPoppup.style.bottom = "70px";
        if (state1 == 1){
            taskbarPoppup.style.zIndex = 12;
            taskbarPoppup.style.border = "1px solid black";
        }
    } else {
        state2 = 0;
        poppup.style.transform = "rotateZ(0deg) translateY(17px)";
        taskbarPoppup.style.opacity = 0;
        taskbarPoppup.style.bottom = "20px";
        taskbarPoppup.style.zIndex = 0;
        taskbarPoppup.style.border = "none";
    }
});

//======================================================================

var str;
var rightPoppup = document.getElementById('rightPoppup');
var c1 = document.getElementById('covering1');
var c2 = document.getElementById('covering2');
var rpContent = document.getElementById('rightPoppupContent');
function displayNotification(str){
    rightPoppup.style.right = "0px";
    rpContent.innerHTML = str;
    setTimeout(() => {
        c1.style.animation = "show 1s ease-in-out forwards";
        c2.style.animation = "show 1s ease-in-out forwards";
        c2.style.animationDelay = "800ms"
    }, 100);
    setTimeout(() => {
        console.log('Waiting..');
        rightPoppup.style.right = "-250px";
    }, 3000);
    setTimeout(() => {
        c1.style.animation = "none";
        c2.style.animation = "none";
    }, 4000);
}

var x;
var tabs = [0, 0, 0, 0];
var tabDiv = document.querySelectorAll('.tab');
function logMouseButton(event, x){
    switch (event.button) {
        case 0:
            if (tabs[x] >= 4) {
                alert('Maximum occupancy reached! Please close some windows first!');
                break;
            }
            tabDiv[tabs[x] + x*4].style.display = "block";
            tabs[x]++;
            break;
        case 2:
            if (tabs[x] > 0){
                tabDiv[tabs[x] + x*4 - 1].style.display = "none";
                tabs[x]--;
            } else {
                switch (x) {
                    case 0:
                        displayNotification('Open some File Explorer windows first..');
                        break;
                    case 1:
                        displayNotification('Open some Google Chrome windows first..');
                        break;
                    case 2:
                        displayNotification('Open some Microsoft Edge windows first..');
                        break;
                    case 3:
                        displayNotification("Open some VS Code Windows first..");
                        break;
                }
            }
            break;
        default:
            alert(`Please click using LMB or RMB only!!`);
    }
}

//=====================================================================

var isClicked = 0;
const terminalIcon = document.getElementById('terminalIcon');
const terminal = document.getElementById('terminal');

function terminalMouseButton(event){
    switch (event.button) {
        case 0:
            if (isClicked == 1){
                displayNotification('One Terminal is already open!');
                return;
            }
            tabDiv[16].style.display = "block";
            isClicked++;
            terminal.style.opacity = 1;
            terminal.style.zIndex = 2;
            terminal.style.bottom = "70px";
            break;
        case 2:
            if (isClicked == 0){
                displayNotification('Please Open a terminal first');
                return;
            } else {
                closeTerminal();
                return;
            }
            break;
        default:
            alert('Please press either LMB or RMB');
    }
}

function closeTerminal(){
    tabDiv[16].style.display = "none";
    terminal.style.opacity = 0;
    terminal.style.zIndex = -12;
    terminal.style.bottom = "-160px";
    isClicked--;
}

var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);            
function autosize(){
    var el = this;
    setTimeout(() => {
        el.style.cssText = 'height: 35px; padding: 10px;';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}

// ============================================================================