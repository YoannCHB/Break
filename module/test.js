console.log(require('./break.mod.js'));
var XMLHttpRequest = require("w3c-xmlhttprequest").XMLHttpRequest;
var t = require('./break.mod.js');
var req = new t.BreakRequest("https://fr.wikipedia.org/w/api.php?%20action=opensearch&format=json&origin=*&profile=normal&search=Victor Hugo");
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
    console.log(response)
    if(response){
        console.info(response); //JSON
    }
    console.log("Connected: "+req.connected+" to "+req.correctURL);
    req.send('Connection effectued');
});
//req.listen(3000);
req.connect();