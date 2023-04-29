    const btnIniciar = document.getElementById('btn-iniciar');
      const divSelecao = document.getElementById('selecao-personagem');
      const btnMasculino = document.getElementById('btn-masculino');
      const btnFeminino = document.getElementById('btn-feminino');
      
      btnIniciar.addEventListener('click', function() {
        document.getElementById('tela-inicial').style.display = 'none';
        document.body.style.backgroundColor = '#F7EDE2';

        divSelecao.style.display = 'flex';
      });
      
      btnMasculino.addEventListener('click', function() {
        // ação quando selecionar personagem masculino
      });
      
      btnFeminino.addEventListener('click', function() {
        // ação quando selecionar personagem feminino
      });
      btnMasculino.addEventListener('click', function() {
  // exibe a div do personagem selecionado e oculta a tela de seleção
  divSelecao.style.display = 'none';
  personagemSelecionado.style.display = 'block';

  // atualiza a imagem e a descrição do personagem selecionado
  imagemPersonagem.src = 'personagemprincipal.png';
  descricaoPersonagem.getElementsByTagName('h3')[0].textContent = 'Marcos';
  descricaoPersonagem.getElementsByTagName('p')[0].textContent = 'Descrição do personagem masculino.';
});

btnFeminino.addEventListener('click', function() {
  // exibe a div do personagem selecionado e oculta a tela de seleção
  divSelecao.style.display = 'none';
  personagemSelecionado.style.display = 'block';

  // atualiza a imagem e a descrição do personagem selecionado
  imagemPersonagem.src = 'feminina.avif';
    divSelecao.style.display = 'none';
  personagemSelecionado.style.display = 'block';
  descricaoPersonagem.getElementsByTagName('h3')[0].textContent = 'Julia';
  descricaoPersonagem.getElementsByTagName('p')[0].textContent = 'Descrição do personagem feminino.';
});