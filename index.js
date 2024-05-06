// Array de textos para serem exibidos e reexibidos
var textos = [
    "React",
    'JavaScript',
    'Java',
    'SpingBoot',
    'Postgree',
    'Python',
    'Bootstrap 5'
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
        elementoNome.style.color = '#332F2F'; 
        i++;
        if (i >= texto.length) {
            clearInterval(intervalo);
            setTimeout(reescreverTexto, 100); 
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
        elementoNome.style.color = '#332F2F'; 
        i--;
        if (i < 0) {
            clearInterval(intervalo);
            indiceTextoAtual = (indiceTextoAtual + 1) % textos.length; 
            digitarTexto(); 
        }
    }, tempoEspera / 2); 
}


// Inicia o efeito de digitação com o primeiro texto do array
digitarTexto();

function toggleOptions(opcao) {
    var buttons = document.getElementsByClassName('selecao_botao');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('selected')) {
            buttons[i].classList.remove('selected'); 
        }
    }

    var selectedButton = document.querySelector('.selecao_botao.' + opcao);
    selectedButton.classList.add('selected');

    var options = document.getElementsByClassName('opcoes');
    for (var i = 0; i < options.length; i++) {
        if (options[i].id === opcao) {
            options[i].style.display = 'block';
        } else {
            options[i].style.display = 'none';
        }
    }

    // Mostra a barra
    var barraSelecionada = document.getElementById('barra_selecionada');
    barraSelecionada.style.display = 'block';
    
    // Ajusta a posição da barra
    barraSelecionada.style.left = selectedButton.offsetLeft + 'px';
}



function toggleOptions(opcao) {
    var buttons = document.getElementsByClassName('selecao_botao');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('selected')) {
            buttons[i].classList.remove('selected'); 
        }
    }

    var selectedButton = document.querySelector('.selecao_botao.' + opcao);
    selectedButton.classList.add('selected');

    var options = document.getElementsByClassName('opcoes');
    for (var i = 0; i < options.length; i++) {
        if (options[i].id === opcao) {
            options[i].style.display = 'block';
        } else {
            options[i].style.display = 'none';
        }
    }

    // Mostra a barra
    var barraSelecionada = document.getElementById('barra_selecionada');
    barraSelecionada.style.display = 'block';
    
    // Ajusta a posição da barra
    barraSelecionada.style.left = selectedButton.offsetLeft + 'px';
}


//HEADER

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', this.window.scrollY> 0)
})


const chk = document.getElementById('chk');
const modoTexto = document.getElementById('modoTexto');
const imagens = document.querySelectorAll('#img_rede', '#menu-hamburguer');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  modoTexto.textContent = chk.checked ? 'Dark' : 'Light';

  if (chk.checked) {
    // Modo escuro
    document.documentElement.style.setProperty('--cor-fonte', '#fff');
    document.documentElement.style.setProperty('--cor-background', '#333');
    
    // Mudança na cor das imagens para branco
    imagens.forEach(imagem => {
      imagem.style.filter = "brightness(0) invert(1)";
    });

    // Mudança na cor do botão do menu hamburguer para branco
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    menuHamburguer.style.color = '#fff';
  } else {
    // Modo claro
    document.documentElement.style.setProperty('--cor-fonte', '#333');
    document.documentElement.style.setProperty('--cor-background', '#fff');

    // Revertendo a cor das imagens
    imagens.forEach(imagem => {
      imagem.style.filter = "none";
    });

    // Revertendo a cor do botão do menu hamburguer
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    menuHamburguer.style.color = '#000'; // Cor original do botão (preto)
  }
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


document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuButton = document.querySelector(".menu-hamburguer");

    // Verifica se o clique ocorreu dentro do menu ou do botão do menu
    var isClickInsideMenu = menu.contains(event.target);
    var isClickInsideMenuButton = menuButton.contains(event.target);

    // Se o clique não ocorreu dentro do menu ou do botão do menu, fecha o menu
    if (!isClickInsideMenu && !isClickInsideMenuButton) {
        menu.style.display = "none";
        menuButton.textContent = "☰"; // Altera o ícone do botão para ☰
    }
});



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

//habilidades
function toggleOptions(id) {
    // Remover a classe 'selected' de todos os botões
    const botoes = document.querySelectorAll('.selecao_botao');
    botoes.forEach(botao => {
        botao.classList.remove('selected');
    });

    const botaoClicado = document.querySelector(`button[onclick="toggleOptions('${id}')"]`);
    botaoClicado.classList.add('selected');

    // Mostrar a opção correspondente e ocultar as outras
    const opcoes = document.querySelectorAll('.opcoes');
    opcoes.forEach(opcao => {
        if (opcao.id === id) {
            opcao.style.display = 'block';
        } else {
            opcao.style.display = 'none';
        }
    });
}
