
describe("Javascript working correctly", function() {
	i = 0
	testing = true
	currentTravel = []
	while(i < 10){
		a = 0
		it("When traveling from the same town to the same town distance should be Zero " + i, function(){
			town = townsList[a]
			currentTravel = [town,town]
			expect(calculateDistance()).toEqual(0)
			currentTravel = []
			a = a + 1
		})
		it("Traveling from Alexandra to town and back to Alexandra works " + i, function(){
			town = townsList[a]
			currentTravel = ["Alexandra",town,"Alexandra"]
			expect(calculateDistance()).toEqual(distances[0][a] * 2)
			currentTravel = []
		})
		it("Traveling from Dunedin to town and back to Dunedin works " + i, function(){
			town = townsList[a]
			currentTravel = ["Dunedin",town,"Dunedin"]
			expect(calculateDistance()).toEqual(distances[5][a] * 2)
			currentTravel = []
		})
		it("Traveling from Hasst to town and back to Hasst works " + i, function(){
			town = townsList[a]
			currentTravel = ["Haast",town,"Haast"]
			expect(calculateDistance()).toEqual(distances[10][a] * 2)
			currentTravel = []
		})
		it("Traveling from Mount-Cook to town and back to Mount-Cook works " + i, function(){
			town = townsList[a]
			currentTravel = ["Mount-Cook",town,"Mount-Cook"]
			expect(calculateDistance()).toEqual(distances[15][a] * 2)
			currentTravel = []
		})
		it("Traveling from Queenstown to town and back to Queenstown works " + i, function(){
			town = townsList[a]
			currentTravel = ["Queenstown",town,"Queenstown"]
			expect(calculateDistance()).toEqual(distances[20][a] * 2)
			currentTravel = []
		})
		i = i + 1
	}
})