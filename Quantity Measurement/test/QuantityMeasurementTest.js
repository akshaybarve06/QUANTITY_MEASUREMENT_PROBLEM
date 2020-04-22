// Test Class For Quantity Measurement

let assert = require('chai').assert;
let lengthCheck = require('../app/QuantityMeasurementMain');

describe('Testing for Length Check', function ()
{
    // TC 1.1 Check Equality For Length of 0 Ft and 0 Ft
    it('given value of units 0 Feet and 0 Feet Length  if equal  should return true', function ()
    {
        let expectedOutput = lengthCheck.checkLengthOfUnits(0, 0);
        assert.equal(true, expectedOutput)
    })
    // TC 1.2 Check Not Equality For Length of 0 Ft and 1 Ft
    it('given value of units 0 Feet and 1 Feet Length  if not equal  should return false', function ()
    {
        let expectedOutput = lengthCheck.checkLengthOfUnits(0, 1);
        assert.equal(false, expectedOutput)
    })
    // TC 1.3 Check Not Equality For Check 0 Ft and NULL
    it('given value of units 0 Feet and null Length  if not equal  should return false', function ()
    {
        let expectedOutput = lengthCheck.checkLengthOfUnits(0, null);
        assert.equal(false, expectedOutput)
    })
    // TC 1.4 Check Equality For Reference
    it('given value of units reference if equal  should return true', function ()
    {
        let value1=10
        let value2=10
        let expectedOutput = lengthCheck.checkLengthOfUnits(value1, value2);
        assert.equal(true, expectedOutput)
    })
    // TC 1.5 Check Equality For Type
    it('given value of unit in Ft should return type as number ', function () {
        assert.typeOf(lengthCheck.feetToInch(0), 'Number')
    })
    // TC 1.6 Check Value For Equality
    it('given value of unit in Ft should return equal ', function () {
        assert.equal(24, lengthCheck.feetToInch(2) )
    })
})