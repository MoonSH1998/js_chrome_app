const API_KEY ="df2e0482451210d91b066313c0527bcf";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    const url =`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText = `${data.weahter[0].main} / ${data.main.temp}`;
    });
    
}

function onGeoError() {
    console.log("Can't find you. No weather for youuu.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

