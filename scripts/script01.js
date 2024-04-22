function updateCountdown() {
    const currentDate = new Date();
    const newYearsDate = new Date("2024-01-01T00:00:00");
    const timeDifference = newYearsDate - currentDate;

    if (timeDifference > 0) {
        const seconds = Math.floor(timeDifference / 1000);
        document.getElementById("countdown").textContent = seconds <= 60 ? seconds : "Happy New Year!";
    } else {
        clearInterval(countdownInterval);
        document.getElementById("countdown").textContent = "Happy New Year!";
    }
}

function updateClock() {
    const currentDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayName = days[currentDate.getDay()];
    const monthName = months[currentDate.getMonth()];
    const day = String(currentDate.getDate()).padStart(2, "0");
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    document.getElementById("currentDate").textContent = `${dayName}, ${monthName} ${day}, ${year}`;
    document.getElementById("currentTime").textContent = `${hours}:${minutes}:${seconds}`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
setInterval(updateClock, 1000);