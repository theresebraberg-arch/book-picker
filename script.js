let answers = {
  mood: "",
  genre: "",
  energy: "",
  length: ""
};

let lastPickedTitle = "";

const books = [
  {title:"Love and Other Words", author:"Christina Lauren", mood:"love", genre:"romance", energy:"low", length:"long", vibe:"Second chance heartbreak", ritual:"Filt + te"},
  {title:"Things We Never Got Over", author:"Lucy Score", mood:"love", genre:"romance", energy:"medium", length:"long", vibe:"Grumpy x sunshine", ritual:"Cozy vibes"},
  {title:"The Inmate", author:"Freida McFadden", mood:"thrill", genre:"thriller", energy:"medium", length:"short", vibe:"Obehaglig", ritual:"Kväll"},
  {title:"Divine Rivals", author:"Rebecca Ross", mood:"cozy", genre:"fantasy", energy:"low", length:"long", vibe:"Romance + brev", ritual:"Ljus + filt"},
  {title:"If He Had Been With Me", author:"Laura Nowlin", mood:"cry", genre:"romance", energy:"medium", length:"long", vibe:"Tomhet efteråt", ritual:"Läs i tystnad"}
];

function startGame(){
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");

  renderQuestion();
}

function renderQuestion(){
  document.getElementById("questionArea").innerHTML = `
    <p>Hur vill du känna?</p>
    <button onclick="setMood('cry')">😭</button>
    <button onclick="setMood('love')">😍</button>
    <button onclick="setMood('thrill')">😱</button>
    <button onclick="setMood('cozy')">😌</button>
  `;
}

function setMood(m){
  answers.mood = m;
  showResult();
}

function pickBook(){
  let filtered = books.filter(b => b.mood === answers.mood);

  if(filtered.length === 0){
    filtered = books;
  }

  return filtered[Math.floor(Math.random()*filtered.length)];
}

function showResult(){
  const book = pickBook();
  lastPickedTitle = book.title;

  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  document.getElementById("bookTitle").textContent = book.title;
  document.getElementById("bookAuthor").textContent = book.author;
  document.getElementById("bookVibe").textContent = book.vibe;
  document.getElementById("bookRitual").textContent = book.ritual;
}

function showAnother(){
  showResult();
}

function playAgain(){
  location.reload();
}
