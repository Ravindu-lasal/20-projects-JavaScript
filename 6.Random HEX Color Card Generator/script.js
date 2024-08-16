document.addEventListener("DOMContentLoaded", () => {

    const containerEl = document.querySelector(".container");


    // try btn generate loop





    function displayResult() {

        for (let index = 0; index < 100; index++) {

            const colorContainerEl = document.createElement("div");
            colorContainerEl.classList.add("color-container");

            const colorCodeEl = document.createElement("span");
            colorCodeEl.classList.add("color-code");
            colorContainerEl.appendChild(colorCodeEl);   //inside appendchild

            const copyButtonEL = document.createElement("button");
            copyButtonEL.classList.add("btn-copy");
            copyButtonEL.innerText = "copy";
            colorContainerEl.appendChild(copyButtonEL);

            containerEl.appendChild(colorContainerEl);

        }
    }
    displayResult();




    function randomColor() {

        const chars = "0123456789ABCDEF";
        const colorCodeLength = 6;
        let colorCode = "";

        for (let index = 0; index < colorCodeLength; index++) {

            const randomNum = Math.floor(Math.random() * chars.length);
            colorCode += chars.substring(randomNum, randomNum + 1);         // colorCodelength 5,9
        }

        return colorCode;
    }


    const mainColorContainerEL = document.querySelectorAll(".color-container");

    generateColor();


    function generateColor() {

        for (let i = 0; i < mainColorContainerEL.length; i++) {

            const colorContainerEl = mainColorContainerEL[i];
            const newColorCode = randomColor();
            const colorCodeEl1 = colorContainerEl.querySelector(".color-code");

            colorContainerEl.style.backgroundColor = "#" + newColorCode;

            colorCodeEl1.innerText = "#" + newColorCode;
        }
    }

    mainColorContainerEL.forEach((colorContainerEl) => {

        const copyButtonEL = colorContainerEl.querySelector("button");
        const colorCodeEL2 = colorContainerEl.querySelector(".color-code");

        copyButtonEL.addEventListener("click", () => {
            const colorCode = colorCodeEL2.innerText;
            copyClipBoard(colorCode);
        });

    });

    function copyClipBoard(text) {

        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Copied to Clipboard : " + text);
            })

            .catch((error) => {
                console.log("Failed to copy to clipboard", error)
            })
    }

    console.log("created by Ravi...")








});