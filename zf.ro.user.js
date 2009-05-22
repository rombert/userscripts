
// ZF.ro
// version 0.1
// 2009-05-22
// Copyright (c) 2009 Robert Munteanu
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// ==UserScript==
// @name          Make zf.ro readable
// @namespace     http://dev.lmn.ro/
// @description   change style zf.ro
// @include       http://zf.ro/*
// @include       http://*.zf.ro/*
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
'div#articlecontent {' +
'  font-size: 14px ! important;' +
'  font-weight: normal ! important;' +
'}'
);

addGlobalStyle(
'div#articlecontent br {' +
'  margin-bottom: 1em ! important;' +
'}'
);

