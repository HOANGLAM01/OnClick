function yesClick() {
    alert("Tối nay đi chơi nha");
}
function noHover() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
}