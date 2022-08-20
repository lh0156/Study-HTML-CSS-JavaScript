var mouseposX = null;
var mouseposY = null;
var captured = false;
var captured_id = "";

document.addEventListener("mousedown", ".popupDlg", function (event) {
    mouseposX = event.clientX;
    mouseposY = event.clientY;
    capture = true;

    captured_id = event.target.
})