const submitBtn = document.getElementById("submitBtn");
const summarySection = document.querySelector(".summarySection");
const tempType = document.getElementById("tempType").value;


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

    displayResult (a, b) {
        // const resultMessage = document.createElement(`p`);
        // resultMessage.textContent = `${this.currentUnit} is ${this.targetUnit}`;
        summarySection.innerHTML = `<p
        style="color: blue; 
        font-size: 1.5em;
        text-align: center;" 
        >${this.currentUnit}${a} is ${this.targetUnit}${b}</p>`;
    }
}

submitBtn.onclick = function() {
    let tempValue = document.getElementById("tempValue").value;
    console.log(tempValue);
    console.log(tempType);

    const currentType = tempType.charAt(0);
    const targetType = tempType.charAt(1);

    switch (tempType) {
        case "CF":
            const cToFConverter = new TemperatureConverter(tempValue, "F");
            cToFConverter.convertCtoF(tempValue);
            cToFConverter.displayResult(currentType, targetType);
            break;
        case "CK":
            const cToKConverter = new TemperatureConverter(tempValue, "K");
            cToKConverter.convertCtoK(tempValue);
            cToKConverter.displayResult(currentType, targetType);
            break;
        case "FC":
            const fToCConverter = new TemperatureConverter(tempValue, "C");
            cToKConverter.convertCtoK(tempValue);
            cToKConverter.displayResult(currentType, targetType);
            break;
        case "FK":
            const fToConverter = new TemperatureConverter(tempValue, "K");
            cToKConverter.convertCtoK(tempValue);
            cToKConverter.displayResult(currentType, targetType);
            break;
        case "KC":
            const kToCConverter = new TemperatureConverter(tempValue, "C");
            cToKConverter.convertCtoK(tempValue);
            cToKConverter.displayResult(currentType, targetType);
            break;
        case "KF":
            const kToFConverter = new TemperatureConverter(tempValue, "F");
            cToKConverter.convertCtoK(tempValue);
            cToKConverter.displayResult(currentType, targetType);
            break;
            
    }
}
