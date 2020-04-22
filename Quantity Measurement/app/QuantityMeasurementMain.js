// Quantity Measurement Using Node-JS

let log=console.log;
let Units= require('../app/Units');
log("Quantity Measurement Using Node JS");

class QuantityMeasurementMain
{
    checkLengthOfUnits(unit1,unit2) {
        if (unit1 == unit2) {
            return true
        } else{
            return false
        }
    }
    feetToInch(feet) {
        return feet*Units.FEET;
    }
    returnSame(input){
        return input;
    }
    yardToInch(yard){
        return yard*Units.YARD;
    }
    cmsToInch(cms) {
        return cms*Units.CM;
    }

}
module.exports = new QuantityMeasurementMain;