const musica = document.getElementById('musica');
musica.volume = 0.5;
const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('click', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        
        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./imagens/${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

        // Obtém a URL do áudio associada ao personagem
        const audioURL = personagem.getAttribute('data-audio');

        // Verifica se a música está tocando antes de mudar a source
        if (!musica.paused) {
            // Se estiver tocando, pausa antes de mudar a source
            musica.pause();
            musica.currentTime = 0;
        }

        // Muda a source e inicia a reprodução da música
        musica.src = audioURL;
        musica.play();
    });
});

// Adiciona o evento 'mouseleave' ao documento para pausar a música e tornar o player de áudio invisível
document.addEventListener('mouseleave', () => {
    musica.pause();
});
