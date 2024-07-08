/// <reference types="../@types/jquery" />
$('#singer1').on('click', function () {
    $('#singer1Info').slideToggle(500)
})
$('#singer2').on('click', function () {
    $('#singer2Info').slideToggle(500)
})
$('#singer3').on('click', function () {
    $('#singer3Info').slideToggle(500)
})
$('#singer4').on('click', function () {
    $('#singer4Info').slideToggle(500)
})
$('.closeBtn').on('click', function () {
    $('.sliderMenue').animate({ width: '0px', padding: '0px', height: '0px', zIndex: '-1' })
})
$('.open').on('click', function () {
    $('.sliderMenue').animate({ width: '250px', padding: '60px', height: '100%', zIndex: '999', paddingTop: '60px' })
})
window.onload = function () {

    countDownToTime("10 october 2021 9:56:00");
}

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)


    setInterval(function () { countDownToTime(countTo); }, 1000);
}