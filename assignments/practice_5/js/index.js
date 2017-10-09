function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days'); /* select the days class within the clock class*/
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  updateClock();
  var timeinterval = setInterval(updateClock, 1000); /*setInterval(): repeatedly calls a function or executes a code snippet*/


  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.value = t.days;
    hoursSpan.value = ('0' + t.hours).slice(-2); /* get the last 2 characters*/
    minutesSpan.value = ('0' + t.minutes).slice(-2);
    secondsSpan.value= ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }


} //end initializeClock

function start_clock() {
  var second = parseInt(document.getElementById("second").value);
  var minute = parseInt(document.getElementById("minute").value);
  var hour = parseInt(document.getElementById("hour").value);
  var day = parseInt(document.getElementById("day").value);

  date = new Date(Date.parse(new Date()) + (day * 86400) + (hour * 3600) + (minute * 60) + second );
  initializeClock('clockdiv', date);
}

function end_clock() {
  date = new Date(Date.parse(new Date()) );
  initializeClock('clockdiv', date);
}

var deadline = new Date(Date.parse(new Date()) + (day * 86400) + (hour * 3600) + (minute * 60) + second ); /*new Date(): current date and time; Date.parse(): returns the number of milliseconds since January 1, 1970, 00:00:00 UTC*/
