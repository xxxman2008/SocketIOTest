/**
 * Created by qdhiyoadmin on 2014/8/8.
 */



function cloneObj(srcObj) {
    var dstObj = {};
    for (var prop in srcObj){
        dstObj[prop] = srcObj[prop];
    }
    return dstObj
}

function Log(obj) {
    var util = require('util');
    var errLogopt = { showHidden: false, depth: null };
    console.log(util.inspect(obj, errLogopt));
}

var io = require('socket.io')();
io.on('connection', function(socket){
    Log(socket);
});
io.listen(30000);




//var io = require('socket.io').listen(30000);
//
//io.on('connection', function (socket) {
//    Log(socket);
//    io.emit('news', { will: 'be received by everyone'});
//
//    socket.on('private message', function (from, msg) {
//        console.log('I received a private message by ', from, ' saying ', msg);
//    });
//
//    socket.on('disconnect', function () {
//        io.sockets.emit('user disconnected');
//    });
//});
