import '/src/style.css'
import { desserts } from '/js/desserts.js'
import {questions} from '/js/questions.js'

const DOMSelectors = {
    start:document.querySelector(".start"),
    container: document.querySelector(".container"),

};

function startingPage () {
    DOMSelectors.start.insertAdjacentHTML("beforeend", 
        `<div class="play"> 
            <h2 class="title">Which Dessert Are You?</h2>
            <button class="btn">start</button>
        </div>`
    );
}; 

startingPage (); 

document.querySelector(".btn").addEventListener("click", function (){
    DOMSelectors.start.innerHTML = "";
  
    DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="play"> 
            <h2 class="questions"></h2>
            <button class="btn">start</button>
        </div>`
    );

});



// function beginningPage () {
//     DOMSelectors.start.insertAdjacentHTML("beforeend", 
//         `<div class="beginning">
//             <h2></h2>
//         </div>`
//     )
// }

//question 1: where would you spend your weekend if you had no work or projects to worry about 
//blueberry: the beach 
//strawberry: spend time with friends 
//tiramisu: movie theater 
//cherry pie: at home 
//creme brulee: spa center 

//question 2: what would you do if your friend had an argument with you?
//blueberry: confront them and get it over with 
//strawberry: offer altneratives to the problem 
//tiramisu: wait for them to reach out 
//cherry pie: try to understand them and soothe out their emotions 
//creme brulee: ask someone else to resolve the problem 

//question 3: what would you do if you forgot to study for an upcoming test the night before?
//blueberry: study to your max capibility and stop when you start to feel overwhelmed because of the workload 
//strawberry: reach out to friends to study together 
//tiramisu: worry more about the time than actually doing the studying 
//cherry pie: ends up staying all night studying for the test 
//creme brulee: gives up on it because it's already too late in your opinion 

//question 4: Which format do you prefer the most when working on a persuasive argument?
//blueberry: providing various stats and numbers to prove your point 
//strawberry: practice speech to sound persuasive 
//tiramisu: in the most simplistic and neat way , as long as it gets the job done 
//cherry pie: carefuly checks all the rubric and work based off of that 
//creme brulee: providing creative artworks to get your inner voice across 

//blue: you are very calm yet earnest.You have a fascinating inner world and you know  
//what you want and is eager to get your points across. So you refuse any interactions 
// with people you consider irrelevant in your life. 

//straw: You are widely known as a sweet person 

//++++ come up with 7 questions 