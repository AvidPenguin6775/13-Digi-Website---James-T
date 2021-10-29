document.addEventListener('DOMContentLoaded', function() {
    /*
        When the document has been loaded:
            sets up the listeners 
    */
        "use strict"
        setUpListeners();
        setUpUI();
    })

    function setUpListeners() {
        "use strict"
        // adds the event listeners that trigger functions when they are clicked
        //Reset
        getElement("ButtonReset").addEventListener('click',function() {setUpUI();});
        //Add
        getElement("ButtonAdd").addEventListener('click',function() {addCityToList(getElement("selectTown").value);});
        //Remove
        getElement("ButtonRemove").addEventListener('click',function() {removeCityFromList(getElement("selectedListItem"));});
        //Save
        getElement("buttonSave").addEventListener('click',function() {saveTrip();});
        //Load
        getElement("buttonLoad").addEventListener('click',function() {loadTrip();});
        //Distance Calculation
        getElement("distanceCal").addEventListener('click',function() {calculateDistance();});
        //Quit
        getElement("navQuit").addEventListener('click',function() {quit();});
        // Listener that when a List item is clicked a selected class is added
        getElement("travel_list").addEventListener('click',function(event) {selectListItem(event.target)});
    }
    
    function setUpUI() {
        // Resets fuelPrice
        getElement("fuelPrice").value = null;
        // Clears Array
        currentTravel = []
        // Clears travel list to empty
        getElement("travel_list").value = "";
        writeToElement("travel_list","");
    }