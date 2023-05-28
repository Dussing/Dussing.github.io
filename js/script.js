var endTime = new Date();
var  startDate = Date.parse("5/29/2022");
var  endDate = Date.parse(endTime);
var res1=Math.ceil((endDate - startDate)/(1*24*60*60*1000));

var  startDate = Date.parse("6/7/2022");
var res2=Math.ceil((endDate - startDate)/(1*24*60*60*1000));
var res3 = res2.toString();
document.getElementById("site-title").innerHTML = "2022年6月7日我们相爱，"+"<br>"+"今天已经"+res3+"天啦！";

//"fa-fw fas fa-music".onclick = window.open('http://www.baidu.com')