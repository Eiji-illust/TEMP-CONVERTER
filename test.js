// Get references to the input elements and the submit button
const submitBtn = document.getElementById("submitBtn");
const summarySection = document.querySelector(".summarySection");
const tempType = document.getElementById("tempType").value;

// Get references to the conversion type radio buttons
class TemperatureConverter {
    constructor (currentUnit, targetUnit) {
        this.currentUnit = currentUnit;
        this.targetUnit = targetUnit;
    }

    convertCtoF (temperature) {
        this.targetUnit = (temperature * 9/5) + 32;
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
        font-family: "Poppins";
        >${(this.currentUnit).toFixed(2)}${a} is ${this.targetUnit.toFixed(2)}${b}</p>`;
    }
}

submitBtn.onclick = function() {

    // Get the input value and selected conversion type
    let tempValue = document.getElementById("tempValue").value;
    let tempType = document.getElementById("tempType").value;
    console.log(tempValue);
    console.log(tempType);

    // Checks if the input value is a valid number
    if(tempValue === ""){
        summarySection.innerHTML = `
        <p style="color: red;
        font-size:: 1.5em;
        text-align: center;
        font-family: "Poppins";">
        Please enter a valid number
        </p>`
        return;
    }

    // Validate the input value
    tempValue = Number(tempValue);

    // Checks if a conversion type is selected
    const currentType = tempType.charAt(0);
    const targetType = tempType.charAt(1);

    // Perform the conversion based on the selected type
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
            fToCConverter.convertFtoC(tempValue);
            fToCConverter.displayResult(currentType, targetType);
            break;
        case "FK":
            const fToKConverter = new TemperatureConverter(tempValue, "K");
            fToKConverter.convertFtoK(tempValue);
            fToKConverter.displayResult(currentType, targetType);
            break;
        case "KC":
            const kToCConverter = new TemperatureConverter(tempValue, "C");
            kToCConverter.convertKtoC(tempValue);
            kToCConverter.displayResult(currentType, targetType);
            break;
        case "KF":
            const kToFConverter = new TemperatureConverter(tempValue, "F");
            kToFConverter.convertKtoF(tempValue);
            kToFConverter.displayResult(currentType, targetType);
            break;
        
    }
}

