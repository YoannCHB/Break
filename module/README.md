# Break - v2.1 - Module

# How to Use:
-------------------------------------------------
- [X] You need to install XMLHttpRequest with:
```js
npm install xmlhttprequest
```
- [X] Install my module with:
```js
var mod = require('./break.mod.js');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
```


Exemple:
-------------------------------------------------
```js
var mod = require('./break.mod.js');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var req = new mod.BreakRequest("https://echo.websocket.org"); //BREAK AUTOMATICALLY SET THE URL ON 'wss://echo.websocket.org'
req.on('message', function(msg){
  console.log(msg.data);
});
req.on('error', function(e){
  console.error(e);
});
req.on('close', function(e){
  console.warn("Server closed ! : "+e);
});
req.on('open', function(response){
	if(response){
		console.info(response); //JSON
	}
	req.send('Connection effectued');
});
//req.listen(3000);
req.connect();
```
