var read = require('./read').moves;
var write = require('./write').moves;
var async = require('async');
var debug = require('debug')('crawl:main');
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
var Movie = require('../model').Movie;
async.waterfall([
    function(callback){
       Movie.remove({},callback);
    },
    function(data,callback){
        read(url,callback);
    },
    function(movies,callback){
        write(movies,callback);
    }
],function(err,result){
    debug('ok');
});