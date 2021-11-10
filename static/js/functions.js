/*	File:			extension_functions.js
	Author:			Alister Macgregor
	Last update:	19 August 2021
	Purpose:		Generic constants and functions
*/
// This documant was refactored to include extra semi-colons
//constants which may be used for output
const BLANK = "";
const SPACE = "&nbsp;";
const TAB = SPACE.repeat(3);
const NEWLINE = "<br/>";

function getElement(elementId) {
	"use strict";
// Finds an element on teh page
	return document.getElementById(elementId);
}

function writeToElement(elementID,newText) {
// Writes a section of text inside an element
    "use strict";
    getElement(elementID).innerHTML = newText;
}

function readFromElement(elementID) {
// Reads data from element
	"use strict";
	return (getElement(elementID).value);
}


