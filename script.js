let step = 0;

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
        <button onclick="next('genre','romantasy')">Romantasy 💜</button>
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

  // 💔 CRY
  {title:"If Only I Had Told Her", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"You've Reached Sam", mood:"cry", genre:"romance", energy:"low", length:"short"},
  {title:"Reminders of Him", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"All Your Perfects", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"Before I Let Go", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"It Ends With Us", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"It Starts With Us", mood:"cry", genre:"romance", energy:"low", length:"long"},
  {title:"The Last Letter", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"A Thousand Boy Kisses", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"Pack Up the Moon", mood:"cry", genre:"romance", energy:"low", length:"long"},
  {title:"The Simple Wild", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"Full Tilt", mood:"cry", genre:"romance", energy:"medium", length:"short"},
  {title:"Me Before You", mood:"cry", genre:"romance", energy:"low", length:"long"},
  {title:"The Light We Lost", mood:"cry", genre:"romance", energy:"medium", length:"long"},
  {title:"November 9", mood:"cry", genre:"romance", energy:"low", length:"long"},

  // 😍 ROMANCE
  {title:"Love and Other Words", mood:"love", genre:"romance", energy:"low", length:"long"},
  {title:"Things We Never Got Over", mood:"love", genre:"romance", energy:"medium", length:"long"},
  {title:"Things We Hide From The Light", mood:"love", genre:"romance", energy:"medium", length:"long"},
  {title:"Funny Story", mood:"love", genre:"romance", energy:"low", length:"short"},
  {title:"Book Lovers", mood:"love", genre:"romance", energy:"medium", length:"long"},
  {title:"Better Than the Movies", mood:"love", genre:"romance", energy:"low", length:"short"},
  {title:"Beach Read", mood:"love", genre:"romance", energy:"low", length:"long"},
  {title:"People We Meet on Vacation", mood:"love", genre:"romance", energy:"low", length:"long"},
  {title:"The Unhoneymooners", mood:"love", genre:"romance", energy:"low", length:"short"},
  {title:"Every Summer After", mood:"love", genre:"romance", energy:"medium", length:"long"},
  {title:"Twisted Love", mood:"love", genre:"romance", energy:"medium", length:"long"},
  {title:"Twisted Games", mood:"love", genre:"romance", energy:"medium", length:"long"},
  {title:"Twisted Hate", mood:"love", genre:"romance", energy:"high", length:"long"},
  {title:"Twisted Lies", mood:"love", genre:"romance", energy:"medium", length:"long"},
  {title:"The Fine Print", mood:"love", genre:"romance", energy:"low", length:"long"},
  {title:"Final Offer", mood:"love", genre:"romance", energy:"medium", length:"long"},

  // 😱 THRILLER
  {title:"Hidden Pictures", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"The Coworker", mood:"thrill", genre:"thriller", energy:"low", length:"short"},
  {title:"None of This Is True", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"The Only One Left", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"Rock Paper Scissors", mood:"thrill", genre:"thriller", energy:"low", length:"short"},
  {title:"The Silent Patient", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"Verity", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"Local Woman Missing", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"The Paris Apartment", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"Then She Was Gone", mood:"thrill", genre:"thriller", energy:"low", length:"long"},
  {title:"The Family Upstairs", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"The Night She Disappeared", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},
  {title:"Behind Closed Doors", mood:"thrill", genre:"thriller", energy:"medium", length:"short"},
  {title:"The Housemaid's Secret", mood:"thrill", genre:"thriller", energy:"medium", length:"short"},
  {title:"The Perfect Marriage", mood:"thrill", genre:"thriller", energy:"medium", length:"long"},

  // 😌 FANTASY / COZY
  {title:"Legends & Lattes", mood:"cozy", genre:"fantasy", energy:"low", length:"short"},
  {title:"Bookshops & Bonedust", mood:"cozy", genre:"fantasy", energy:"low", length:"short"},
  {title:"Assistant to the Villain", mood:"cozy", genre:"fantasy", energy:"low", length:"short"},
  {title:"Emily Wilde’s Encyclopaedia of Faeries", mood:"cozy", genre:"fantasy", energy:"low", length:"long"},
  {title:"Emily Wilde’s Map of the Otherlands", mood:"cozy", genre:"fantasy", energy:"medium", length:"long"},
  {title:"Half a Soul", mood:"cozy", genre:"fantasy", energy:"low", length:"short"},
  {title:"The Very Secret Society of Irregular Witches", mood:"cozy", genre:"fantasy", energy:"low", length:"long"},
  {title:"A Psalm for the Wild-Built", mood:"cozy", genre:"fantasy", energy:"low", length:"short"},
  {title:"A Prayer for the Crown-Shy", mood:"cozy", genre:"fantasy", energy:"low", length:"short"},
  {title:"The House in the Cerulean Sea", mood:"cozy", genre:"fantasy", energy:"low", length:"long"},
  {title:"The Night Circus", mood:"cozy", genre:"fantasy", energy:"medium", length:"long"},
  {title:"The Starless Sea", mood:"cozy", genre:"fantasy", energy:"medium", length:"long"},

  // 💜 ROMANTASY
  {title:"Divine Rivals", mood:"love", genre:"romantasy", energy:"low", length:"long"},
  {title:"Ruthless Vows", mood:"love", genre:"romantasy", energy:"medium", length:"long"},
  {title:"A Court of Thorns and Roses", mood:"love", genre:"romantasy", energy:"medium", length:"long"},
  {title:"A Court of Mist and Fury", mood:"love", genre:"romantasy", energy:"high", length:"long"},
  {title:"A Court of Wings and Ruin", mood:"love", genre:"romantasy", energy:"high", length:"long"},
  {title:"From Blood and Ash", mood:"love", genre:"romantasy", energy:"medium", length:"long"},
  {title:"A Kingdom of Flesh and Fire", mood:"love", genre:"romantasy", energy:"medium", length:"long"},
  {title:"The Serpent and the Wings of Night", mood:"love", genre:"romantasy", energy:"medium", length:"long"},
  {title:"The Ashes and the Star-Cursed King", mood:"love", genre:"romantasy", energy:"medium", length:"long"},
  {title:"One Dark Window", mood:"cozy", genre:"romantasy", energy:"medium", length:"long"},
  {title:"Two Twisted Crowns", mood:"cozy", genre:"romantasy", energy:"medium", length:"long"},
  {title:"A Dawn of Onyx", mood:"love", genre:"romantasy", energy:"medium", length:"long"},
  {title:"The Bridge Kingdom", mood:"love", genre:"romantasy", energy:"medium", length:"long"},
  {title:"The Traitor Queen", mood:"love", genre:"romantasy", energy:"medium", length:"long"},
  {title:"These Hollow Vows", mood:"love", genre:"romantasy", energy:"medium", length:"long"}
];

function showResult(){

  let filtered = books;

  filtered = filtered.filter(b => b.mood === answers.mood);

  if(answers.genre !== "any"){
    let temp = filtered.filter(b => b.genre === answers.genre);
    if(temp.length) filtered = temp;
  }

  let tempEnergy = filtered.filter(b => b.energy === answers.energy);
  if(tempEnergy.length) filtered = tempEnergy;

  if(answers.length !== "any"){
    let tempLength = filtered.filter(b => b.length === answers.length);
    if(tempLength.length) filtered = tempLength;
  }

  const book = filtered[Math.floor(Math.random()*filtered.length)];

  document.getElementById("questionArea").innerHTML = `
    <h2>✨ Din bok ✨</h2>
    <p style="font-size:20px; font-weight:bold;">${book.title}</p>
    <br>
    <button onclick="location.reload()">Kör igen</button>
  `;
}

// start
renderQuestion();
