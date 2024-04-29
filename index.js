// Array de textos para serem exibidos e reexibidos
var textos = [
    "React",
    'JavaScript',
    'Java',
    'SpingBoot',
    'HTML',
    'CSS',
    'Postgree'
];

// Índice do texto atual
var indiceTextoAtual = 0;

// Tempo de espera entre cada caractere (em milissegundos)
var tempoEspera = 90; // Tempo de espera entre os caracteres

// Elemento onde o texto será exibido
var elementoNome = document.getElementById('nome');

// Função para exibir o texto com efeito de digitação
function digitarTexto() {
    var textoAtual = "";
    var texto = textos[indiceTextoAtual];
    var i = 0;
    var intervalo = setInterval(function() {
        textoAtual += texto[i];
        elementoNome.textContent = textoAtual;
        elementoNome.style.color = '#332F2F'; // Define a cor enquanto digita
        i++;
        if (i >= texto.length) {
            clearInterval(intervalo);
            setTimeout(reescreverTexto, 100); // Espera 100 milissegundos antes de começar a reescrever o texto
        }
    }, tempoEspera);
}

// Função para reescrever o texto
function reescreverTexto() {
    var texto = textos[indiceTextoAtual];
    var i = texto.length - 1;
    var intervalo = setInterval(function() {
        var textoAtual = texto.substring(0, i + 1);
        elementoNome.textContent = textoAtual;
        elementoNome.style.color = '#332F2F'; // Define a cor enquanto reescreve
        i--;
        if (i < 0) {
            clearInterval(intervalo);
            indiceTextoAtual = (indiceTextoAtual + 1) % textos.length; // Avança para o próximo texto no array
            digitarTexto(); // Começa a exibir o próximo texto imediatamente
        }
    }, tempoEspera / 2); // Tempo de espera reduzido para a metade
}


// Inicia o efeito de digitação com o primeiro texto do array
digitarTexto();

function toggleOptions(id) {
    var buttons = document.getElementsByClassName('selecao_botao');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id === id) {
            buttons[i].classList.add('selected'); // Adiciona a classe 'selected' ao botão clicado
        } else {
            buttons[i].classList.remove('selected'); // Remove a classe 'selected' dos outros botões
        }
    }

    var options = document.getElementsByClassName('opcoes');
    for (var i = 0; i < options.length; i++) {
        if (options[i].id === id) {
            options[i].style.display = 'block';
        } else {
            options[i].style.display = 'none';
        }
    }
}


//HEADER

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', this.window.scrollY> 0)
})


//darkmode
const chk = document.getElementById('chk');
const header = document.getElementById('header');
const modoTexto = document.getElementById('modoTexto');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  header.classList.toggle('dark');
  modoTexto.textContent = chk.checked ? 'Dark' : 'Light';
});


//toggle menu

function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuButton = document.querySelector(".menu-hamburguer");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuButton.textContent = "☰"; // Altera de "x" para "☰" quando o menu é fechado
    } else {
        menu.style.display = "block";
        menuButton.textContent = "✕"; // Altera de "☰" para "x" quando o menu é aberto
    }
}


//CARROSSEL
let slides = document.querySelectorAll('.slideshow');
        let dots = document.querySelectorAll('.dot');
        let slideIndex = 1;
        let timeoutID;
        const showSlides = (n) => {
            let i;
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }
            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            clearTimeout(timeoutID);
            timeoutID = setTimeout(autoSlides, 4000);
        };
        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        };
        const currentSlide = (n) => {
            showSlides(slideIndex = n);
        };
        function autoSlides() {
            let i;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            timeoutID = setTimeout(autoSlides, 4000);
        }
        autoSlides();

