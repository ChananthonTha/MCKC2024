const fireworkContainer = document.querySelector('.fireworks-container');

const fireworks = new Fireworks(fireworkContainer, {
  speed: 4,
  acceleration: 1.05,
  friction: 1,
  gravity: 4,
  particles: 400,
  explosion: 10
})

function updateCountdown() {
  const currentDate = new Date();
  const newYearsDate = new Date("2024-01-01T00:00:00");
  const timeDifference = newYearsDate - currentDate;

  if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      if (timeDifference <= 60000) {
          // If less than or equal to 60 seconds, show only seconds in "hpny"
          // document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");
        document.getElementById("hpny").innerHTML =
        // '<div id="hpny">'+
          '<div class="row">'+
            '<div class="col-md-8">   '  +
              '<div class="col-md-12 mt-3 align-text-bottom">'+
                '<div class="txt float-left">'+
                  '<div class="fw-bold" style="font-size: 46px;">'+
                    'The remaining time of 2023'+
                  '</div>'+
                  '<div class="countdown" style="font-size: 96px;">'+
                    '<span id="hours">00</span> :'+
                    '<span id="minutes">00</span> :' +
                    '<span id="seconds">00</span>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<hr style="height: 10px;">'+
              '<div class="col-md-12 mt-3 mb-3">'+
                '<div class="row">'+
                  '<div class="col-md-12">'+
                    '<h1 id="currentTime" class="txt-time fw-bolder" style="font-size: 52px;">00:00:00</h1>'+
                  '</div>'+
                  '<div class="col-md-12">'+
                    '<h1 id="currentDate" class="txt-time fw-bold" style="font-size: 36px;">00-00-0000</h1>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="col-md-4 my-auto">'+
              '<img class="img" width="100%" src="./gif/Raindeer.gif">'+
            '</div>'+
          // '</div>'+
        '</div>'
        ;
          document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

          // document.getElementById("days").textContent = String(days).padStart(2, "0");  //current date
          // document.getElementById("hours").textContent = String(hours).padStart(2, "0"); //
          // document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
          // document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
      } else {
          // Otherwise, show days, hours, minutes, and seconds in their respective elements
          document.getElementById("days").textContent = String(days).padStart(2, "0");
          document.getElementById("hours").textContent = String(hours).padStart(2, "0");
          document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
          document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
      }
  } else {
      // document.getElementById("hpny").textContent = "";
      document.getElementById("hpny").innerHTML = "<h1 style='font-size: 72px;'>Happy New Year \n 2024</h1><img class='img w-50' width='100%' src='./gif/Raindeer.gif'>";
      clearInterval(countdownInterval);
      document.body.style.backgroundImage = "url('./gif/giphy.gif')";
      // fireworks.start();
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