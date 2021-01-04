// Función que se activa al terminar de cargar (Header)
window.onload = function() {
	let animacion = document.getElementById('animatedstatic')

	let animacion2 = document.getElementById('animatedstatic2')

	animacion.style.animation = 'moverderecho 1s ease-out';
	animacion2.style.animation = 'moverarriba 1s ease-out';
}


// Funcion para animaciones generales 
window.addEventListener('scroll', function(){

	let animacionderecha = document.getElementById('animacionderecha')
	let	animacionizquierda = document.getElementById('animacionizquierda')
	let animacionarriba = document.getElementById('animacionarriba')

	let posicionObject = animacionderecha.getBoundingClientRect().top;
	let posicionObject2 = animacionizquierda.getBoundingClientRect().top;
	let posicionObject3 = animacionarriba.getBoundingClientRect().top;


	let tamañoPantalla = window.innerHeight;

	if (posicionObject < tamañoPantalla){
		animacionderecha.style.animation = 'moverderecho 1s ease-out';
	}

	if (posicionObject2 < tamañoPantalla){
		animacionizquierda.style.animation = 'moverizquierda 1s ease-out';
	}

	if (posicionObject3 < tamañoPantalla){
		animacionarriba.style.animation = 'moverarriba 1s ease-out';
	}

})

// Funcion para opacidad del footer (logo)
window.addEventListener('scroll', function(){

	let animacion = document.getElementById('logoRecoveryloid')
	let posicionObject = animacion.getBoundingClientRect().top;
	let tamañoPantalla = window.innerHeight;

	if (posicionObject < tamañoPantalla){
		animacion.style.animation = 'logo 5s ease-out';

	}

})


window.addEventListener('scroll', function(){

	let animaciondere = document.getElementById('contenedordere')

	let posicionObject = animaciondere.getBoundingClientRect().top;

	let tamañoPantalla = window.innerHeight;

	if (posicionObject < tamañoPantalla){
		animaciondere.style.animation = 'moverderecho 1s ease-out';
	}
})