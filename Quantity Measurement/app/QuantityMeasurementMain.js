// Quantity Measurement Using Node-JS
let log=console.log;
let Units= require('../app/Units');
log("Quantity Measurement Using Node JS");

class QuantityMeasurementMain
{
    // Method For Check Length and Units are Same
    checkLengthOfUnits(unit1, unit2, value1, value2)
    {
        if (unit1 == unit2 && value1 == value2)
            return true
        else
            return false
    }
    // Method To Compare Value and Units and Returns Conversion
    compare(input, value)
    {
        let unit=input.toLowerCase()
        if (unit == 'feet')
            return value*Units.FEET //return value*12
        if (unit == 'yard')
            return value*Units.YARD //return value*36
        if (unit == 'cm')
            return value*Units.CM //return value*0.4
        if (unit == 'gallon')
            return value*Units.GALLON //return value*3.78
        if (unit == 'ml')
            return value*Units.ML //return value*0.001
        if (unit == 'gm')
            return value*Units.GM //return value*0.0001
        if (unit == 'ton')
            return value*Units.TON //return value*1000
        if (unit == 'farenheit')
            return ((value - 32) * 5/9) //return converted from Farenheit To Celcius
        else
            return value //return Same value Of Units => Inch, Liter, Kilogram & Celcius
    }
    // Method For Adding Values of Units
    addition(value1, value2)
    {
        return value1+value2;
    }
}
module.exports = new QuantityMeasurementMain;