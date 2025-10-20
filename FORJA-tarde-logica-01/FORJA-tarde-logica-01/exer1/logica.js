function mostrarNome() {
      const nome = document.getElementById('nomeInput').value;
      document.getElementById('resultado').innerText = 'Olá, ' + nome + '!';
    }