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
        else
            return value
    };
    addition(value1, value2){
        return value1+value2;
    }
}
module.exports = new QuantityMeasurementMain;