const Chai = require('chai');
const expect = Chai.expect;
const fibonacci = require('../fibonacci');


describe('fibonacci', () => {
	it('should be a function', () => {
		expect(fibonacci).to.be.a('function');
	});
	it('should return an array of fibonacci numbers. Amount of fibonacci numbers listed should be the number passed in', () => {
		expect(fibonacci(5)).to.deep.equal([1,1,2,3,5]);
	});
});
