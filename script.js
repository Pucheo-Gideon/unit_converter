let getInputElement = document.getElementById("inputNumber")
let saveInput = document.getElementById("saveDigit")
let showInputElement = document.getElementById("showDigit")

// Meter to feet and feet to meter
let meterToFeet = document.getElementById("meterToFeet")
let feetToMeter = document.getElementById("feetToMeter")
// console.log("MeterToFeet", meterToFeet, "feetToMeter:", feetToMeter)

// Kilos to pounds and pounds to kilos
let kilosPounds = document.getElementById("kilosPounds");
let poundsKilos = document.getElementById("poundsKilos")
// console.log("kilosPounds", kilosPounds, "poundsKilos:", poundsKilos);


// Litre(s) to gallon(s) and gallon(s) to litre(s)
let gallonsLiters = document.getElementById("gallonsLiters");
let litersGallons = document.getElementById("litersGallons");
// console.log("litersGallons:", litersGallons, "gallonsLiter:", gallonsLiters);
let valued
let getFromLocalStorage = JSON.parse(localStorage.getItem("inputValue"))
// console.log("gotten from local storage",getFromLocalStorage)

if(getFromLocalStorage){
    valued=getFromLocalStorage
    render()
}

function render(){
   showInputElement.textContent = valued
}

saveInput.addEventListener("click", ()=> {
    valued = Number(getInputElement.value)
    getInputElement.value = ""
    localStorage.setItem("inputValue", JSON.stringify(Number(valued)));
    render()
    console.log(getInputElement.value)
   
   
    Calculate(valued)
})




// meter to feet variable, pull value from localStorage and condition to reassign variable if localStorage is truthy
let meterToFeetResult 
let getMeterToFeetResultInLocalStorage = JSON.parse(localStorage.getItem("meterToFeetResult"))
if (getMeterToFeetResultInLocalStorage) {
    meterToFeetResult = getMeterToFeetResultInLocalStorage;
    renderMeterFeetUnit();
}


//feet to meter variable, pull value from localStorage and condition to reassign variable if localStorage is truthy

let feetToMeterResult 
let getFeetToMeterResultInLocalStorage = JSON.parse(localStorage.getItem("feetToMeterResult"))
if(getFeetToMeterResultInLocalStorage){
    feetToMeterResult = getFeetToMeterResultInLocalStorage
    renderFeetMeterUnit();
}


//kilos to pounds variable, pull value from localStorage and condition to reassign variable if localStorage is truthy
let kilosToPoundsResult 
let getKilosToPoundsResultInLocalStorage = JSON.parse(localStorage.getItem("kilosToPoundsResult"))
if (getKilosToPoundsResultInLocalStorage) {
  kilosToPoundsResult = getKilosToPoundsResultInLocalStorage;
  renderKilosPoundsUnit();
}

//Pounds to kilos variable, pull value from localStorage and condition to reassign variable if localStorage is truthy
let poundsToKilosResult 
let getPoundToKilosResultInLocalStorage = JSON.parse(localStorage.getItem("poundsToKilosResult"))

if (getPoundToKilosResultInLocalStorage) {
  poundsToKilosResult = getPoundToKilosResultInLocalStorage;
//   console.log(get);
  renderPoundsKilosUnit();
}


//Liters to gallons variable, pull value from localStorage and condition to reassign variable if localStorage is truthy
let literToGallonsResult 
let getLitersToGallonsResultInLocalStorage = JSON.parse(localStorage.getItem("literToGallonsResult"))
if(getLitersToGallonsResultInLocalStorage){
    literToGallonsResult = getLitersToGallonsResultInLocalStorage
    renderLitresGallonsUnit()
}

let gallonsLiterResult
let getGallonsToLitersResultInLocalStorage  = JSON.parse(localStorage.getItem("gallonsLiterResult"))
if(getGallonsToLitersResultInLocalStorage){
    gallonsLiterResult = getGallonsToLitersResultInLocalStorage
    renderGallonsLitresUnit()
}

// Calculation/Computation Function 
function Calculate(value){

    // Persist meter to feet Result in localStorage
    meterToFeetResult = `${value} meters = ${(value * 3.28084).toFixed(3)} feet`
    localStorage.setItem("meterToFeetResult", JSON.stringify(meterToFeetResult));
    renderMeterFeetUnit();
    
    // Persist feet to meter value in localStorage
    feetToMeterResult = `${value} feet = ${(value*0.3048).toFixed(3)} meter`
    localStorage.setItem("feetToMeterResult", JSON.stringify(feetToMeterResult));
    renderFeetMeterUnit()

    // Persist kilos to pounds value in localStorage
    kilosToPoundsResult = `${value} kilos = ${(value * 2.20462).toFixed(3)} pounds`
    localStorage.setItem("kilosToPoundsResult", JSON.stringify(kilosToPoundsResult));
    renderKilosPoundsUnit()

    // Persist pounds to kilos value in localStorage
    poundsToKilosResult = `${value} pounds = ${(value * 0.453592).toFixed(3)} kilos`
    localStorage.setItem("poundsToKilosResult", JSON.stringify(poundsToKilosResult))
    renderPoundsKilosUnit()

    // Persist liters to gallons value in localStorage
    literToGallonsResult = `${value} litres = ${(value * 0.219969).toFixed(3) } gallons`
    localStorage.setItem("literToGallonsResult", JSON.stringify(literToGallonsResult));
    renderLitresGallonsUnit();

    // Persist gallons to liters value in localStorage
    gallonsLiterResult =  `${value} gallons = ${(value * 4.54609).toFixed(3)} liters`
    localStorage.setItem("gallonsLiterResult",JSON.stringify(gallonsLiterResult));
    renderGallonsLitresUnit()
}



// function to render meter to feet
function renderMeterFeetUnit(){
    meterToFeet.textContent = meterToFeetResult
}

// function to render feet to meter
function renderFeetMeterUnit(){
    feetToMeter.textContent = feetToMeterResult;
}

// function to render kilos to pound results
function renderKilosPoundsUnit(){
    kilosPounds.textContent = kilosToPoundsResult
}  

function renderPoundsKilosUnit(){
    poundsKilos.textContent = poundsToKilosResult
}  

// Litres to gallon and gallon(s) to litre(s) function definition
function renderLitresGallonsUnit(){
    litersGallons.textContent = literToGallonsResult
}

// Gallons to litres and gallon(s) to litre(s) function definition
function renderGallonsLitresUnit(){
    gallonsLiters.textContent = gallonsLiterResult
}

// let time;
// let doneTypingTime = 10000
// inputNumber.addEventListener("change", (event) =>{
//     clearTimeout(time)
//     time = setTimeout(()=> {
//         Onchange(event.target.value)
//     }, doneTypingTime)
// })
// function Onchange(val){
//     console.log("This is the value you added", val)
//     showDigit.textContent = val
//     if(val != undefined && val != ""){
//     }
//     console.log("user is done entering this value", val)
//     showDigit.textContent = val
// }


