/**
 * Created by jiajiangyi on 2016/12/6.
 */

var async = require('async');

var arr = [{name: 'Jack', delay: 200},
    {name: 'Mike', delay: 100},
    {name: 'Freewind', delay: 300}];

/**
 * 一个个按顺序执行。
 */
async.eachSeries(arr, (item, callback) => {
    console.log("name:", item.name);
    setTimeout(() => {
        if(item.name=='Mike'){
            callback(item.name);//如果中途出错，则马上把错误传给最终的callback，还未执行的不再执行。
        }else{
            callback(null, item.name);//null表示无错误
        }
    }, item.delay);
}, (err) => {
    console.log("err:", err);
});









