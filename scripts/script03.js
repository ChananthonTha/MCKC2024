function updateCountdown() {
    const currentDate = new Date();
    const newYearsDate = new Date("2024-01-01T00:00:00");
    const timeDifference = newYearsDate - currentDate;
   
    if (timeDifference > 0) {
         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
   
         document.getElementById("days").textContent = String(days).padStart(2, "0");
         document.getElementById("hours").textContent = String(hours).padStart(2, "0");
         document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
         document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }else {
         document.getElementById("hpny").textContent = "Happy New Year !!";
         clearInterval(countdownInterval);
         fireworks.start();
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
   
   function showNewYearMessage() {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
   
    if (daysElement.style.opacity === "1") {
       daysElement.style.opacity = "0";
       hoursElement.style.opacity = "0";
       minutesElement.style.opacity = "0";
       secondsElement.style.opacity = "0";
    }
   
    setTimeout(function() {
       document.getElementById("hpny").textContent = "Happy New Year";
    }, 2000);
   }
   
   setTimeout(showNewYearMessage, 60000);