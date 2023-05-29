function getTime(){
    const date = new Date();
    const hour   = String(date.getHours()  ).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    // return `${date.getHours()}:${date.getMinutes()}:${(date.getSeconds()).toString().padStart(2,'0')}`;
    // return hour+":"+minute+":"+second;
    return `${hour}:${minute}:${second}`;
}

function setTimeToClock(){
    const clock = document.querySelector("h2#clock");
    clock.innerHTML = getTime();
}

setTimeToClock();

setInterval(setTimeToClock, 1000);