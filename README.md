# Break - v2.1

Support me :) https://paypal.me/pools/c/89QrGuFsVk;

[![npm](https://img.shields.io/npm/v/anticore.svg?style=plastic)](https://github.com/YoannCHB/Break/tree/gh-pages/module)
[![Download](https://img.shields.io/chocolatey/dt/scriptcs.svg?style=plastic)](https://github.com/YoannCHB/Break/blob/gh-pages/break.js)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://fr.wikipedia.org/wiki/JavaScript)

#<img alt="Break" title="Break" src="img/break.png"/>

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

## Tools:
* [[API]](https://github.com/YoannCHB/Break/blob/master/doc/api.md)
* [[EXAMPLE]](https://yoannchb.github.io/Break/)
