// script.js

// 1. Display random Node.js facts
const facts = [
  "Node.js uses Chrome's V8 JavaScript engine.",
  "npm is the world's largest software registry.",
  "You can use Node.js to build web servers and APIs.",
  "Yarn was created by Facebook as an alternative to npm.",
  "Node.js is single-threaded but uses an event-driven model."
];

function showRandomFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = randomFact;
}

// 2. Highlight <code> blocks slightly when hovered
document.querySelectorAll('code').forEach(code => {
  code.addEventListener('mouseover', () => {
    code.style.background = '#333';
    code.style.color = '#fff';
  });
  code.addEventListener('mouseout', () => {
    code.style.background = '#74a4d8';
    code.style.color = '#000';
  });
});


