// assume that it's a test suite/folder
const { add } = require('./calculator.js');

// test away!
it("should run the tests", function() {
    expect(true).toBe(true)
})

describe('calculator', function() {
	describe('.add()', function() {
		it('should return the sum of two numbers passed as arguments', function() {
			// Arrange (set up the environment and inputs)

			// Act (excute the act function - system under test)
			const sum = add(2,2) // 2 * 2 === 4 edgecase, false positive
			// Assert
			expect(sum).toBe(4)
		})

		it('should return the sum of two numbers', function() {
			expect(add(2, 2)).toBe(4)
			expect(add(0, 2)).toBe(2)
			expect(add(0, 0)).toBe(0) // edge case, false positive
			expect(add(-2, 2)).toBe(0)
			expect(add(-2, -1)).toBe(-3)
			expect(add(-2, 0)).toBe(-2)
		})

		it('should return 0 when called with no arguments', function() {
			expect(add()).toBe(0)
		})

		it('should return the value of the argument when passing only one number', function() {
			expect(add(1)).toBe(1)
			expect(add(1)).toBe(1)
			expect(add(undefined, 1)).toBe(1)
		})

		it("should throw an error when arguments are not numbers", function() {
			expect(() => { 
				add(2, {}) 
			}).toThrow()

			expect(() => {
				add(2, [])
			}).toThrow()

			expect(() => {
				add(2, "two")
			}).toThrow()

			expect(() => {
				add(2, NaN) // NaN is a number
			}).toThrow()

			expect(() => {
				add(2, null)
			}).toThrow()

			// expect(() => {
			// 	add(2, undefined) // make the state impossible - missing an argument
			// }).toThrow()
	})

		// test('NaN is a number', function() {
		// 	expect(typeof NaN).toBe("not a number")
		// })

		it.todo("should return the sum of a list of numbers separated by comma")
		// use array from method - the gather/rest operator v. spread operator
		// function add(args) in calculator.js
	})
})
