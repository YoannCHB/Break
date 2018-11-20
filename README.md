# Break
BREAK IS AN APPLICATION TO MAKE AUTOMATICALLY A REQUEST ON A SERVER !
#<img alt="Break" title="Break" src="img/break.png"/>
Ne fonctionne pas sur Visual Studio !

# Support - XMLHttpRequest:
> send, post, get.

# Support - WebSocket:
> messages, send, connection.

# Use:

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

# On:
> message, open, close, error

Send:
```js
request.on('open', function(response){
  request.send("I m connected');
});
```
