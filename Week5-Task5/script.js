// Random facts
const facts = [
  "Node.js uses Chrome's V8 JavaScript engine.",
  "npm is the world's largest software registry.",
  "Node.js is great for building real-time apps.",
  "Yarn was created as a faster, more secure alternative to npm.",
  "Node.js is single-threaded but handles async operations efficiently."
];

function showRandomFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = fact;
}

showRandomFact();

// Hover effect for inline <code>
document.querySelectorAll('code').forEach(code => {
  code.addEventListener('mouseover', () => {
    code.style.background = 'rgba(255,255,255,0.3)';
    code.style.color = '#000';
  });
  code.addEventListener('mouseout', () => {
    code.style.background = 'rgba(0,0,0,0.4)';
    code.style.color = '#fff';
  });
});
