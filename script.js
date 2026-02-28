let utterance;
let words = [];
let highlightTimer = null;
let startTime = 0;
let elapsedBeforePause = 0;
let totalDuration = 0;
let currentSpeed = 0.75;
let isPaused = false;

/* ========= CONVERT TEXT ========= */
function convertText() {
  let text = document.getElementById("inputText").value.trim();
  let output = document.getElementById("outputBox");

  if (!text) {
    output.innerHTML = "";
    return;
  }

  let wordArray = text.split(/\s+/);

  output.innerHTML = wordArray
    .map(word => `<span class="word">${word}</span>`)
    .join(" ");

  words = document.querySelectorAll(".word");
}

/* ========= START SPEECH ========= */
function startSpeech() {
  let text = document.getElementById("outputBox").innerText.trim();
  if (!text) return;

  speechSynthesis.cancel();
  clearHighlight();

  isPaused = false;
  elapsedBeforePause = 0;

  currentSpeed = parseFloat(document.getElementById("speedControl").value) || 0.75;

  utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = currentSpeed;
  utterance.onend = clearHighlight;

  words = document.querySelectorAll(".word");

  totalDuration = estimateSpeechDuration(text);
  startTime = Date.now();

  // Android stability delay
  setTimeout(() => {
    speechSynthesis.speak(utterance);
    startProgressHighlight();
  }, 120);
}

/* ========= PROGRESS-BASED HIGHLIGHT ========= */
function startProgressHighlight() {
  clearInterval(highlightTimer);

  highlightTimer = setInterval(() => {
    if (isPaused) return;

    let elapsed = (Date.now() - startTime) + elapsedBeforePause;
    let progress = elapsed / totalDuration;

    let index = Math.floor(progress * words.length);

    words.forEach(w => w.classList.remove("active-word"));

    if (words[index]) {
      words[index].classList.add("active-word");
      words[index].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

    if (progress >= 1) clearHighlight();

  }, 60);
}

/* ========= SPEECH DURATION MODEL ========= */
function estimateSpeechDuration(text) {
  let wordList = text.split(/\s+/);

  let totalUnits = 0;

  wordList.forEach(word => {
    let lengthFactor = Math.max(word.length / 5, 1);
    totalUnits += lengthFactor;
  });

  let baseWPM = 160;
  let adjustedWPM = baseWPM * currentSpeed;

  return (totalUnits / adjustedWPM) * 60 * 1000;
}

/* ========= PAUSE ========= */
function pauseSpeech() {
  if (!speechSynthesis.speaking) return;

  speechSynthesis.pause();
  isPaused = true;
  elapsedBeforePause += Date.now() - startTime;

  clearInterval(highlightTimer);
}

/* ========= RESUME (FULLY FIXED) ========= */
function resumeSpeech() {
  if (!isPaused) return;

  speechSynthesis.resume();

  // Android fallback: restart from current word
  if (speechSynthesis.paused) {
    speechSynthesis.cancel();

    let remainingText = words
      .slice(getCurrentWordIndex())
      .map(w => w.innerText)
      .join(" ");

    utterance = new SpeechSynthesisUtterance(remainingText);
    utterance.rate = currentSpeed;
    utterance.onend = clearHighlight;

    speechSynthesis.speak(utterance);
  }

  isPaused = false;
  startTime = Date.now();

  startProgressHighlight();   // ⭐ critical fix
}

/* ========= GET CURRENT WORD ========= */
function getCurrentWordIndex() {
  let elapsed = elapsedBeforePause;
  let progress = elapsed / totalDuration;
  return Math.floor(progress * words.length);
}

/* ========= CLEAR ========= */
function clearHighlight() {
  clearInterval(highlightTimer);

  document.querySelectorAll(".word").forEach(w =>
    w.classList.remove("active-word")
  );
}

/* ========= SPEED CONTROL ========= */
window.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("speedControl");

  slider.addEventListener("input", function () {
    currentSpeed = parseFloat(this.value);

    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      startSpeech();
    }
  });
});