setInterval(setClock, 1000);

const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();