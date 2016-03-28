/**
 * Created by lukaijie on 16/3/28.
 */
var redis = require('redis');
/*
 连接redis数据库，createClient(port,host,options);
 如果REDIS在本机，端口又是默认，直接写createClient()即可
 redis.createClient() = redis.createClient(6379, '127.0.0.1', {})
 */
var client = redis.createClient(6379, '127.0.0.1', {});

client.on("error", function (err) {
    console.log("Error " + err);
});


//client.set("string key", "string val", redis.print);//set "string key" "string val"
/*
 redis.print，回调函数，将redis的返回值显示出来。上一句执行结果，将返回“OK”
 */
//client.hset("hash key", "hashtest 1", "some value1", redis.print);
//client.hset(["hash key", "hashtest 2", "some other value2"], redis.print);
//遍历哈希表"hash key"
//client.hkeys("hash key", function (err, replies) {
//    console.log(replies.length + " replies:");
//    replies.forEach(function (reply, i) {
//        console.log("    " + i + ": " + reply);
//    });
//    client.hget("hash key", "hashtest 1", redis.print);
//    client.quit();
//});

exports.client = client;