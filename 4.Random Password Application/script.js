const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");

const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const genBtn = document.getElementById("genBtn");
const passIndicator = document.getElementById("passIndicator");
const copyIcon = document.getElementById("copyIcon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {

    sliderValue.textContent = inputSlider.value;
    generatePwd();

});

function generatePwd() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    //check element
    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";


    for (let i = 0 ; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passBox.value = password;
    updatepwdIndicator();

}

genBtn.addEventListener("click", ()=>{
    generatePwd();
})

function updatepwdIndicator(){
    const pwdStrength = getpasswordStrength(passBox.value);
    console.log(pwdStrength);
    passIndicator.className = "pass_indicator " + pwdStrength;
    console.log(passIndicator.className);
}


//add class name function
function getpasswordStrength(password){

    if(password.length <= 10){
        return "weak";
    }else if(password.length <= 20){
        return "medium";
    }else{
        return "strong";
    }
}

window.addEventListener('DOMContentLoaded' , ()=>{
    updatepwdIndicator();
    generatePwd();
});

copyIcon.addEventListener("click",()=>{

    if(passBox.value != "" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";

        setTimeout(()=>{
            copyIcon.innerHTML ="content_copy";        //set time copyicon refresh
        },3000)
    }

});

console.log('created by ravi...');
