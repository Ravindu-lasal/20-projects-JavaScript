const paragraph = [
    "JavaScript is a versatile programming language that enables developers to create interactive and dynamic web pages. It is one of the core technologies of web development, alongside HTML and CSS. With JavaScript, web pages can respond to user actions, manipulate content, and communicate with servers without needing to reload the page.",
  
    "Originally created by Brendan Eich in 1995, JavaScript was first known as Mocha and later renamed to LiveScript before becoming JavaScript. It was developed as a client-side scripting language to add interactivity to static web pages, and its popularity has only grown since then, with JavaScript now being used on both the client and server sides.",
  
    "JavaScript is a high-level, interpreted language that follows an event-driven, non-blocking I/O model. This makes it especially well-suited for building fast, scalable web applications. Unlike some other programming languages, JavaScript does not require the developer to manage memory manually, which simplifies the development process.",
  
    "One of JavaScript's key features is its ability to interact with the Document Object Model (DOM). The DOM represents the structure of a webpage, and JavaScript allows developers to manipulate it in real time, changing elements like text, images, and styles dynamically without reloading the page.",
  
    "JavaScript is also known for its flexibility and extensive ecosystem of libraries and frameworks. Popular frameworks like React, Angular, and Vue.js have revolutionized the way developers build modern web applications, while libraries like jQuery simplify tasks like DOM manipulation and AJAX calls.",
  
    "In addition to web development, JavaScript has expanded into server-side programming with the introduction of Node.js. Node.js allows developers to run JavaScript on the server, enabling full-stack JavaScript development. This has greatly simplified the development process and made JavaScript even more powerful and widely adopted.",
  
    "JavaScript supports various programming paradigms, including imperative, object-oriented, and functional programming. This allows developers to choose the most appropriate paradigm for the task at hand and gives them greater flexibility when writing code.",
  
    "Asynchronous programming is another important feature of JavaScript. The language's support for callbacks, promises, and async/await syntax makes it easy to handle operations that take time, like fetching data from an API, without blocking the execution of the rest of the program.",
  
    "JavaScript also plays a key role in modern web development through the use of Single Page Applications (SPAs). SPAs provide a smoother user experience by loading all necessary resources upfront and dynamically updating content as needed, reducing the need for full-page reloads and improving performance.",
  
    "In conclusion, JavaScript is an essential language for web development that continues to evolve and grow in popularity. With its rich ecosystem, vast community support, and powerful features, JavaScript remains one of the most widely used programming languages in the world, powering everything from simple websites to complex web applications and beyond."
  ];
  
const item = document.getElementById('item');
const datacontainer = document.getElementById('outputText');

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex !=0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;

}

function generateParagraph(){

    if(item.value == 0){
        alert("The Value Cannot be Zero");

    } else if(item.value > paragraph.length){
        const randomIndex = Math.floor(Math.random() * paragraph.length);
        datacontainer.innerHTML = `${paragraph[randomIndex]}`;
    }else{

        const shuffleParagrphs = paragraph;
        shuffle(paragraph);

        const selectParagraphs = shuffleParagrphs.slice(0, item.value);
        const paragraphsHTML = selectParagraphs.map((paragraph) => `<p>${paragraph}</p></br>`).join('');
        datacontainer.innerHTML = paragraphsHTML;
    }

}