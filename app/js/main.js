import '/src/style.css'
import { desserts } from '/js/desserts.js'

const DOMSelectors = {
    start:document.querySelector(".start"),
    container: document.querySelector(".container"),

};

function createCard (desserts) {
    desserts.forEach((desserts) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="card">
            <h2 class="title">${desserts.name}</h2>

        </div>`
    ));
};

createCard (desserts); 

// function beginningPage () {
//     DOMSelectors.start.insertAdjacentHTML("beforeend", 
//         `<div class="beginning">
//             <h2></h2>
//         </div>`
//     )
// }

