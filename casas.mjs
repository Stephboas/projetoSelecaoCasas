// Aguarde o carregamento completo do documento antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    // Selecione todos os elementos com a classe .personagem pergaminho
    const personagens = document.querySelectorAll('.personagem');

    // Adicione um evento de mouseover a cada personagem
    personagens.forEach(personagem => {
        // Encontre o elemento .tooltip dentro de cada personagem
        const tooltip = personagem.querySelector('.tooltip');

        // Adicione um evento de mouseover para mostrar o tooltip
        personagem.addEventListener('mouseover', () => {
            tooltip.style.opacity = 1;
        });

        // Adicione um evento de mouseout para esconder o tooltip
        personagem.addEventListener('mouseout', () => {
            tooltip.style.opacity = 0;
        });
    });
});
