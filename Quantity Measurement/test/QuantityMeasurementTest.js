// Test Class For Quantity Measurement
let assert = require('chai').assert;
let lengthCheck = require('../app/QuantityMeasurementMain');
let unitCheck=require('../app/Units');

describe(`Test Cases To Check Equality of Length (FEET)`, function()
{
    // TC 1.1 Check Equality For Length of 0 Ft and 0 Ft
    it(`given value of units 0 Feet and 0 Feet Length if equal should return true`, function(){
        assert.isTrue(lengthCheck.checkLengthOfUnits(unitCheck.FEET, unitCheck.FEET, 0, 0))
    })
    // TC 1.2 Check Not Equality For Length of 0 Ft and 1 Ft
    it(`given value of units 0 Feet and 1 Feet Length if not equal should return false`, function(){
        assert.isFalse(lengthCheck.checkLengthOfUnits(unitCheck.FEET, unitCheck.FEET, 0, 1))
    })
    // TC 1.3 Check Not Equality For Check 0 Ft and NULL
    it(`given value of units 0 Feet and null Length if not equal should return false`, function(){
        assert.isFalse(lengthCheck.checkLengthOfUnits(unitCheck.FEET, unitCheck.FEET, 0, null))
    })
    // TC 1.4 Check Equality For Reference
    it(`given value of units reference if equal should return true`, function(){
        let value1 = 10
        let value2 = 10
        assert.isTrue(lengthCheck.checkLengthOfUnits(unitCheck.FEET, unitCheck.FEET, value1, value2))
    })
    // TC 1.5 Check Equality For Type
    it(`given value of unit in Ft should return type as number`, function(){
        assert.typeOf(lengthCheck.compare("feet", 0), 'Number')
    })
    // TC 1.6 Check Value For Equality
    it(`given value of unit in Ft should return equal`, function(){
        assert.equal(24, lengthCheck.compare("Feet", 2))
    })
})
describe(`Test Cases To Check Equality of Length (INCH)`, function()
{
    // TC 1.7 Check Equality For Length of 0 in and 0 in
    it('given value of units 0 inch and 0 inch Length if equal should return true', function(){
        assert.isTrue(lengthCheck.checkLengthOfUnits(unitCheck.INCH, unitCheck.INCH, 0, 0))
    })
    // TC 1.8 Check Not Equality For Length of 0 inch and 1 inch
    it(`given value of units 0 inch and 1 inch Length if not equal should return false`, function(){
        assert.isFalse(lengthCheck.checkLengthOfUnits(unitCheck.INCH, unitCheck.INCH, 0, 1))
    })
    // TC 1.9 Check Not Equality For Check 0 inch and NULL
    it(`given value of units 0 inch and null Length if not equal should return false`, function(){
        assert.isFalse(lengthCheck.checkLengthOfUnits(unitCheck.INCH, unitCheck.INCH, 0, null))
    })
    // TC 1.10 Check Equality For Reference
    it(`given value of inch units reference if equal should return true`, function(){
        let value1 = 12
        let value2 = 12
        assert.isTrue(lengthCheck.checkLengthOfUnits(unitCheck.INCH, unitCheck.INCH, value1, value2))
    })
    // TC 1.11 Check Equality For Type
    it(`given value of unit in inch should return type as number`, function(){
        assert.typeOf(lengthCheck.compare("Inch", 0), 'Number')
    })
    // TC 1.12 Check Value For Equality For Inch
    it(`given value of unit in inch should return equal`, function(){
        assert.equal(2, lengthCheck.compare("Inch", 2))
    })
})
describe(`Test Cases To Check Equality of Lengths FEET and YARD`, function()
{
    // TC 1.13 Check Value For 3 Feet and 1 Yard are Equal
    it(`given value of unit 3 feet and 1 yard should return equal`, function(){
        assert.equal(lengthCheck.compare("Feet", 3), lengthCheck.compare("Yard", 1))
    })
    // TC 1.14 Check Value For 1 Feet and 1 Yard are Not Equal
    it(`given value of unit 1 feet and 1 yard should return not equal`, function(){
        assert.notEqual(lengthCheck.compare("Feet", 1), lengthCheck.compare("Yard", 1))
    })
    // TC 1.15 Check Value For 1 inch and 1 Yard are Not Equal
    it(`given value of unit 1 inch and 1 yard should return not equal`, function(){
        assert.notEqual(lengthCheck.compare("Inch", 1), lengthCheck.compare("Yard", 1))
    })
    // TC 1.16 Check Value For 1 Yard and 36 Inches are Equal
    it(`given value of unit 1 yard and 36 inches should return equal`, function(){
        assert.equal(lengthCheck.compare("Yard", 1), lengthCheck.compare("Inch", 36))
    })
    // TC 1.17 Check Value For 36 Inches and 1 Yard are Equal
    it(`given value of unit 36 inches and 1 yard should return equal`, function(){
        assert.equal(lengthCheck.compare("Inch", 36), lengthCheck.compare("Yard", 1))
    })
    // TC 1.18 Check Value For  1 Yard and 3 Feet are Equal
    it(`given value of unit  1 yard and 3 Feet should return equal`, function () {
        assert.equal(lengthCheck.compare("Yard", 1), lengthCheck.compare("Feet", 3))
    })
})
describe(`Test Case To Check Equality of INCH and CMs`, function ()
{
    // TC 3.1 Compare Lengths of 2 inch and 5 Cms
    it(`given value of unit 2 in and 5 cms should return equal`, function(){
        assert.equal(lengthCheck.compare("Inch",2),lengthCheck.compare("Cm",5))
    })
})
describe(`Test Cases To Check Addition of INCH FEET YARD Given`, function()
{
    // TC 4.1 Addition of 2 inch and 2 inch
    it(`given value of unit 2 in and 2 inch should return addition 4 inch`, function(){
        let ans = lengthCheck.addition(lengthCheck.compare("Inch", 2), lengthCheck.compare("Inch", 2))
        assert.equal(ans, 4)
    })
    // TC 4.2 Addition of 1 Feet and 2 inch
    it(`given value of unit 1 Feet and 2 inch should return addition 14 inch`, function(){
        let ans = lengthCheck.addition(lengthCheck.compare("Feet", 1), lengthCheck.compare("Inch", 2))
        assert.equal(ans, 14)
    })
    // TC 4.3 Addition of 1 Feet and 1 Feet
    it(`given value of unit 1 Feet and 1 Feet should return addition 24 inch`, function(){
        let ans = lengthCheck.addition(lengthCheck.compare("Feet", 1), lengthCheck.compare("Feet", 1))
        assert.equal(ans, 24)
    })
    // TC 4.4 Addition of 2 inch and 2.5 Cms
    it(`given value of unit 2 inch and 2.5 Cms should return addition 3 inch`, function(){
        let ans = lengthCheck.addition(lengthCheck.compare("Inch", 2), lengthCheck.compare("Cm", 2.5))
        assert.equal(ans, 3)
    })
})
describe(`Test Cases To Check Equality and Addition of Volumes`, function()
{
    // TC 5.1 Check Equality of Volume 1 Gallon and 3,78 Ltrs
    it(`given value of volume 1 gallon and 3.78 ltrs should return true`, function(){
        assert.equal(lengthCheck.compare("Gallon", 1), lengthCheck.compare("Lt", 3.78))
    })
    // TC 5.2 Check Equality of Volume 1 Ltr and 1000 Ml
    it(`given value of volume 1 Liter and 1000 ml should return true`, function(){
        assert.equal(lengthCheck.compare("Lt", 1), lengthCheck.compare("Ml", 1000))
    })
    // TC 6.1 Addition of Volume 1 gallon and 3.78 Ltrs
    it(`given value of volume 1 gallon and 3.78 Liter should return 7.75 ltrs`, function(){
        let ans = lengthCheck.addition(lengthCheck.compare("gallon", 1), lengthCheck.compare("Lt", 3.78))
        assert.equal(ans, 7.56)
    })
    // TC 6.2 Addition of Volume 1 ltr and 1000 ml
    it(`given value of volume 1 Liter and 1000 ml should return 2 ltrs`, function(){
        let ans = lengthCheck.addition(lengthCheck.compare("Lt", 1), lengthCheck.compare("Ml", 1000))
        assert.equal(ans, 2)
    })
})
describe(`Test Cases To Check Equality and Addition of Weights`, function()
{
    // TC 7.1 Check equality of 1 Kg and 1000 Grams
    it(`given value of weight 1 Kg and 1000 grams if equal should return true`, function(){
        assert.equal(lengthCheck.compare("Kg", 1), lengthCheck.compare("Gm", 1000))
    })
    // TC 7.2 Check equality of 1 Tonne and 1000 Kgs
    it(`given value of weight 1 tonne and 1000 Kgs if equal should return true`, function(){
        assert.equal(lengthCheck.compare("Ton", 1), lengthCheck.compare("Kg", 1000))
    })
    // TC 7.3 Addition of Weights 1 Tonne and 1000 gm
    it(`given value of weights 1 tonne and 1000 Gms should return 1001 kgs`, function(){
        let ans = lengthCheck.addition(lengthCheck.compare("Ton", 1), lengthCheck.compare("Gm", 1000))
        assert.equal(ans, 1001)
    })
})
describe(`Test Case To Check Equality of Temperature`, function()
{
    // TC 8.1 Check Equality of 212 f and 100 c
    it(`given value of temperature 212 farenheit and 100 celcius if equal should return true`, function(){
        assert.equal(lengthCheck.compare("Farenheit",212), lengthCheck.compare("celcius",100))
    })
})

