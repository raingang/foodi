(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';window.onload = function () {
    var searchOn = document.getElementById('search-button'),
    searchExit = document.getElementById('back-home'),
    menuOn = document.getElementById('menu-button'),
    menuExit = document.getElementById('menu-exit');


    searchOn.onclick = function (event) {
        var searchPage = document.getElementById('search-page');
        searchPage.style.visibility = 'visible';
        return false;
    };


    searchExit.onclick = function (event) {
        var searchPage = document.getElementById('search-page');
        searchPage.style.visibility = 'hidden';
        return false;
    };



    menuOn.onclick = function (event) {
        var menu = document.getElementById('menu-page');
        menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
        return false;
    };


    menuExit.onclick = function (event) {
        var menu = document.getElementById('menu-page');
        menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
        return false;
    };
};

},{}]},{},[1]);
