const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");


setInterval(()=>{
    let time = new Date();
    sec.style.transform = `rotateZ(${time.getSeconds() * 6}deg)`;
    min.style.transform = `rotateZ(${time.getMinutes()* 6}deg)`;
    hour.style.transform = `rotateZ(${time.getHours()*30 + (time.getMinutes()* 6/12)}deg)`;

});

