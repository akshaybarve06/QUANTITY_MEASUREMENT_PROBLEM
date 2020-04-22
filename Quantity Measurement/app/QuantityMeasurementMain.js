// Quantity Measurement Using Node-JS

let log=console.log;

log("Quantity Measurement Using Node JS");

class QuantityMeasurementMain
{
    checkLengthOfUnits(unit1, unit2) {
        if (unit1 == unit2) {
            return true
        } else{
            return false
        }
    }
    feetToInch(feet) {
        return feet*12;
    }
}
module.exports = new QuantityMeasurementMain;