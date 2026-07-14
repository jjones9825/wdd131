const temperature = 105;
const windSpeed = 6;

function calculateWindChill(temp, speed){
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}

const windChillEl = document.querySelector("#windchill");

let windChill = "N/A";

if(temperature <= 50 && windSpeed > 3){
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °F";
}

windChillEl.textContent = windChill;