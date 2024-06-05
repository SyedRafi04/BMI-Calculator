let PageOne = document.querySelector(".main");
let MaleBtn = document.querySelector(".maleBMI");
let FemaleBtn = document.querySelector(".femaleBMI");
let Calculation = document.querySelector(".page.calculation"); 
let Height = document.querySelector(".height");
let Weight = document.querySelector(".weight");
let CalculateBtn = document.querySelector(".SubmitBtn");
let HeightError = document.querySelector(".heightError");
let WeightError = document.querySelector(".weightError");
let Description = document.querySelector(".description");
let ResultPage = document.querySelector(".FinalPage");
let Result = document.querySelector(".result");

MaleBtn.addEventListener("click", function(){
    console.log("Male button clicked");
    male = true
    PageOne.style.display = "none"
    Calculation.style.display = "flex"
})
FemaleBtn.addEventListener("click", function(){
    console.log("Female button clicked");
    male = false
    PageOne.style.display = "none"
    Calculation.style.display = "flex"
})

CalculateBtn.addEventListener("click", function(){
    HeightError.innerHTML = ""
    WeightError.innerHTML = ""
    if (Height.value == ""){
        HeightError.innerHTML = "Please enter your height"
        HeightError.style.color = "red"
    }else if (Weight.value == ""){
        WeightError.innerHTML = "Please enter your weight"
        WeightError.style.color = "red"
    }else if(male == true){
        bmi = Weight.value / (Height.value * Height.value)
        if (bmi < 18.5){
            Result.style.color = "red"
            Description.innerHTML = "Underweight"
        }else if(bmi > 24.9){
            Result.style.color = "red"
            Description.innerHTML = "Overweight"          
        }else{
            Result.style.color = "green"
            Description.innerHTML = "Healthy"            
        }
        PageOne.style.display = "none"
        ResultPage.style.display = "flex"
        Result.innerHTML = bmi
        
    }else{
        bmi = Weight.value / (Height.value * Height.value)
        if (bmi < 18.5){
            Result.style.color = "red"
            Description.innerHTML = "Underweight"
        }else if(bmi > 24.9){
            Result.style.color = "red"
            Description.innerHTML = "Overweight"          
        }else{
            Result.style.color = "green"
            Description.innerHTML = "Healthy"            
        }
        PageOne.style.display = "none"
        ResultPage.style.display = "flex"
        Result.innerHTML = bmi
    }
})


