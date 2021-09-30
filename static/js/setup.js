document.addEventListener('DOMContentLoaded', function() {
    /*
        When the document has been loaded:
            sets up teh listeners
    */
        "use strict"
        setUpListeners();
        setUpUI();
    })

    function setUpListeners() {
        "use strict"
        // adds the event listeners that are required
        getElement("ButtonReset").addEventListener('click',function() {setUpUI();});
        getElement("ButtonAdd").addEventListener('click',function() {addCityToList(getElement("selectTown").value);});
        getElement("ButtonRemove").addEventListener('click',function() {removeCityFromList(getElement("selectedListItem"));});
        getElement("buttonSave").addEventListener('click',function() {saveTrip();});
        getElement("buttonLoad").addEventListener('click',function() {loadTrip();});
        getElement("distanceCal").addEventListener('click',function() {calculateDistance();});
        getElement("navQuit").addEventListener('click',function() {quit();});
        // Listener for an item being slected in teh list
        getElement("travel_list").addEventListener('click',function(event) {selectListItem(event.target)});
    }
    
    function setUpUI() {
        // Clear teh input values
        // Clear the visit information
        getElement("fuelPrice").value = null;
        currentTravel = []
        // Clear teh product purchased list
        getElement("travel_list").value = "";
        writeToElement("travel_list","");
    }
    /*getElement("buttonload").addEventListener('click',function() {loadTrip()});*/