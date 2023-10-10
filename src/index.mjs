const burgerIcon = document.querySelector('.burger-icon');
const menuLateralContainer = document.querySelector('.menu-lateral-container');

burgerIcon.addEventListener('click', () => {
    menuLateralContainer.classList.toggle('menu-ativo');

    console.log('Menu ativado: ', menuLateralContainer);
});

menuLateralContainer.addEventListener('mouseleave', () => {
    menuLateralContainer.classList.remove('menu-ativo');
});

$(document).ready(function() {
    $(".search-button").click(function() {
        $(".search-box").toggleClass("expanded");
        if ($(".search-box").hasClass("expanded")) {
            $(".search-input").focus(); // Coloca o foco no campo de entrada ao expandir
        }
    });
    
    $(".search-input").blur(function() {
        $(".search-box").removeClass("expanded");
    });
});
