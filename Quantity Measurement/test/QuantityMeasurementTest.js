// Test Class For Quantity Measurement

let assert = require('chai').assert;
let lengthCheck = require('../app/QuantityMeasurementMain');
let unitCheck=require('../app/Units');

describe('Testing for Length Check', function ()
{
    // TC 1.1 Check Equality For Length of 0 Ft and 0 Ft
    it('given value of units 0 Feet and 0 Feet Length  if equal  should return true', function ()
    {
        assert.equal(true, lengthCheck.checkLengthOfUnits(unitCheck.FEET,unitCheck.FEET, 0, 0))
    })

    // TC 1.2 Check Not Equality For Length of 0 Ft and 1 Ft
    it('given value of units 0 Feet and 1 Feet Length  if not equal  should return false', function ()
    {
        assert.equal(false, lengthCheck.checkLengthOfUnits(unitCheck.FEET,unitCheck.FEET, 0,1))
    })

    // TC 1.3 Check Not Equality For Check 0 Ft and NULL
    it('given value of units 0 Feet and null Length  if not equal  should return false', function ()
    {
        assert.equal(false, lengthCheck.checkLengthOfUnits(unitCheck.FEET,unitCheck.FEET, 0,null))
    })

    // TC 1.4 Check Equality For Reference
    it('given value of units reference if equal  should return true', function ()
    {
        let value1=10
        let value2=10
        assert.equal(true, lengthCheck.checkLengthOfUnits(unitCheck.FEET,unitCheck.FEET, value1,value2))
    })

    // TC 1.5 Check Equality For Type
    it('given value of unit in Ft should return type as number ', function ()
    {
        assert.typeOf(lengthCheck.compare("feet",0),'Number')
    })

    // TC 1.6 Check Value For Equality
    it('given value of unit in Ft should return equal ', function ()
    {
        assert.equal(24,lengthCheck.compare("Feet",2))
    })

    // TC 1.7 Check Equality For Length of 0 in and 0 in
    it('given value of units 0 inch and 0 inch Length  if equal  should return true', function ()
    {
        assert.equal(true, lengthCheck.checkLengthOfUnits(unitCheck.INCH,unitCheck.INCH, 0, 0))
    })

    // TC 1.8 Check Not Equality For Length of 0 inch and 1 inch
    it('given value of units 0 inch and 1 inch Length  if not equal  should return false', function ()
    {
        assert.equal(false, lengthCheck.checkLengthOfUnits(unitCheck.INCH,unitCheck.INCH, 0, 1))
    })

    // TC 1.9 Check Not Equality For Check 0 inch and NULL
    it('given value of units 0 inch and null Length  if not equal  should return false', function ()
    {
        assert.equal(false, lengthCheck.checkLengthOfUnits(unitCheck.INCH,unitCheck.INCH, 0, null))
    })

    // TC 1.10 Check Equality For Reference
    it('given value of inch units reference if equal  should return true', function ()
    {
        let value1=12
        let value2=12
        assert.equal(true, lengthCheck.checkLengthOfUnits(unitCheck.INCH,unitCheck.INCH, value1, value2))
    })

    // TC 1.11 Check Equality For Type
    it('given value of unit in inch should return type as number ', function ()
    {
        assert.typeOf(lengthCheck.compare("Inch",0),'Number')
    })

    // TC 1.12 Check Value For Equality For Inch
    it('given value of unit in inch should return equal ', function ()
    {
        assert.equal(2,lengthCheck.compare("Inch",2))
    })

    // TC 1.13 Check Value For 3 Feet and 1 Yard are Equal
    it( 'given value of unit 3 feet and 1 yard should return equal', function ()
    {
        assert.equal(lengthCheck.compare("Feet",3),lengthCheck.compare("Yard",1))
    })

    // TC 1.14 Check Value For 1 Feet and 1 Yard are Not Equal
    it( 'given value of unit 1 feet and 1 yard should return not equal', function ()
    {
        assert.notEqual(lengthCheck.compare("Feet",1),lengthCheck.compare("Yard",1))
    })

    // TC 1.15 Check Value For 1 inch and 1 Yard are Not Equal
    it( 'given value of unit 1 inch and 1 yard should return not equal', function ()
    {
        assert.notEqual(lengthCheck.compare("Inch",1),lengthCheck.compare("Yard",1))
    })

    // TC 1.16 Check Value For 1 Yard and 36 Inches are Equal
    it( 'given value of unit 1 yard and 36 inches should return equal', function ()
    {
        assert.equal(lengthCheck.compare("Yard",1),lengthCheck.compare("Inch",36))
    })
    // TC 1.17 Check Value For 36 Inches and 1 Yard are Equal
    it( 'given value of unit 36 inches and 1 yard should return equal', function ()
    {
        assert.equal(lengthCheck.compare("Inch",36),lengthCheck.compare("Yard",1))
    })

    // TC 1.18 Check Value For  1 Yard and 3 Feet are Equal
    it( 'given value of unit  1 yard and 3 Feet should return equal', function ()
    {
        assert.equal(lengthCheck.compare("Yard",1),lengthCheck.compare("Feet",3))
    })

    // TC 3.1 Compare Lengths of 2 inch and 5 Cms
    it('given value of unit 2 in and 5 cms should return equal',function ()
    {
        assert.equal(lengthCheck.compare("Inch",2),lengthCheck.compare("Cm",5))
    })
})
describe(' Test Cases For Addition of Lengths Given ',function ()
{
    // TC 4.1 Addition of 2 inch and 2 inch
    it('given value of unit 2 in and 2 inch should return addition 4 inch',function ()
    {
        let ans = lengthCheck.addition(lengthCheck.compare("Inch",2), lengthCheck.compare("Inch",2))
        assert.equal(ans, 4)
    })

    // TC 4.2 Addition of 1 Feet and 2 inch
    it('given value of unit 1 Feet and 2 inch should return addition 14 inch',function ()
    {
        let ans = lengthCheck.addition(lengthCheck.compare("Feet",1), lengthCheck.compare("Inch",2))
        assert.equal(ans, 14)
    })

    // TC 4.3 Addition of 1 Feet and 1 Feet
    it('given value of unit 1 Feet and 1 Feet should return addition 24 inch',function ()
    {
        let ans = lengthCheck.addition(lengthCheck.compare("Feet",1), lengthCheck.compare("Feet",1))
        assert.equal(ans, 24)
    })

    // TC 4.4 Addition of 2 inch and 2.5 Cms
    it('given value of unit 2 inch and 2.5 Cms should return addition 3 inch',function ()
    {
        let ans = lengthCheck.addition(lengthCheck.compare("Inch",2), lengthCheck.compare("Cm",2.5))
        assert.equal(ans, 3)
    })

    // TC 5.1 Check Equality of Volume 1 Gallon and 3,78 Ltrs
    it('given value of volume 1 gallon and 3.78 ltrs should return true',function ()
    {
        assert.equal(lengthCheck.compare("Gallon",1),lengthCheck.compare("Lt",3.78))
    })

    // TC 5.2 Check Equality of Volume 1 Ltr and 1000 Ml
    it('given value of volume 1 Liter and 1000 ml should return true',function ()
    {
        assert.equal(lengthCheck.compare("Lt",1 ),lengthCheck.compare("Ml",1000))
    })

    // TC 6.1 Addition of Volume 1 gallon and 3.78 Ltrs
    it('given value of volume 1 gallon and 3.78 Liter should return 7.75 ltrs',function ()
    {
        let ans = lengthCheck.addition(lengthCheck.compare("gallon",1), lengthCheck.compare("Lt",3.78))
        assert.equal(ans, 7.56)
    })
})

