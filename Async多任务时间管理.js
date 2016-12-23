/**
 * Created by jiajiangyi on 2016/12/6.
 */
"use strict";
var moment = require('moment'),
    twix = require('twix'),
    async = require('async'),
    express = require('express'),
    app = express();

//判断程序启动时间
function isTime(){
    var hms = 'HHmmss';
    //noinspection JSUnresolvedFunction
    return moment("160500",hms).twix(moment("170000",hms)).contains(moment());//判断时间是否在此区间内16:05:00-17:00:00
}

//打印日志
if(isTime()){
    console.log("===============Working time===================");
}

//日志时间格式化
function now() {
    return moment().format("HH:mm:ss");
}

//全局变量G
var G = 0;

//模拟程序A
function A() {
    console.log(now() + " A(s1)=> {G:" + (G++) + "} Cache G");
}

//模拟程序B
function B() {
    console.log(now() + " B(s10)=> {B:10} TO client");
}

//模拟程序C
function C() {
    console.log(now() + " C(s5)=> {G:" + (G / 5) + "} TO client");
    G = 0;
}


var arr = [
    {fun:A,delay:1000,test:isTime},
    {fun:B,delay:10*1000,test:isTime},
    {fun:C,delay:5*1000,test:isTime}
];


async.each(arr,(item,callback)=>{
    async.whilst(item.test,(cb)=>{
        item.fun();
        setTimeout(cb,item.delay);
    },(err)=>{
        console.log("Not working time!");
        // callback("Not working");
    });

},(err)=>{
    console.log("err:",err);
});



