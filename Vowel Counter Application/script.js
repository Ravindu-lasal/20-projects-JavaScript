function checkVowel() {
    let text = document.getElementById("inputText").value;
    let vowelCounter = 0;

    text = text.toLowerCase();

    

    for (let i = 0; i < text.length; i++) {

        let char = text.charAt(i);
        if (isVowel(char)) {
            vowelCounter++;
        }
    }


    const result = document.getElementById('result');
    result.textContent = "Total Vowels: " + vowelCounter;
}


//chek is vowel function
function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}

document.getElementById("inputText").addEventListener("input", checkVowel);

//Understanding the "input" Event:
// The "input" event is triggered whenever the value of an <input>, <textarea>, or <select> element is changed. This event fires every time the user modifies the content, such as by typing, pasting, or deleting text.

//Key Characteristics of the "input" Event:   Real-time detection,Applies to various elements:


function countWords() {
    const text = document.getElementById("inputText").value.trim();  // trim.  This removes any leading or trailing spaces from the text.
    let wordCount = 0;

    if (text) {
        // Split the text by spaces and filter out empty strings
        wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    }

    const words = document.getElementById("words");
   words.textContent = "Total Words: " + wordCount;
}

console.log('created by ravi...');
