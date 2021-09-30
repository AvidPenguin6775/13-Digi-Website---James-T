/*	File:			dom_interface_functions.js
	Author:			Alister Macgregor
	Last update:	19 August 2021
	Purpose:		Interface functions for teh pub_rater application
*/

function addCityToList(TownSelected) {
	// Adds the new purchse to the list 
	// No error checking to see if teh purchase is already there
	// or a blank being added
	currentTravel.push(TownSelected)
	console.log(currentTravel)
	let newItem = document.createElement("LI");	// A new list item
	let newItemText = document.createTextNode(TownSelected);	// The text for teh list item
	// Add teh text to the list item
	newItem.appendChild(newItemText);
	// Add the new list item to the list
	getElement("travel_list").appendChild(newItem);	
	calculateDistance()
}

function removeCityFromList(TownToRemove) {
	// Removes teh item from teh list, if there is one to remove
	travelList = getElement("travel_list")
	console.log(travelList)
	Cheese = 0
	Cheese = travelList.indexOf(getElement("selectedListItem"))
	console.log(Cheese)
	if (itemToRemove != null) {
		itemToRemove.parentNode.removeChild(TownToRemove)
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

function saveTrip(){
    tripList = JSON.stringify(currentTravel)
    localStorage.setItem("List", tripList)
	alert("Your travel list has been saved.  Honest.");
}
function loadTrip(){
	storedTrip = localStorage.getItem("List")
	storedTripPlaces = JSON.parse(storedTrip)
	currentTravel = storedTripPlaces
	calculateDistance()
	loadNumber = 0
    ArrayNum = 0
	getElement("travel_list").value = "";
    while (loadNumber < storedTripPlaces.length){
    loadedTown = storedTripPlaces[ArrayNum]
    loadNumber = loadNumber + 1
    ArrayNum = ArrayNum + 1
	var list = document.getElementById('travel_list');
	var entry = document.createElement('li');
	entry.appendChild(document.createTextNode(loadedTown));
	list.appendChild(entry);
	}
}

function quit() {
	window.close();
}
