
* <script src="break.js">
* <script src="break.min.js">
	
Exemple:
-------------------------------------------------
```js
var req = new BreakRequest("https://echo.websocket.org"); //BREAK AUTOMATICALLY SET THE URL ON 'wss://echo.websocket.org'
//req.responseType = "json";
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

# How to Use:

Define the variable without launching the query:

```js
var request = new BreakRequest("url");
request.on(type, function(){}); //SEE 'https://github.com/YoannCHB/Break#support--all'
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

Launch the connection:

```js
request.connect("new url || auto setup to the default url");
```

## Extensions:

```js
req.type //RETRUN THE TYPE OF REQUEST USED
req.json //RETURN THE RESPONSE IN JSON 
req.url //RETURN THE URL
req.response //RETURN THE RESPONSE
req.send //SEND MATHOD OR POST METHOD
req.connected //RETURN THE STATUS
req.error //RETURN THE STATUS
req.correctURL //RETURN CORRIGED URL
req.listen //FUNCTION TO SET A PORT (example: https://localhost:3000)
req.method //ALWAYS RETURN 'GET'
req.responseType //SET THE RESPONSE TYPE
req.headerMap //GET ALL THE HEADERS
req.writeHead //SET THE HEADERS
req.ext //SET THE EXTENSION - FOR EXAMPLE "www.google.com" --> req.ext('com');
```
