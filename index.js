alert("Kabdikarim Temirlan");
function myFunction() {
  var today = new Date();
  var year = today.getFullYear();
  var date = today.getDate();
  var month = today.getMonth();
  //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var time;
  if (today.getHours() >= 10){
    time = today.getHours() + ":";
  }
  else {
    time = "0"+today.getHours() + ":";
  }
  if (today.getMinutes() < 10){
    time += "0"+today.getMinutes() + ":";
  }
  else {
    time += today.getMinutes() + ":";
  }
  if (today.getSeconds() < 10){
    time += "0"+today.getSeconds();
  }
  else {
    time += today.getSeconds();
  }
  document.getElementById("demo").innerHTML = "Current day is:\n";
  document.getElementById("demo2").innerHTML = "Year: "+ year + "\n";
  document.getElementById("demo3").innerHTML = "Today is : Thursday" + "\n";
  document.getElementById("demo4").innerHTML = "Date: " + date + "\n";
  document.getElementById("demo5").innerHTML = "Month: " + month + "\n";
  document.getElementById("demo6").innerHTML = "Current time is : " +  time;
}
function myFunction2() {
  var one = new Date("June 25 2024 20:22:48"); // дата, до которой считаем.
  var two = Date.now(); // текущее время
  var remaining = one - two; // миллисекунды до даты
  remaining /= 1000; // секунды до даты
  remaining /= 60;    // минуты до даты
  remaining /= 60;    // часы до даты
  remaining /= 24;    // дни до даты
  document.getElementById("demo7").innerHTML = Math.round(remaining) + " days left until the freedom!";
}
function myFunction3() {
  var in1 = document.getElementById("domTextElement1").value;
  var in2 = document.getElementById("domTextElement2").value;
  document.getElementById("demo8").innerHTML = in1*in2;
}
function myFunction4() {

    var in1 = document.getElementById("domTextElement1").value;
    var in2 = document.getElementById("domTextElement2").value;
    document.getElementById("demo8").innerHTML = in1/in2;
}
