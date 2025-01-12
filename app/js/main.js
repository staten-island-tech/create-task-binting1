import '/src/style.css'
import {questions} from '/js/questions.js'

const DOMSelectors = {
    startingContainer: document.getElementById("starting-container"),
    quizContainer: document.getElementById('quiz-container'),
    resultContainer: document.getElementById('result-container'),

};

function startingPage () {
        DOMSelectors.startingContainer.insertAdjacentHTML("beforeend", 
        `<div class="play"> 
            <h2 class="title">Which Dessert Are You?</h2>
            <p>blueberry cake, strawberry cake, tiramisu, or cherry pie?</p>
            <button class="btn">start</button>
        </div>`
    );
}; 

startingPage (); 

document.querySelector(".btn").addEventListener("click", function (){
    DOMSelectors.startingContainer.innerHTML = "";
  
    questions.forEach((question, index) => {
        const questionDiv = `
            <div class="question">
                <h2 class="prompt">${question.prompt}</h2>
                <div class="answers" data-index="${index}">
                ${question.answers.map(answer => `
                    <button class="answer" data-dessert="${answer.dessert}" data-question="${index}">${answer.text}</button>`
                ).join('')}
                </div>
            </div>
        `;
        
        DOMSelectors.quizContainer.insertAdjacentHTML("beforeend", questionDiv);
    });

        DOMSelectors.quizContainer.insertAdjacentHTML("beforeend", 
            `<button class="submit">submit</button>`
        );

    document.querySelector(".submit").addEventListener('click', () => {
        if (selectedAnswers.length < questions.length) {
            alert("Please answer all the questions before submitting your result.");
            return; 
        }
        
        const dessertCounts = { blueberry: 0, strawberry: 0, tiramisu: 0, cherryPie: 0};
        
        const dessertDescriptions = {
            blueberry : "You are a quiet and thoughtful individual who values tradition and stability. You are deeply caring, loyal, and supportive of others. You often put others' needs before your own and take pride in being dependable and responsible. Your calm, methodical nature ensures that you are always there for your friends and family when they need you most.",
            strawberry: "You are an outgoing and friendly person who thrives in social settings. You value harmony, connections, and helping others. You enjoy organizing events, being part of a community, and making sure everyone feels comfortable. Your warm and empathetic nature helps you create lasting relationships and ensures that no one is left behind.",
            tiramisu: "You are a strong-willed and decisive individual who enjoys structure and efficiency. You are a natural leader with a no-nonsense approach to life. You value practicality, organization, and hard work. You take charge in situations, focus on results, and ensure that things are done right. Your straightforward nature makes you reliable, but you may sometimes come across as blunt.",
            cherryPie: "You are an idealistic and compassionate soul who strives for inner peace and authenticity. You care deeply about your values, your creativity, and the well-being of others. You are always striving to make the world a better place and to understand the emotional needs of those around you. You may be reserved, but you have a big heart, and you cherish close, meaningful relationships.",

        };

        selectedAnswers.forEach(dessert => {
            dessertCounts[dessert]++;
        });

        let resultDessert = '';
        let maxCount = 0;
        for (let dessert in dessertCounts) {
            if (dessertCounts[dessert] > maxCount) {
                maxCount = dessertCounts[dessert];
                resultDessert = dessert;
            }
        }

        const percentage = (maxCount / selectedAnswers.length) * 100;

        const resultDescription = dessertDescriptions[resultDessert];

        function resultPage () {
            DOMSelectors.quizContainer.innerHTML = "";
            DOMSelectors.resultContainer.insertAdjacentHTML("beforeend", 
            `<div class="results">
                <h2 class="title">Your Dessert Personality:</h2>
                <h4>You are most like <strong>${resultDessert}</strong> with <strong>${percentage.toFixed(2)}%</strong> compatibility!</h4>
                <p>${resultDescription}</p>
            </div>`
            )
        }

        resultPage ();
        
    }); 
     
});

    let selectedAnswers = [];

    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('answer')) {
            const dessert = event.target.getAttribute('data-dessert');
            selectedAnswers.push(dessert); 
            event.target.classList.add('greyed-out');

        }
    });
