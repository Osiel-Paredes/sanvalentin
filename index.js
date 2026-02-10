const slides = document.querySelectorAll('.slide')
const nextBtn = document.getElementById('nextBtn')
const progressBar = document.getElementById('progressBar')
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const result = document.getElementById('result')
const heartsContainer = document.querySelector('.hearts')
const celebration = document.getElementById('celebration')

let current = 0

function updateSlide() {
  slides.forEach(s => s.classList.remove('active'))
  slides[current].classList.add('active')
  progressBar.style.width = ((current + 1) / slides.length) * 100 + '%'
  if (current === slides.length - 1) nextBtn.style.display = 'none'
}

nextBtn.addEventListener('click', () => {
  if (current < slides.length - 1) {
    current++
    updateSlide()
  }
})

updateSlide()

// NO huye 😈
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth)
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight)
  noBtn.style.position = 'absolute'
  noBtn.style.left = x + 'px'
  noBtn.style.top = y + 'px'
})

// SÍ con celebración 🎉😂
yesBtn.addEventListener('click', () => {
  result.classList.remove('hidden')
  yesBtn.style.display = 'none'
  noBtn.style.display = 'none'
  launchCelebration()
})

// Corazones normales
function createHeart() {
  const heart = document.createElement('span')
  heart.innerHTML = '💖'
  heart.style.left = Math.random() * 100 + 'vw'
  heart.style.fontSize = Math.random() * 20 + 15 + 'px'
  heart.style.animationDuration = Math.random() * 3 + 3 + 's'
  heartsContainer.appendChild(heart)
  setTimeout(() => heart.remove(), 6000)
}
setInterval(createHeart, 300)

// Celebración cagada 😂💘
function launchCelebration() {
  celebration.classList.remove('hidden')
  for (let i = 0; i < 40; i++) {
    const emoji = document.createElement('span')
    emoji.innerHTML = ['💖','😍','🥰','🎉','💘'][Math.floor(Math.random()*5)]
    emoji.style.left = Math.random() * 100 + 'vw'
    emoji.style.animationDelay = Math.random() + 's'
    celebration.appendChild(emoji)
    setTimeout(() => emoji.remove(), 2000)
  }
}
