//This documant was refactored to include missing commas
function addCityToList(TownSelected) {
	// Removes the last thing in the array
	currentTravel.pop();
	// Adds the town to the array
	currentTravel.push(TownSelected);
	// A new list item
	let newItem = document.createElement("LI");
	// The text for the list item
	let newItemText = document.createTextNode(TownSelected);
	// Adds the text to the list
	newItem.appendChild(newItemText);
	// Adds the new list item to the list
	getElement("travel_list").appendChild(newItem);
	// Gets the first town in the array
	returntrip = currentTravel[0];
	// Adds it town to the array
	currentTravel.push(returntrip);
	//Disables Testing
	testing = false;
	// Starts the caclulate distance function
	calculateDistance();
}

function removeCityFromList(TownToRemove) {
	// Makes sure town to remove is not equal to empty 
	if(TownToRemove != null){
		// gets the list item to remove
		listItemToRemove = getElement("selectedListItem");
		// finds the number of the selected list ite  m 
		index = [].indexOf.call (listItemToRemove.parentNode.children, listItemToRemove);
		// Removes it from list 
		TownToRemove.parentNode.removeChild(TownToRemove);
		// Removes the specific town from the array
		currentTravel.splice(index, 1);
		// Starts the calculate distance function
		calculateDistance();
		}
}

function selectListItem(selectedListItem) {
	// Sets the id of the currently chosen list item so that styles can be applied to it
	// Unselects the list item, by removing the id
	currentSelected = getElement("selectedListItem");
    if (currentSelected != null) {
		currentSelected.id = "";
		currentSelected.classList.remove("selected");
	}
	// Selects the current selected and adds a class so CSS can work on it & the id
	selectedListItem.id = "selectedListItem";
	selectedListItem.classList.add("selected");
}

function saveTrip(){
	// Turns the array into a string
    tripList = JSON.stringify(currentTravel);
	// Sends the string to the local storage of the browser.
    localStorage.setItem("List", tripList);
	// Alerts them that they have saved
	alert("Your travel list has been saved");
}
function loadTrip(){
	// Gets the array string from local storage
	testing = false;
	storedTrip = localStorage.getItem("List");
	// Unstringifys the stored array
	storedTripPlaces = JSON.parse(storedTrip);
	// Sets the main array to the stored array
	currentTravel = storedTripPlaces;
	// Calculates distance
	calculateDistance();
	// The loop array count tracker
    ArrayNum = 0;
	// Clears list
	getElement("travel_list").value = "";
	// Only does it the number of times equal to the length of stored array
    while (ArrayNum < storedTripPlaces.length){
		// Cycles through the towns in the stored array
		loadedTown = storedTripPlaces[ArrayNum];
		// Array Number +1 every pass
		ArrayNum = ArrayNum + 1;
		// Gets travel list and creates li element
		var list = document.getElementById('travel_list');
		var entry = document.createElement('li');
		// Creates a text node of the town
		entry.appendChild(document.createTextNode(loadedTown));
		// Adds it to the list
		list.appendChild(entry);
	}
	currentTravel.pop();
	// Gets the first town in the array
	startTown = currentTravel[0];
	// Adds it town to the array
	currentTravel.push(startTown);
}

function quit() {
	// Closes browser window
	window.close();
}
