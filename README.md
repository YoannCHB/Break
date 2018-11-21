# Break - beta (in build)

> v 1.0 the 21/11/2018

[![npm](https://img.shields.io/npm/v/anticore.svg?style=plastic)]()
[![Download](https://img.shields.io/chocolatey/dt/scriptcs.svg?style=plastic)](https://github.com/YoannCHB/Break/break.js)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

#<img alt="Break" title="Break" src="img/break.png"/>

## Why you need to use "Break" ?

Break allows you to easily create any type of request to a server. But not only ! It automatically corrects the urls in case of problems and will come to define itself automatically: the url, the type of request and the type of send. Break also allows response backup as well as a responseJSON if possible. Finally, it automatically detects and manages any type of error and sends it back to you in case of problems!
* We can say that Break fully manages your requests and any type of response from the server.

# Support - XMLHttpRequest:
* Send
* POST
* GET

# Support - WebSocket:
* CONNECTION
* SEND
* MESSAGES

# Support- All:
* Mesage
* Open
* Close
* Error

Command:
---------------------------------------------------------------------
* element.type
* element.json
* element.url, 
* element.response
* element.send
* element.connected
* element.error

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
  console.info(response); //JSON
  req.send('Connection effectued');
})
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
