const submitBtn = document.getElementById("submitBtn");
const summarySection = document.querySelector(".summarySection");

const CF = document.getElementById("CF");
const CK = document.getElementById("CK");
const FC = document.getElementById("FC");
const FK = document.getElementById("FK");
const KC = document.getElementById("KC");
const KF = document.getElementById("KF");

submitBtn.onclick = function(){
    let tempValue = document.getElementById("tempValue").value
    .split(",")
    .map(val => Number(val.trim()))
    .filter(val => !isNaN(val))
    .sort((a, b) => a - b);
   
    if(tempValue == "") {
        summarySection.innerHTML = `Please enter a valid number`;
        return;
    }

    tempValue = Number(tempValue);

    const tempSelected = document.querySelector(`input[name="temperature"]:checked`);

    if(!tempSelected){
        summarySection.innerHTML = `Please select a conversion method`;
        return;
    }

    let convValue = 0;
    if(CF.checked) convValue = `C is ${(tempValue * (9/5) + 32).toFixed(2)}F`;
    if(CK.checked) convValue = `C is ${(tempValue + 273.15).toFixed(2)}K`;
    if(FC.checked) convValue = `F is ${((tempValue - 32) * (5/9)).toFixed(2)}C`;
    if(FK.checked) convValue = `F is ${((tempValue - 32) * (5/9) + 273.15).toFixed(2)}K`;
    if(KC.checked) convValue = `K is ${(tempValue - 273.15).toFixed(2)}C`;
    if(KF.checked) convValue = `K is ${((tempValue - 273.15) * (9/5) + 32).toFixed(2)}F`;
    
    const calcResult = document.createElement('p');
    calcResult.textContent = `${tempValue}${convValue}`;    
    summarySection.append(calcResult);
}