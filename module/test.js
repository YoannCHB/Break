console.log(require('./break.mod.js'));
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var t = require('./break.mod.js');
var req = new t.BreakRequest("https://echo.websocket.org");
req.on('message', function(msg){
    console.log(msg.data);
});
req.on('error', function(e){
    console.error(e);
})
req.on('close', function(e){
    console.warn("Server closed ! : "+e);
});
req.on('open', function(response){
    if(response){
        console.info(response); //JSON
    }
    console.log("Connected: "+req.connected+" to "+req.correctURL);
    req.send('Connection effectued');
});
//req.listen(3000);
req.connect();