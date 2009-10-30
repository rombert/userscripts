
// bugs.sun.com
// version 0.1
// 2009-10-30
// Copyright (c) 2009 Robert Munteanu
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// ==UserScript==
// @name          Make bugs.sun.com readable
// @namespace     http://dev.lmn.ro/
// @description   change style bugs.sun.com
// @include       http://bugs.sun.com/*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(
'pre {' +
'  color: black ! important;' +
'  font-family: "Courier New" ! important;' +
'}'
);

