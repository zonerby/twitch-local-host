// ==UserScript==
// @name         twitch-local-host
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include         *://*.twitch.tv/*
// @grant       none
// @run-at      document-body
// ==/UserScript==

(function() {
    'use strict';
    var script = document.createElement('script');
    script.id = 'local-host';
    script.type = 'text/javascript';
    script.src = "https://cdn.jsdelivr.net/gh/zonerby/twitch-local-host/localhost.js";
    document.head.appendChild(script);

    var style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = "https://cdn.jsdelivr.net/gh/zonerby/twitch-local-host/style.css";
    document.head.appendChild(style);
})();
