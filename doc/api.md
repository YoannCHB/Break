
* <script src="break.js">
* <script src="break.min.js">
	
Exemple:
-------------------------------------------------
```js
var req = new Request("https://echo.websocket.org"); //BREAK AUTOMATICALLY SET THE URL ON 'wss://echo.websocket.org'
req.on('message', function(msg){
  console.log(msg.data);
});
req.on('error', function(e){
  console.error(e);
})
req.on('close', function(e){
  console.warn("Server closed ! : "+e);
})
req.on('open', function(response){
	if(response){
		console.info(response); //JSON
	}
	req.send('Connection effectued');
})
req.connect();
```

# How to Use:

Define the variable without launching the query:

```js
var request = new Request();
request.on(type, function(){}); //SEE 'https://github.com/YoannCHB/Break/blob/master/README.md#command'
```

Launch the connection:

```js
request.connect("new url || auto setup to the default url");
```

How to know if the connection is ok ?

```js
request.on('open', function(response){
  console.log(response);
});
```
Send:
```js
request.on('open', function(response){
  request.send("I m connected");
});
```
