let progress = document.querySelectorAll(".skill progress");
let skills_div = document.querySelector("#our-skills");
let stats = document.querySelectorAll("#stats");
let statsSpan = document.querySelectorAll(".stats .number");
let smallScreen = window.matchMedia("(max-width: 768px)");

window.onscroll = () => {
  if (
    window.scrollY >=
    (smallScreen.matches ? skills_div.offsetTop : skills_div.offsetTop - 250)
  ) {
    progress.forEach((progress) => {
      let targetValue = progress.dataset.value;
      setInterval(() => {
        {
          if (progress.value < targetValue) {
            progress.value++;
          } else {
            clearInterval();
          }
        }
      }, 20);
    });
  }
  if (
    stats.length > 0 &&
    window.scrollY >=
      (smallScreen.matches
        ? stats[0].offsetTop + 100
        : stats[0].offsetTop - 250)
  ) {
    statsSpan.forEach((statSpan) => {
      let targetValue = statSpan.dataset.value;
      let statSpanInterval = setInterval(() => {
        if (parseInt(statSpan.innerHTML) < targetValue) {
          statSpan.innerHTML = parseInt(statSpan.innerHTML) + 1;
        } else {
          clearInterval(statSpanInterval);
        }
      }, 10);
    });
  }
};

let months = 31 * 24 * 60 * 60 * 1000;
let time = new Date("2025-03-06T00:00:00").getTime() + months;
setInterval(() => {
  let now = new Date().getTime();
  let distance = time - now;
  let daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hoursValue = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondsValue = Math.floor((distance % (1000 * 60)) / 1000);
  if (
    daysValue <= 0 &&
    hoursValue <= 0 &&
    minutesValue <= 0 &&
    secondsValue <= 0
  ) {
    clearInterval(this);
    time += months;
  }

  document.querySelector(".events .time .days").innerHTML =
    daysValue < 10 ? "0" + daysValue : daysValue;
  document.querySelector(".events  .time .hours").innerHTML =
    hoursValue < 10 ? "0" + hoursValue : hoursValue;
  document.querySelector(".events  .time .minutes").innerHTML =
    minutesValue < 10 ? "0" + minutesValue : minutesValue;
  document.querySelector(".events  .time .seconds").innerHTML =
    secondsValue < 10 ? "0" + secondsValue : secondsValue;
}, 1000);
