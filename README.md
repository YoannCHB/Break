# Break - v1.0

[![npm](https://img.shields.io/npm/v/anticore.svg?style=plastic)]()
[![Download](https://img.shields.io/chocolatey/dt/scriptcs.svg?style=plastic)](https://github.com/YoannCHB/Break/blob/master/break.js)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

#<img alt="Break" title="Break" src="img/break.png"/>

## Why you need to use "Break" ?

Break allows you to easily create any type of request to a server. But not only ! It automatically corrects the urls in case of problems and will come to define itself automatically: the url, the type of request and the type of send. Break also allows response backup as well as a responseJSON if possible. Finally, it automatically detects and manages any type of error and sends it back to you in case of problems!
* We can say that Break fully manages your requests and any type of response from the server.

## What is new in v1 ?

* New system of correction in the URL look at the [[API]](https://github.com/YoannCHB/Break/blob/master/doc/api.md)
* Request become BreakRequest
* New support: Port
* New Command: element.correctURL, element.listen
* New auto: support document.location.href
* Bug setting
* Readme update

# Support - XMLHttpRequest:
* Send
* POST
* GET
* PORT

# Support - WebSocket:
* CONNECTION
* SEND
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

## Tools:
* [[API]](https://github.com/YoannCHB/Break/blob/master/doc/api.md)
* [[EXAMPLE]](https://yoannchb.github.io/Break/)
