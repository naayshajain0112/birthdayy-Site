const lightsBtn = document.getElementById("lights-btn");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

const promiseQuestion = document.getElementById("promise-question");
const promiseYesBtn = document.getElementById("promise-yes-btn");
const promiseNoBtn = document.getElementById("promise-no-btn");

const bestfriendQuestion = document.getElementById("bestfriend-question");
const bestfriendYesBtn = document.getElementById("bestfriend-yes-btn");
const bestfriendNoBtn = document.getElementById("bestfriend-no-btn");

const readyQuestion = document.getElementById("ready-question");
const readyYesBtn = document.getElementById("ready-yes-btn");
const readyNoBtn = document.getElementById("ready-no-btn");

const decor = document.getElementById("decor");
const surpriseBtn = document.getElementById("surprise-btn");
const surprise = document.getElementById("surprise");
const music = document.getElementById("music");
const decorConfetti = document.getElementById("decor-confetti");
const scene = document.querySelector(".scene");

decor.classList.add("fade");
surprise.classList.add("fade");


// Step 1: Turn on lights
lightsBtn.addEventListener("click", () => {
  document.body.classList.add("lit");
  lightsBtn.classList.add("hidden");
  question.classList.remove("hidden");
});

// Step 2: First question
yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  promiseQuestion.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  noBtn.textContent = "You can’t escape 😜";
  setTimeout(() => {
    noBtn.textContent = "No is not an option😢";
  }, 2000);
});

// Step 2.5: Promise to smile
promiseYesBtn.addEventListener("click", () => {
  promiseQuestion.classList.add("hidden");
  bestfriendQuestion.classList.remove("hidden");
});

promiseNoBtn.addEventListener("click", () => {
  promiseNoBtn.textContent = "You better smile 😜";
  setTimeout(() => {
    promiseNoBtn.textContent = "No😢";
  }, 2000);
});

// Step 2.75: Best friend question
bestfriendYesBtn.addEventListener("click", () => {
  bestfriendQuestion.classList.add("hidden");
  readyQuestion.classList.remove("hidden");
});

bestfriendNoBtn.addEventListener("click", () => {
  bestfriendNoBtn.textContent = "option hi nahi hai tere paas lol";
  setTimeout(() => {
    bestfriendNoBtn.textContent = "Never😜";
  }, 2000);
});

// Step 3: Are you ready?
readyYesBtn.addEventListener("click", () => {
  readyQuestion.classList.add("hidden");
  decor.classList.remove("hidden");

  // Play music
  music.play().catch(err => console.log("Autoplay blocked:", err));

  // Generate random balloons continuously
  setInterval(generateRandomBalloons, 500);

  // Confetti behind banner
  const confettiInstance = confetti.create(decorConfetti, { resize: true, useWorker: true });
  setInterval(() => {
    confettiInstance({
      particleCount: 30,
      spread: 120,
      origin: { y: 0.2 },
      shapes: ['circle', 'square', 'heart']
    });
  }, 400);
});

readyNoBtn.addEventListener("click", () => {
  readyNoBtn.textContent = "Oh come on chalnaa 😜";
  setTimeout(() => {
    readyNoBtn.textContent = "Nope😜";
  }, 2000);
});

// Step 4: Surprise reveal
surpriseBtn.addEventListener("click", () => {
  decor.classList.add("hidden");
  surprise.classList.remove("hidden");

  const myConfetti = confetti.create(document.getElementById("confetti-canvas"), { resize: true, useWorker: true });
  myConfetti({ particleCount: 150, spread: 120, origin: { y: 0.6 } });
  setInterval(() => {
    myConfetti({ particleCount: 50, spread: 120, origin: { y: 0.6 } });
  }, 1000);

  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 90 + "vw";
    balloon.style.animationDuration = (6 + Math.random() * 3) + "s";
    balloon.style.background = `linear-gradient(135deg, ${randomColor()}, ${randomColor()})`;
    document.getElementById("flying-balloons").appendChild(balloon);
  }
});

// Hearts floating animation
function spawnHearts() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(spawnHearts, 500);

// Generate random balloons
function generateRandomBalloons() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * 90 + "vw";
  balloon.style.background = `linear-gradient(135deg, ${randomColor()}, ${randomColor()})`;
  balloon.style.animationDuration = (5 + Math.random() * 3) + "s";
  scene.appendChild(balloon);
  setTimeout(() => balloon.remove(), 8000);
}

// Random color generator
function randomColor() {
  const colors = ["#ffd633", "#ffcc00", "#ff6b6b", "#ff8c42", "#70ffcb", "#4dabf7", "#c86dd7"];
  return colors[Math.floor(Math.random() * colors.length)];
}
// After showing image and confetti
