

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function timer(){
    const d = new Date();
    
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    const hDeg = (h/12)*360 + 90;
    const mDeg = (m/60)*360 + 90;
    const sDeg = (s/60)*360 + 90;

    hourHand.style.transform = `rotate(${hDeg}deg)`;
    minuteHand.style.transform = `rotate(${mDeg}deg)`;
    secondHand.style.transform = `rotate(${sDeg}deg)`;
}

setInterval(timer, 1000);
