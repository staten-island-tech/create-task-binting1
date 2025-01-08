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
  
        questions.forEach((question) => {DOMSelectors.container.insertAdjacentHTML("beforeend", 
            `<div class="prompts"> 
                <h2 class="questions">${question.prompt}</h2>
            </div>`
        );

        question.answer.forEach((answer) => {DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<button class="answers">${answer.text}</button>`
        );
    });
});

    DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `
        <button class="restart">Restart</button>
        <button class="submit">Submit</button>
        `
    );

    document.querySelector(".restart").addEventListener("click", function (){
        DOMSelectors.container.innerHTML='';
        //create a function to clear fields
    });

});

questions.filter((question) => question.answer.dessert === "blueberry");


//get rid of start div to see if you can use container div only instead to return to starting page
//come up with one more question 
//find out a way to link the answer to the corresponding dessert 
//use algorithm to calculate the final result 
//finish writing descriptions for each dessert 


//blue: you are very calm yet earnest.You have a fascinating inner world and you know  
//what you want and is eager to get your points across. So you refuse any interactions 
// with people you consider irrelevant in your life. 

//straw: You are widely known as a sweet person 