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
    `;
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

  let filtered = books.filter(b => b.mood === mood);
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
