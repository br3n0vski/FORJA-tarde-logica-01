 function verificarIdade() {
      const idade = parseInt(document.getElementById('idadeInput').value);
      const resultadoDiv = document.getElementById('resultado');

      if (isNaN(idade)) {
        resultadoDiv.textContent = 'Por favor, digite uma idade válida.';
      } else if (idade < 18) {
        resultadoDiv.textContent = 'Você é menor de idade.';
      } else {
        resultadoDiv.textContent = 'Você é maior de idade.';
      }
    }