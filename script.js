let menuVisible = false;

//funcion que oculta o muestra el menu
function mostrarocultarmenu() {
    if (menuVisible) {
        document.getElementById('nav').classList = '';
        menuVisible = false;
    } else {
        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menu una vez que se selecciona una opcion
    document.getElementById('nav').classList = '';
    menuVisible = false;
}

// funcion que aplica las animaciones a las habilidades
function efectoHabilidades() {
    var skills = document.getElementById('skills');
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanciaSkills >= 300) {
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('html');
        habilidades[1].classList.add('css');
        habilidades[2].classList.add('javascript');
        habilidades[3].classList.add('python');
        habilidades[4].classList.add('flask');
        habilidades[5].classList.add('mysql');
        habilidades[6].classList.add('trabajo');
        habilidades[7].classList.add('comunicacion');
        habilidades[8].classList.add('resolucion');
        habilidades[9].classList.add('adaptabilidad');
        habilidades[10].classList.add('creatividad');
        habilidades[11].classList.add('pensamiento');
        }
    }   


// detecto el scrolling para la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}