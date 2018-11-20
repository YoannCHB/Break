# Break
BREAK IS AN APPLICATION TO MAKE AUTOMATICALLY A REQUEST ON A SERVER AND AUTOMATICALLY SETUP THE URL ON ERROR (http to ws) !
#<img alt="Break" title="Break" src="img/break.png"/>
Ne fonctionne pas sur Visual Studio !

# Support - XMLHttpRequest:
> send, post, get.

# Support - WebSocket:
> messages, send, connection.

# Break.On:
> message, open, close, error

# How to Use:

Define the variable without launching the query:

```js
var request = new Request();
request.on(type, function(){});
```

Launch the connection:

```js
request.connect(new url || auto setup to the default url);
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
