/**
 * Created by jiajiangyi on 2016/12/6.
 */
"use strict";
var schedule = require('node-schedule');
var moment = require('moment');


function hello() {
    console.log(now(), "hello world");
}

//日志时间格式化
function now() {
    return moment().format("YYYY-MM-DD HH:mm:ss");
}


//确定时间，例如：2016年12月23日，16:30:10执行一次
var date = new Date(2016, 11, 23, 16, 30, 10);
schedule.scheduleJob(date, function(){
    console.log(date);
    hello();
});




//每5s执行一次代码
/*
var rule2 = new schedule.RecurrenceRule();
var times2 = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];
rule2.second = times2;
var job2 = schedule.scheduleJob(rule2, function () {
  //  hello();
});
//job2.cancel();//取消任务
*/


//秒、分、时、日、月、周几
// var strDate = "30 * * * * *";//每分钟的第30s执行一次
var strDate = "1-10 * * * * *";//每分钟的第1-10秒执行
// var strDate = "0 0 9 * 12 1";//12月份每周周一9:00:00执行
// var strDate = "0 30 10 * 12 *";//12月份每天10:30:00执行
// var strDate = "0 30 16 23 12 *";// 12-23 16:30:00执行

function scheduleCronstyle() {
    schedule.scheduleJob(strDate, function () {
        hello();
    });
}
scheduleCronstyle();







