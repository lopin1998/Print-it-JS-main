const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/** Initailisation Variable */
let index = 0
const img = document.querySelector("#img-slider")
const marcel = document.querySelector('#marcel')
const roger = document.querySelector('#roger')
let dot = null
const dotCtn = document.querySelector('#allDot')
const text = document.querySelector('#tagline')

/** Fn de taitement */
const nextImage = (position) => {
	console.log(dot)
	console.log(dot[position])
	for (elem of dot) {
		elem.classList.remove("dot_selected")
	}
	dot[position].classList.add("dot_selected")
	console.log("nextImage à reçu ", position)
	img.src = './assets/images/slideshow/' + slides[position].image
	text.innerHTML = slides[position].tagLine
}

/** Initalisation page */
for (elem of slides) {
	dotCtn.insertAdjacentHTML("beforeend", "<div class='dot'></div>")
}
dot = document.querySelectorAll('.dot')
nextImage(index)

/** Ecoute click */
marcel.addEventListener('click', () => {
	index++

	console.log(slides.lenght)
	if (index == slides.lenght) {
		console.log('dans le if')
		index = 0
	}

	nextImage(index)
})
roger.addEventListener('click', () => {
	index--

	if (index < 0) {
		console.log("case depart")
		index = 3

	}

	nextImage(index)
})