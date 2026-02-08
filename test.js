const submitBtn = document.getElementById("submitBtn");
const summarySection = document.querySelector(".summarySection");

class TemperatureConverter {
    constructor (currentUnit, targetUnit) {
        this.currentUnit = currentUnit;
        this.targetUnit = targetUnit;
    }

    convertCtoF (temperature) {
        return this.targetUnit = (temperature * 9/5) + 32;
    }

    convertCtoK (temperature) {
        return this.targetUnit = temperature + 273.15;
    }

    convertFtoC (temperature) {
        return this.targetUnit = (temperature - 32) * 5/9;
    }
    convertFtoK (temperature) {
        return this.targetUnit = (temperature - 32) * 5/9 + 273.15;
    }
    convertKtoC (temperature) {
        return this.targetUnit = (temperature - 273.15);
    }
    convertKtoF (temperature) {
        return this.targetUnit = (temperature - 273.15) * 9/5 + 32;
    }

    displayResult () {

    }
}

submitBtn.onclick = function(temperature) {
    if 
}