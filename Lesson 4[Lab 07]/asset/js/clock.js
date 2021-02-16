const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const deg = 6;

setInterval(()=>{
    let time = new Date();
    let hours = time.getHours()*30;
    let mins = time.getMinutes()* deg;
    let secs = time.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hours + (mins/12)}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    sec.style.transform = `rotateZ(${secs}deg)`;
});

