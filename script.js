let step = 0;
let mood = "";

function renderQuestion(){

  const area = document.getElementById("questionArea");

  if(step === 0){
    area.innerHTML = `
      <h2>Hur vill du känna?</h2>
      <p class="sub">Välj kvällens huvudvibe.</p>

      <div class="button-grid">
        <button onclick="chooseMood('cry')">😭 Jag vill gråta</button>
        <button onclick="chooseMood('love')">😍 Jag vill ha kärlek</button>
        <button onclick="chooseMood('thrill')">😱 Jag vill ha spänning</button>
        <button onclick="chooseMood('cozy')">😌 Jag vill ha mys</button>
      </div>
    `;let step = 0;

let answers = {
  mood: "",
  genre: "",
  energy: "",
  length: ""
};

function renderQuestion(){

  const area = document.getElementById("questionArea");

  if(step === 0){
    area.innerHTML = `
      <h2>Hur vill du känna?</h2>
      <p class="sub">Välj kvällens vibe</p>

      <div class="button-grid">
        <button onclick="next('mood','cry')">😭 Gråta</button>
        <button onclick="next('mood','love')">😍 Kärlek</button>
        <button onclick="next('mood','thrill')">😱 Spänning</button>
        <button onclick="next('mood','cozy')">😌 Mys</button>
      </div>
    `;
  }

  else if(step === 1){
    area.innerHTML = `
      <h2>Vad är du sugen på?</h2>
      <p class="sub">Genre</p>

      <div class="button-grid">
        <button onclick="next('genre','romance')">Romance</button>
        <button onclick="next('genre','fantasy')">Fantasy</button>
        <button onclick="next('genre','thriller')">Thriller</button>
        <button onclick="next('genre','any')">Surprise</button>
      </div>
    `;
  }

  else if(step === 2){
    area.innerHTML = `
      <h2>Hur mycket energi?</h2>

      <div class="button-grid">
        <button onclick="next('energy','low')">🪫 Low effort</button>
        <button onclick="next('energy','medium')">⚡ Lagom</button>
        <button onclick="next('energy','high')">🔥 Fokus</button>
      </div>
    `;
  }

  else if(step === 3){
    area.innerHTML = `
      <h2>Hur lång bok?</h2>

      <div class="button-grid">
        <button onclick="next('length','short')">📕 Kort</button>
        <button onclick="next('length','long')">📚 Lång</button>
        <button onclick="next('length','any')">Spelar ingen roll</button>
      </div>
    `;
  }

  else {
    showResult();
  }
}

function next(key, value){
  answers[key] = value;
  step++;
  updateProgress();
  renderQuestion();
}

function updateProgress(){
  const dots = document.querySelectorAll(".dot");
  dots.forEach((d,i)=> d.classList.toggle("active", i<=step));
}

const books = [
  {title:"Love and Other Words", mood:"love", genre:"romance", energy:"low", length:"long"},
  {title:"Things We Never Got Over", mood:"love", genre:"romance", energy:"medium", length:"long"},
  {title:"The Inmate", mood:"thrill", genre:"thriller", energy:"medium", length:"short"},
  {title:"Hidden Pictures", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"Divine Rivals", mood:"cozy", genre:"fantasy", energy:"low", length:"long"},
  {title:"Assistant to the Villain", mood:"cozy", genre:"fantasy", energy:"low", length:"short"},
  {title:"If He Had Been With Me", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"You've Reached Sam", mood:"cry", genre:"romance", energy:"low", length:"short"}
];

function showResult(){

  let filtered = books.filter(b => b.mood === answers.mood);

  if(answers.genre !== "any"){
    filtered = filtered.filter(b => b.genre === answers.genre);
  }

  if(filtered.length){
    filtered = filtered.filter(b => b.energy === answers.energy);
  }

  if(filtered.length && answers.length !== "any"){
    filtered = filtered.filter(b => b.length === answers.length);
  }

  if(filtered.length === 0){
    filtered = books;
  }

  const book = filtered[Math.floor(Math.random()*filtered.length)];

  document.getElementById("questionArea").innerHTML = `
    <h2>✨ Din bok ✨</h2>
    <p style="font-size:20px; font-weight:bold;">${book.title}</p>
    <br>
    <button onclick="location.reload()">Kör igen</button>
  `;
}

renderQuestion();
  }
}

function chooseMood(m){
  mood = m;
  step++;
  updateProgress();
  showResult();
}

function updateProgress(){
  const dots = document.querySelectorAll(".dot");
  dots.forEach((d,i)=> d.classList.toggle("active", i<=step));
}

const books = [
  {title:"Love and Other Words", mood:"love"},
  {title:"The Inmate", mood:"thrill"},
  {title:"Divine Rivals", mood:"cozy"},
  {title:"If He Had Been With Me", mood:"cry"}
];

function showResult(){

  let filtered = books.filter(b => b.mood === answers.mood);
  if(filtered.length === 0) filtered = books;

  const book = filtered[Math.floor(Math.random()*filtered.length)];

  document.getElementById("questionArea").innerHTML = `
    <h2>✨ Din bok ✨</h2>
    <p>${book.title}</p>
    <br>
    <button onclick="location.reload()">Kör igen</button>
  `;
}

renderQuestion();
