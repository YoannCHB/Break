/*
 * Break.js
 * website --> Comming soon
 * Version: beta - 0.1
 *
 * Copyright Yoann Charbonnier
 * Released under license
 * https://github.com/YoannCHB/Break/break.js
*/

const auto_url = function(u){
    try {
        let url = new window.URL(u);
        let s = Boolean(url);
        return s;
    }
    catch(e){
        return false;
    }
}

class BricksRequest{
    constructor(url){
        this.type = null;
        this.method = 'GET';
        this.url = url;
        this.connected = false;
        this.error = false;
        this.proto1 = new XMLHttpRequest();
        this.proto2 = null;
        this.proto3 = null;
        this.json = null;
        this.response = null;
        this.correctURL = false;
        this.f = {};
        this.send = null;
    }
}

Request.prototype.listen = function(p){
    this.url += ":"+p;
}

const auto_proto3 = function(el, url){
    if(el.f.error){
        el.f.error();
    }
    el.error = true;
    el.send = false;
}

const auto_proto2 = function(el, url){
    let test = url.indexOf('http');
    if(test == -1){
        try {
        el.proto2 = new WebSocket(url);
    }
    catch(e){
        auto_proto3(el, url);
        return '';
    }
    } else {
        url = url.replace('https', "wss") != url ? url.replace('https', "wss") : url.replace('http', 'ws');
        try {
        el.proto2 = new WebSocket(url);
        }
        catch(e){
            auto_proto3(el, url);
            return "";
        }
    }
    el.proto2.onerror = function(e){
        //console.log(e);
        el.send = false;
        auto_proto3(el, url);
    }
    el.proto2.onopen = function(){
        el.type = ['WebSocket']
        el.connected = true;
        el.response = false;
        el.json = false;
        el.correctURL = url;
        el.send = function(text){
            this.proto2.send(text);
        }
        if(el.f.open){
            el.f.open(el.proto2);
        }
    }
    el.proto2.onmessage = function(e){
        if(el.f.message){
            el.f.message(e);
        }
    }
    el.proto2.onclose = function(e){
        if(el.f.close){
            el.f.close(e);
        }
        el.send = false;
        console.warn('Server closed');
    }
}

Request.prototype.connect = function(url){
    let element = this;
    url = url || this.url;
    if(!auto_url(url)){
        url = document.location.href+url;
        if(!auto_url(url)){
            console.error('INVALID URL: '+element.url);
            return false;
        }
    }
    this.proto1.open('GET', url);
    this.proto1.onerror = function(e){
        //console.error(e);
        element.send = false;
        auto_proto2(element, url);
    }
    this.proto1.onload = function(){
        element.type = ["XMLHttpRequest", 'GET', element.responseType];
        element.connected = true;
        element.coorectURL = url;
        element.response = element.proto1.response;
        element.send = function(text){
            let req = new XMLHttpRequest();
            req.open('POST', this.url);
            req.onerror = function(e){
                console.warn(e);
            }
            req.send(text);
        }
        let j = JSON.parse(element.proto1.response);
        if(j){
            element.json = j;
        }
        if(element.f.open){
            element.f.open(element.proto1.response);
        } else {
            //console.info(element.proto1.response);
        }
    }
    this.proto1.send();
}

Request.prototype.on = function(p, call){
    try{
        p = p.toLowerCase();
    }
    catch(e){
        p = p;
    }
   switch(p){
       case "message":
       this.f.message = call;
       break;

       case "open":
       this.f.open = call;
       break;

       case "close":
       this.f.close = call;
       break;

       case "error":
       this.f.error = call;
       break;

       default:
       console.error('Invalide parameter: '+p);
   }
}
