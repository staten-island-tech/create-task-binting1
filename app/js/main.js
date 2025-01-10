import '/src/style.css'
import {questions} from '/js/questions.js'

const DOMSelectors = {
    container: document.querySelector(".container"),
};

function startingPage () {
        DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="play"> 
            <h2 class="title">Which Dessert Are You?</h2>
            <button class="btn">start</button>
        </div>`
    );
}; 

startingPage (); 

document.querySelector(".btn").addEventListener("click", function (){
    DOMSelectors.container.innerHTML = "";
  
        questions.forEach((question, questionIndex) => {DOMSelectors.container.insertAdjacentHTML("beforeend", 
            `<h2 class="questions">${question.prompt}</h2>`
        );

        question.answers.forEach((answer, answerIndex) => {DOMSelectors.container.insertAdjacentHTML("beforeend", 
            `<button class="answers" data-question-index="${questionIndex}" data-answer-index="${answerIndex}">${answer.text}</button>`
        );
    });
});

    DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `
        <button class="restart">Restart</button>
        <button class="submit">Submit</button>
        `
    );

    document.querySelectorAll(".answers").forEach((button) => {
        button.addEventListener("click", (event) => {
        const questionIndex = event.target.getAttributes("data-question-index");
        const answerIndex = event.target.getAttributes("data-answer-index");
    
        questions[questionIndex].answers[answerIndex].desserts++; 
        console.log(`updated dessert value for ${questionIndex}, answer${answerIndex}:`,
            questions[questionIndex].answers[answersIndex].dessert);

    
    });
    });

    document.querySelector(".restart").addEventListener("click", function (){
        DOMSelectors.container.innerHTML='';
        //create a function to clear fields
    });

});



    // questions.filter((question) => question.answer.dessert === "blueberry");
    // questions.forEach((question) => console.log((question.answer.dessert)));

// function returnResult (dessert) {
//     let result; 
//     if(question.dessert === "blueberry") {
//         result = "blueberry";
//     } else {
//         result = "not blueberry"; 
//     }
//     return result; 
//     }
// console.log(returnResult);

//get rid of start div to see if you can use container div only instead to return to starting page
//come up with one more question 
//find out a way to link the answer to the corresponding dessert 
//use algorithm to calculate the final result 
//finish writing descriptions for each dessert 


//blue: you are very calm yet earnest.You have a fascinating inner world and you know  
//what you want and is eager to get your points across. So you refuse any interactions 
// with people you consider irrelevant in your life. 

//straw: You are widely known as a sweet person 