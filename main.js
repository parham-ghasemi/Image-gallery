var target_date = new Date().getTime() + (1000 * 10); // set the countdown date (1 minute from now)
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown() {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    if (seconds_left <= 0) {
        // stop the countdown and redirect to another HTML file
        countdown.innerHTML = "<span>00</span><span>00</span>";
        window.location.href = "gallery.html"; // replace 'your-file.html' with the file you want to redirect to
        return; // exit the function to stop the countdown
    }

    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    // format countdown string + set tag value
    countdown.innerHTML = "<span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}
