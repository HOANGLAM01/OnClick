function upArrowPressd() {
    let element = document.getElementById('nobita');
    if (parseInt(element.style.top) > 0) {
        element.style.top = parseInt(element.style.top) - 5 + 'px';
    }
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    if (parseInt(element.style.top) < 600) {
        element.style.top = parseInt(element.style.top) + 5 + 'px';
    }
}
function  leftArrowPressed() {
    var element = document.getElementById("nobita");
    if (parseInt(element.style.left)>0) {
        element.style.left = parseInt(element.style.left) - 5 + 'px';
    }
}
function  rightArrowPressed() {
    var element = document.getElementById("nobita");
    if (parseInt(element.style.left) < 1400) {
        element.style.left = parseInt(element.style.left) + 5 + 'px'
    }
}
function  moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressd();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function  docReady() {
    window.addEventListener('keydown', moveSelection);
}