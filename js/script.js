$(document).ready(function () {
  var myfunc = function () {
    var myDate = new Date();
    var seconds = myDate.getSeconds();
    var minutes = myDate.getMinutes();
    var hours = myDate.getHours();
    $(".seconds .pointer").css("left", (seconds + 1) * 10 - 5);
    $(".seconds .pointer .txt").text(seconds);
    $(".minutes .pointer").css("left", (minutes + 1) * 10 - 5);
    $(".minutes .pointer .txt").text(minutes);
    $(".hours .pointer").css("left", ((hours % 12) + 1) * 50 - 5);
    $(".hours .pointer .txt").text(hours % 12);
  };
  setInterval(myfunc, 1000);
});
