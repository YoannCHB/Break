# Break - beta (in build)
BREAK IS AN APPLICATION TO MAKE AUTOMATICALLY A REQUEST ON A SERVER AND AUTOMATICALLY SETUP THE URL ON ERROR (http to ws) !
-----------------

#<img alt="Break" title="Break" src="img/break.png"/>

# Support - XMLHttpRequest:
* Send
* POST
* GET

# Support - WebSocket:
* CONNECTION
* SEND
* MESSAGES

# Break.On:
* Mesage
* Open
* Close
* Error

Command:
---------------------------------------------------------------------
* .type
* .json
* .url, 
* .response
* .send
* .connected
* .error

Exemple:
-------------------------------------------------
```js
var req = new Request("https://echo.websocket.org");
req.on('message', function(msg){
  console.log(msg);
});
req.on('error', function(e){
  console.error(e);
})
req.on('close', function(){
  console.info("Server closed !");
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
request.on(type, function(){});
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
