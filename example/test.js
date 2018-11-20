/*PARTIE TEST*/
//XMLHttpRequest

var test = new Request("https://fr.wikipedia.org/w/api.php?%20action=opensearch&format=json&origin=*&profile=normal&search=Victor%20Hugo");
test.on('open', function(res){
    test.send('salut');
});
test.connect();


//ERREUR
var g = new Request('http://www.google.com');
g.on('error', function(){
    console.log('Error for g');
});
g.connect();

//WEBSOCKET
var web = new Request('https://echo.websocket.org');
web.on('message', function(msg){
    console.log(msg.data);
});
web.on('open', function(res){
    web.send('salut');
});
web.connect();

//ERREUR 2
var er = new Request("ZBHD");
er.connect();