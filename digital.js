let hourEl = document.getElementById('hour');
let minuteEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let ampmEl = document.getElementById('ampm');



function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'AM'

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    if(h>12){
        h = h-12
        ampm = "PM"
    }


    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerHTML = ampm;
    setTimeout(()=>{
        updateClock()
    },1000)
}

updateClock();