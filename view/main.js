// Función que se activa al terminar de cargar (Header)
window.onload = function() {
	let animacion = document.getElementById('animatedstatic')

	let animacion2 = document.getElementById('animatedstatic2')

	animacion.style.animation = 'mover 1s ease-out';
	animacion2.style.animation = 'mover2 1s ease-out';
}

// Funcion para opacidad del footer (logo)
window.addEventListener('scroll', function(){

	let animacion = document.getElementById('logoRecoveryloid')
	let posicionObject = animacion.getBoundingClientRect().top;

	let tamañoPantalla = window.innerHeight;

	if (posicionObject < tamañoPantalla){
		animacion.style.animation = 'logo 5s ease-out'
	}

})
