const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const deg = 6;

setInterval(()=>{
    let time = new Date();
    let hours = time.getHours()*30;
    let mins = time.getMinutes()* deg;
    let secs = time.getSeconds() * deg;
    // let time = new Date();
    // let hours = time.getHours()/60*360;
    // let mins = time.getMinutes()/ 60 *360 + time.getSeconds()/60*6;
    // let secs = time.getSeconds()/12 *360 + time.getMinutes() / 60 * 30;

    // animation = ["@Keyframes sec{from{transform:rotate(" + sec + "deg);}to{transform: rotate(" + (second + 360) + "deg);}}",
    // "@Keyframes sec{from{transform:rotate(" + min + "deg);}to{transform: rotate(" + (min + 360) + "deg);}}",
    // "@Keyframes sec{from{transform:rotate(" + hour + "deg);}to{transform: rotate(" + (hour + 360) + "deg);}}"].join("");
    hour.style.transform = `rotateZ(${hours + (mins/12)}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    sec.style.transform = `rotateZ(${secs}deg)`;
});

