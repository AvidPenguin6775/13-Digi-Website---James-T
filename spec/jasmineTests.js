//This documant was refactored to include extra semi-colons
//Jasmine Tests
describe("Javascript working correctly", function() {
	//Resets the looping value
	i = 0;
	//Enables testing
	testing = true;
	//Clears Array
	currentTravel = [];
	//Repeat until i is larger than 10
	while(i < 10){
		// Sets loop value 
		a = 0;
		//When traveling from Same town to same town equals 0 distance
		it("When traveling from the same town to the same town distance should be Zero " + i, function(){
			//Sets town
			town = townsList[a];
			//Sets array to town, town 
			currentTravel = [town,town];
			//Testing if function produces 0 after running
			expect(calculateDistance()).toEqual(0);
			//Clears array
			currentTravel = [];
		});
		//Going from Alexandra to a town and back equals the correct distance
		it("Traveling from Alexandra to town and back to Alexandra works " + i, function(){
			//Sets town to a town from townlist
			town = townsList[a];
			//Sets Array to travel from Alexandra to town and then back
			currentTravel = ["Alexandra",town,"Alexandra"];
			//Runs function and expects it produces the correct distance.
			expect(calculateDistance()).toEqual(distances[0][a] * 2);
			//Clears array
			currentTravel = [];
		});
		//Going from Dunedin to a town and back equals the correct distance
		it("Traveling from Dunedin to town and back to Dunedin works " + i, function(){
			//Sets town to a town from townlist
			town = townsList[a];
			//Sets Array to travel from Dunedin to town and then back
			currentTravel = ["Dunedin",town,"Dunedin"];
			//Runs function and expects it produces the correct distance.
			expect(calculateDistance()).toEqual(distances[5][a] * 2);
			//Clears array
			currentTravel = [];
		});
		//Going from Hasst to a town and back equals the correct distance
		it("Traveling from Hasst to town and back to Hasst works " + i, function(){
			//Sets town to a town from townlist
			town = townsList[a];
			//Sets Array to travel from Haast to town and then back
			currentTravel = ["Haast",town,"Haast"];
			//Runs function and expects it produces the correct distance.
			expect(calculateDistance()).toEqual(distances[10][a] * 2);
			//Clears array
			currentTravel = [];
		});
		//Going from Mount-cook to a town and back equals the correct distance
		it("Traveling from Mount-Cook to town and back to Mount-Cook works " + i, function(){
			//Sets town to a town from townlist
			town = townsList[a];
			//Sets Array to travel from Mount-Cook to town and then back
			currentTravel = ["Mount-Cook",town,"Mount-Cook"];
			//Runs function and expects it produces the correct distance.
			expect(calculateDistance()).toEqual(distances[15][a] * 2);
			//Clears array
			currentTravel = [];
		});
		//Going from Queenstown to a town and back equals the correct distance
		it("Traveling from Queenstown to town and back to Queenstown works " + i, function(){
			//Sets town to a town from townlist
			town = townsList[a];
			//Sets Array to travel from Queenstown to town and then back
			currentTravel = ["Queenstown",town,"Queenstown"];
			//Runs function and expects it produces the correct distance.
			expect(calculateDistance()).toEqual(distances[20][a] * 2);
			//Clears array
			currentTravel = [];
		});
		//Tests fuel price with random towns
		it("Fuel price tests " + i, function(){
			//Sets A & B to random towns
			a = Math.round(Math.random(26)*25);
			b = Math.round(Math.random(26)*25);
			//Sets town & townB to random numbers
			town = townsList[a];
			townB = townsList[b];
			//sets the total distance to a testing distance between two towns and back
			totalDistance = (distances[b][a] * 2);
			//sets price and efficiency for testing
			efficiency = 9.4;
			price = 2.616;
			//Runs the fuel function and tests if it equals the correct price
			expect(fuelPrice()).toEqual((totalDistance / efficiency) * price);
			//clears the array
			currentTravel = [];
		});
		//Adds 1 to the array number
		a = a + 1;
		i = i + 1;
	}
	//Tests if the array is empty or all are removed that it produces zero in the calculations
	it("If user calculates empty list / removes all values" + i, function(){
		//clears array
		currentTravel = [];
		//Runs calculate distance and expects it to return 0
		expect(calculateDistance()).toEqual(0);
	});
	//Tests if a odd amount of one town is added over and over being a unexpected input
	it("Tests unexpected input", function(){
		//clears array
		currentTravel = ["Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown","Queenstown",];
		//Runs calculate distance and expects it to return 0 as they are all the same town
		expect(calculateDistance()).toEqual(0);
	});
});