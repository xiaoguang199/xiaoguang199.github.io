/**
 * Created by hzf on 2016/1/9.
 */
function time() {
    var date1 = new Date();
    //var date0=date1.getDate();
    var date2 = new Date();
    date2.setDate(100);/*设置倒计时的终点*/
    date2.setHours(0);
    date2.setMinutes(0);
    date2.setSeconds(0);
    var time = (date2.getTime() - date1.getTime()); /*算出倒计时的总时间时间*/
    var bj = document.getElementById("bj");
    var h=time%(24*60*60*1000);
    var m=h%(60*60*1000);
    var s=m%(60*1000);
    var second =parseInt(s / 1000);
    var minute = parseInt(m /60/1000);
    var hour = parseInt(h / 60/60/1000);
    var day = parseInt(time/24/60/60/1000);
    var date3 = new Date(time);						 /*获取现在的时间差，时间为国际时间*/

    //bj.innerHTML =day + "天" + hour + "时" + minute + "分" + second + "秒";

    //day
    if(day<10){
        $('span.day1').text('0');
        $('span.day2').text(day);
    }else{
        $('span.day1').text(parseInt(day/10));
        $('span.day2').text(day%10);
    }
    //hour
    if(hour<10){
        $('span.hour1').text('0');
        $('span.hour2').text(hour);
    }else{
        $('span.hour1').text(parseInt(hour/10));
        $('span.hour2').text(hour%10);
    }
    //minute
    if(minute<10){
        $('span.min1').text('0');
        $('span.min2').text(minute);
    }else{
        $('span.min1').text(parseInt(minute/10));
        $('span.min2').text(minute%10);
    }
    //second
    if(second<10){
        $('span.sec1').text('0');
        $('span.sec2').text(second);
    }else{
        $('span.sec1').text(parseInt(second/10));
        $('span.sec2').text(second%10);
    }
}
time();
setInterval(time, 1000);