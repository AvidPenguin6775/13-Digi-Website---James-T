/*	File:			dom_interface_functions.js
	Author:			Alister Macgregor
	Last update:	19 August 2021
	Purpose:		Interface functions for teh pub_rater application
*/

function addCityToList(itemPurchased) {
	// Adds the new purchse to the list 
	// No error checking to see if teh purchase is already there
	// or a blank being added
	let newItem = document.createElement("LI");	// A new list item
	let newItemText = document.createTextNode(itemPurchased);	// The text for teh list item
	// Add teh text to the list item
	newItem.appendChild(newItemText);
	// Add the new list item to the list
	getElement("travel_list").appendChild(newItem);	
}

function removeCityFromList(itemToRemove) {
	// Removes teh item from teh list, if there is one to remove
	if (itemToRemove != null) {
		itemToRemove.parentNode.removeChild(itemToRemove)
	}
}

function selectListItem(selectedListItem) {
	// Sets teh id of teh currently chosen list item so that styles can be applied to it
	// Unselect previous selection
	currentSelected = getElement("selectedListItem");
    if (currentSelected != null) {
		currentSelected.id = "";
		currentSelected.classList.remove("selected");
	}
	// Select teh current one - how it shows is set in CSS
	selectedListItem.id = "selectedListItem";
	selectedListItem.classList.add("selected");
}

function saveVisit() {
	alert("Your travel list has been saved.  Honest.");
}


