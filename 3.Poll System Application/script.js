
const options = [
    { id: "option1", text: "JavaScript", votes:0 },
    { id: "option2", text: "Python", votes:0 },
    { id: "option3", text: "Java", votes:0 },
    { id: "option4", text: "c++", votes:0 },
    { id: "option5", text: "C#", votes:0 },
];


function submitVote() {

    const selectedoption = document.querySelector('input[name="poll"]:checked');
    //console.log(selectedoption.value);

    if (!selectedoption) {
        alert("Please select an option.");
        return;
    }

    const optionId = selectedoption.value;
    const selectOptionOb = options.find((option) => option.id === optionId);//check above id name select options id
    //  console.log(selectOptionOb);

    if (selectOptionOb) {
        selectOptionOb.votes++;
        console.log(selectOptionOb);
        displayResult();

    }
}

//display function....

function displayResult() {
    const result = document.getElementById('result');
    result.innerHTML = "";
    

    options.forEach((option) => {
        const percentage = option.votes > 0 ? ((option.votes / getTotalValue()) * 100).toFixed(2) : '00';
        const barWidth = percentage > 0 ? percentage + "%" : "0%";

        const optionResult = document.createElement("div");
        optionResult.className = "option-result";
        optionResult.innerHTML = `
            <span class="option-text">${option.text}</span>
            <div class="bar-container">
                <div class="bar" style="width: ${barWidth};"></div>
            </div>

            <span class="percentage">${percentage}%</span>
        `;

        result.appendChild(optionResult);
    });
}


function getTotalValue() {
    return options.reduce((total, opt) => total + opt.votes, 0);
}

displayResult();
