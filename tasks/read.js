
var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var debug = require('debug')('crawl:read');
exports.moves = function(url,callback){
    request({url,encoding:null},function(err,response,body){
        body = iconv.decode(body,'gbk');
        var $ = cheerio.load(body);
        var movies = [];
        $('.keyword .list-title').each(function (){
            var $me = $(this);
            var movie = {
                name:$me.text(),
                url:$me.attr('href')
            };
            debug(`∂¡µΩµÁ”∞:${movie.name}`);
            movies.push(movie);
        });
        callback(null,movies);
    })
};
//exports.moves('http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',function(err,movies){
//    console.log(movies);
//});