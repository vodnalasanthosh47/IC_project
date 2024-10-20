import { html, render } from 'lit-html';
import { hello_backend } from 'declarations/hello_backend';
import logo from './logo2.svg';

class App {
  greeting = '';

  constructor() {
    this.#render();
  }

  #handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    this.greeting = await hello_backend.greet(name);
    this.#render();
  };

  #render() {
    let body = html`
      <main>
        <img src="${logo}" alt="DFINITY logo" />
        <br />
        <br />
        <form action="#">
          <label for="name">Enter your name: &nbsp;</label>
          <input id="name" alt="Name" type="text" />
          <button type="submit">Click Me!</button>
        </form>
        <section id="greeting">${this.greeting}</section>
      </main>
    `;
    render(body, document.getElementById('root'));
    document
      .querySelector('form')
      .addEventListener('submit', this.#handleSubmit);
  }
}

export default App;



// document.getElementById('addHabitButton').addEventListener('click', addHabit);

// function addHabit() {
//     console.log("Called");
//     const habitName = prompt("Enter a new habit:");
//     if (habitName) {
//         const habitContainer = document.createElement('div');
//         habitContainer.classList.add('habit');

//         const nameElement = document.createElement('div');
//         nameElement.classList.add('habit-name');
//         nameElement.textContent = habitName;
//         habitContainer.appendChild(nameElement);

//         const circlesContainer = document.createElement('div');
//         circlesContainer.classList.add('circles');

//         for (let i = 0; i < 30; i++) {
//             const circle = document.createElement('div');
//             circle.classList.add('circle');
//             circle.addEventListener('click', () => {
//                 circle.classList.toggle('done');
//             });
//             circlesContainer.appendChild(circle);
//         }

//         habitContainer.appendChild(circlesContainer);
//         document.getElementById('habitsContainer').appendChild(habitContainer);
//     }
// }


// import { html, render } from 'lit-html';

// class HabitTracker {
//   habits = [];

//   constructor() {
//     this.#render();
//     this.#addEventListeners();
//   }

//   #addEventListeners() {
//     document
//       .getElementById('addHabitButton')
//       .addEventListener('click', this.#addHabit);
//   }

//   #addHabit = () => {
//     const habitName = prompt("Enter a new habit:");
//     if (habitName) {
//       this.habits.push({ name: habitName, days: Array(30).fill(false) });
//       this.#render();
//     }
//   };

//   #toggleDay = (habitIndex, dayIndex) => {
//     this.habits[habitIndex].days[dayIndex] = !this.habits[habitIndex].days[dayIndex];
//     this.#render();
//   };

//   #render() {
//     const body = html`
//       <div class="container">
//         <h1>Habit Tracker</h1>
//         <button id="addHabitButton">Add Habit</button>
//         <div id="habitsContainer">
//           ${this.habits.map((habit, habitIndex) => html`
//             <div class="habit">
//               <div class="habit-name">${habit.name}</div>
//               <div class="circles">
//                 ${habit.days.map((done, dayIndex) => html`
//                   <div
//                     class="circle ${done ? 'done' : ''}"
//                     @click=${() => this.#toggleDay(habitIndex, dayIndex)}
//                   ></div>
//                 `)}
//               </div>
//             </div>
//           `)}
//         </div>
//       </div>
//     `;
//     render(body, document.getElementById('root'));
//   }
// }

// export default HabitTracker;


