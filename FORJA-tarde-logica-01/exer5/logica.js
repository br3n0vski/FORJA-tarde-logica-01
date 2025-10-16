function mostrarInformacoes() {
      const nome = document.getElementById('nome').value.trim();
      const descricao = document.getElementById('descricao').value.trim();
      const idade = document.getElementById('idade').value.trim();
      const genero = document.getElementById('genero').value;
      const hobby = document.getElementById('hobby').value.trim();
      const resultado = document.getElementById('resultado');

      if (!nome || !descricao || !idade || !genero || !hobby) {
        resultado.innerHTML = "<strong>Por favor, preencha todos os campos.</strong>";
        resultado.style.color = "red";
        return;
      }

      resultado.style.color = "black";
      resultado.innerHTML = `
        <h3>Informações do Usuário:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Gênero:</strong> ${genero}</p>
        <p><strong>Hobby preferido:</strong> ${hobby}</p>
      `;
    }