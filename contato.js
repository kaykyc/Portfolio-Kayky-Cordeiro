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