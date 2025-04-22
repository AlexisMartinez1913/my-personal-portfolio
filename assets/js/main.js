// Selecciona el elemento con la clase "navbar" y 
// almacena su posición superior (offsetTop) 
// en la variable navbarOffsetTop.
const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop; // Almacena la distancia desde la parte superior del 'navbar' hasta el borde superior del elemento padre más cercano.

// Selecciona todos los elementos 'seccion' y 
// todos los elementos con la clase "navbar-link".
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

// Selecciona el elemento con la clase "progress-bar-wrapper" y 
// define un array con porcentajes para la barra de progreso.
const progressBar = document.querySelector('.progress-bar-wrapper');
const progressBarPercentage = [80, 80, 70, 70, 80, 70, 80, 80]