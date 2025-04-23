// Selecciona el elemento con la clase "navbar" y 
// almacena su posición superior (offsetTop) 
// en la variable navbarOffsetTop.
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop; // Almacena la distancia desde la parte superior del 'navbar' hasta el borde superior del elemento padre más cercano.

// Selecciona todos los elementos 'seccion' y 
// todos los elementos con la clase "navbar-link".
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

// Selecciona el elemento con la clase "progress-bar-wrapper" y 
const progressBar = document.querySelector(".progress-bar-wrapper");
// define un array con porcentajes para la barra de progreso.
const progressBarPercentage = [75, 75, 70, 70, 80, 70, 80, 70, 67]

// Agrega un event listener al evento de desplazamiento (scroll) 
// en la ventana que llama a la función funcionPrincipal.
window.addEventListener("scroll", () => {
    mainFunction()
});

const mainFunction = () => {
    // Verifica si la posición de desplazamiento vertical (scrollY) es mayor
    //  o igual a la posición superior de la barra de navegación.
  // Si es así, agrega la clase "sticky" a la barra de navegación, 
  // de lo contrario, la elimina.
    if (window.scrollY >= navbarOffsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    // Itera sobre cada sección y verifica si la posición de desplazamiento vertical (pageYOffset) es mayor o igual a
    // la posición superior de la sección - 10. Si es así, actualiza las clases de los enlaces de la barra de navegación.
    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("change");
            });
            navbarLinks[i].classList.add("change");
        }
    });

    // Verifica si la posición de desplazamiento vertical más la altura de la ventana (window.innerHeight) es mayor o igual
  // a la posición superior de la barra de progreso. Si es así, actualiza el ancho y el texto de los elementos con la clase "porcentaje-progreso".
    if (window.pageYOffset + window.innerHeight >= progressBar.offsetTop) {

        document.querySelectorAll(".percentage-progress").forEach((el, i) => {
            el.style.width = `${progressBarPercentage[i]}%`;
            el.previousElementSibling.firstElementChild.textContent =
            progressBarPercentage[i];
        
        });
    }
}


// Llama a la función principal para ejecutarla inicialmente.
mainFunction();

// Agrega un event listener al evento de cambio de tamaño de la ventana (resize) que recarga la página.
window.addEventListener("resize", () => {
    window.location.reload();
});