// Include required program files
var src = require('../app/calculator.js');
// Specs...
describe("when adding numbers", function(){
	it("should add a varying list of numbers together", function(){
		expect(src.Calculator.add(1,2,3)).toEqual(6);
		expect(src.Calculator.add(1,2,3,4,5)).toEqual(15)
		expect(src.Calculator.add(1)).toEqual(1);
	})
});