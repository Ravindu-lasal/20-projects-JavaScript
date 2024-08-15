document.addEventListener("DOMContentLoaded",()=>{

    const et2000 = document.getElementById('et2000');
    const et500 = document.getElementById('et500');
    const et200 = document.getElementById('et200');
    const et100 = document.getElementById('et100');
    const et50 = document.getElementById('et50');
    const et20 = document.getElementById('et20');
    const et10 = document.getElementById('et10');
    const et5 = document.getElementById('et5');
    const et2 = document.getElementById('et2');
    const et1 = document.getElementById('et1');

    const txt2000 = document.getElementById('txt2000');
    const txt500 = document.getElementById('txt500');
    const txt200 = document.getElementById('txt200');
    const txt100 = document.getElementById('txt100');
    const txt50 = document.getElementById('txt50');
    const txt20 = document.getElementById('txt20');
    const txt10 = document.getElementById('txt10');
    const txt5 = document.getElementById('txt5');
    const txt2 = document.getElementById('txt2');
    const txt1 = document.getElementById('txt1');
    
    const txtFinalCash = document.getElementById("txtFinalCash");
    const txtFinalCashInword = document.getElementById("txtFinalCashInwords");
    const btnReset = document.getElementById("btnReset");





    //add the array

    const cashInputs = [et2000,et500,et200,et100,et50,et20,et10,et5,et2,et1];
    const cashWords = [txt2000,txt500, txt200,txt100,txt50,txt20,txt10,txt5,txt2,txt1];


    cashInputs.forEach((input,index)=>{
        input.addEventListener('input',()=>{
            cashCalculate(index);
        })
    });


    function cashCalculate(index){

        const denominations = [2000,500,200,100,50,20,10,5,2,1];
        const rowValue = cashInputs[index].value * denominations[index];  //4 *200 = 800
        cashWords[index].textContent = rowValue.toFixed(0);

        totalCash();
    
    }

    function totalCash(){
        let totalCashValue = 0;
        cashWords.forEach((text)=>{
            totalCashValue += parseInt(text.textContent);
        });

        txtFinalCash.textContent = "Total cash: " + totalCashValue;

        txtFinalCashInword.textContent =`Total Cash : ${convertToWords(totalCashValue)}` ;
    }



    btnReset.addEventListener("click",clearData);
    function clearData(){

        cashInputs.forEach((input) =>{
            input.value = "";
        });

        cashWords.forEach((text) =>{
            text.textContent = "0";
        });

        totalCash();
        // txtFinalCash.textContent = "Total Cash: 0";
        // txtFinalCashInword.textContent ="Zero";


    }



        //nagative value handle
    cashInputs.forEach(input=>{
        input.addEventListener("input",()=>{
            const values =parseInt(input.value,10);
            if(isNaN(values) || values < 0){
                input.value = "";
            }
        })
    })


    function convertToWords(number) {
        const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];  //0-9
        const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];  //10-19
        const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];   //20 -90

        if(number === 0){
            return 'Zero';
        }

        let words ='';


        if(Math.floor(number / 10000000) > 0){
            words += convertToWords(Math.floor(number/10000000))  + ' crore '   //    1-------crore
            number %= 10000000;
        }


        if(Math.floor(number / 100000) > 0){
            words += convertToWords(Math.floor(number/100000))  + ' Lakh '   //    1-------1 Lakh
            number %= 100000;
        }


        if(Math.floor(number / 1000) > 0){
            words += convertToWords(Math.floor(number/1000))  + ' Thousand '   //    1-------1 Thousand
            number %= 1000;
        }



        if(Math.floor(number / 100) > 0){
            words += convertToWords(Math.floor(number/100))  + ' Hundred '   //    1-------1 HUndred
            number %= 100;
        }









        if(number > 0){
            if(number < 10){
                words += units[number];    //unitis[5]
            }
            else if(number < 20){

                words += teens[number - 10];  //15-10 => 5---------teens[5]

            }
            else{

                words += tens[Math.floor(number / 10)]    // 25 --------->20 --- 5 Tenty five   2
                if(number % 10){

                    words += ' ' +units[number % 10];   //units[5]

                }
            }


        }


        return words.trim();

    }


});

console.log('created by ravi...');
