setTimeout(getTime, 100);

function getTime() {
    let d = new Date();	// 현재 날짜와 시간
    let hur = d.getHours();		// 시
    let min = d.getMinutes();	//분

    let timeBoard = document.querySelector("#status-bar__Time");

    let time = hur + ":" + min;

    timeBoard.innerHTML = time;

}