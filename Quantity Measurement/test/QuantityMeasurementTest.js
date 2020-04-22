// Test Class For Quantity Measurement

let assert = require('assert');
let lengthCheck = require('../app/QuantityMeasurementMain');

describe('Testing for Length Check', function ()
{
    // TC 1.1 Check Equality For Length of 0 Ft and 0 Ft
    it('given value of units 0 Feet and 0 Feet Length  if equal  should return true', function ()
    {
        let expectedOutput = lengthCheck.checkLengthOfUnits(0, 0);
        assert.equal(true, expectedOutput)
    })
})