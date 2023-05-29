
const API_KEY = "b56bb65fcf4a83afb6062dc16598f52b";
const weatherDiv = document.getElementById("weather");

function onGeoSuccess(geoData){
    const lat = geoData.coords.latitude;
    const lon = geoData.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`;
    // alert(url);
    fetch(url).then( response => response.json()).then( (data) => {
        const name = data.name;
        const weather = data.weather[0].main;

        weatherDiv.querySelector("span:first-child").innerHTML = name;
        weatherDiv.querySelector("span:last-child").innerHTML = weather;
        
    }); 
}

function onGeoFail(geoData){
    alert("Fail to get geolocation data");
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);



