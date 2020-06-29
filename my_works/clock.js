setInterval(function() {
    $('#clock').text(clock);
}, 1000);

function clock() {
    let currentTime = new Date();
    let hours = properTimeValue(currentTime.getHours());
    let minutes = properTimeValue(currentTime.getMinutes());
    let seconds = properTimeValue(currentTime.getSeconds());
    let date = properTimeValue(currentTime.getDate());
    let month = properTimeValue(currentTime.getMonth());
    let year = currentTime.getFullYear();


    return "" + hours + ":" + minutes + ":" + seconds + " " + date + "." + month + "." + year;
}

function properTimeValue(value) {
    if (value < 10) {
        value = "0" + value;
    }

    return value;
}
