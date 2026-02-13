document.addEventListener("DOMContentLoaded", function(){

const scene = document.getElementById("scene");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typeText = document.getElementById("typeText");
const finalMessage = document.getElementById("finalMessage");
const music = document.getElementById("bgMusic");
const petals = document.getElementById("petals");

const text = `Te conocí en un momento en el que ni siquiera sabía bien qué quería.
No estaba buscando cambiar… pero llegaste tú.

Admiro tu corazón.
Tu forma tan noble de ver la vida.

Contigo he aprendido a ser mejor persona.
Más empático. Más consciente.

Desde que estás conmigo,
me siento más feliz.

Gracias por ser tú, por compartir tu tiempo conmigo, por hacerme sentir tan especial.

Te amo.`;

setTimeout(()=>{
scene.classList.remove("hidden");
},2000);

envelope.addEventListener("click",()=>{

envelope.classList.add("open");

setTimeout(()=>{
envelope.style.display="none";
letter.classList.remove("hidden");
music.play().catch(()=>{});
revealText();
createPetals();
},600);

});

function revealText(){
typeText.innerHTML = text.replace(/\n/g, "<br>");

setTimeout(()=>{
typeText.classList.add("show-text");
},200);
}

function createPetals(){
setInterval(()=>{
const petal=document.createElement("span");
petal.innerHTML="🌸";
petal.style.left=Math.random()*100+"vw";
petal.style.animationDuration=(Math.random()*3+3)+"s";
petals.appendChild(petal);
setTimeout(()=>petal.remove(),6000);
},300);
}

});


function goToMemories(){
  window.location.href = "recuerdos.html";
}
