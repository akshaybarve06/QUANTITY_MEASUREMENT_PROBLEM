// Quantity Measurement Using Node-JS

let log=console.log;
let Units= require('../app/Units');
log("Quantity Measurement Using Node JS");

class QuantityMeasurementMain
{

    checkLengthOfUnits(unit1, unit2, value1, value2)
    {
        if (unit1 == unit2 && value1 == value2)
            return true
        else
            return false
    }
    compare(input, value){
        let unit=input.toLowerCase()
        if (unit == 'feet')
            return value*Units.FEET
        if (unit == 'yard')
            return value*Units.YARD
        if (unit == 'cm')
            return value*Units.CM
        if (unit == 'gallon')
            return value*Units.GALLON
        if (unit == 'ml')
            return value*Units.ML
        if (unit == 'gm')
            return value*Units.GM
        if (unit == 'ton')
            return value*Units.TON
        else
            return value
    };
    addition(value1, value2){
        return value1+value2;
    }
}
module.exports = new QuantityMeasurementMain;