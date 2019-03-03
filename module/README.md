# Break - v2.1 - Module

- All bug patched.
- Older versions no longer work

```js
npm install breakrequest
npm install w3c-xmlhttprequest
```

## Why you need to use "Break" ?

Break allows you to easily create any type of request to a server. But not only ! It automatically corrects the urls in case of problems and will come to define itself automatically: the url, the type of request and the type of send. Break also allows response backup as well as a responseJSON if possible. Finally, it automatically detects and manages any type of error and sends it back to you in case of problems!
* We can say that Break fully manages your requests and any type of response from the server.

## What is new in v2.1?

- [x] You can now get and set the headers
- [x] You can set the responseType
- [x] Two new system of correction in the URL look at the [[API]](https://github.com/YoannCHB/Break/blob/master/doc/api.md)
- [x] Request become BreakRequest
- [x] break.min.js is here !
- [x] Support port (listen) finish !
- [x] New Command: element.correctURL, element.listen
- [x] Bug setting
- [x] Readme update
- [x] API update
- [X] Module added (beta)

# Support - XMLHttpRequest:
* SetRequestHeader
* getAllResponseHeader
* Send
* POST
* GET
* PORT

# Support - WebSocket:
* CONNECTION
* SEND
* MESSAGES
* PORT

# Support - EventSource:
* CONNECTION
* MESSAGES
* PORT

# Support- All:
* Mesage
* Open
* Close
* Error

Command:
---------------------------------------------------------------------
* element.type
* element.json
* element.url
* element.response
* element.send
* element.connected
* element.error
* element.correctURL
* element.listen
* element.method
* element.responseType
* element.writeHead
* element.headerMap
* element.request
* element.loop
* element.ext

How to use:
-------------------------------------------------
- [X] You need to install XMLHttpRequest with:
```js
npm install xmlhttprequest
```
- [X] Install my module with:
```js
var mod = require('breakrequest');
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;
```


Exemple:
-------------------------------------------------
```js
var mod = require('breakrequest');
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;
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

# USE:

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