function calcularMedia() {
      const n1 = parseFloat(document.getElementById('nota1').value);
      const n2 = parseFloat(document.getElementById('nota2').value);
      const n3 = parseFloat(document.getElementById('nota3').value);
      const resultadoDiv = document.getElementById('resultado');

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultadoDiv.textContent = 'Por favor, preencha todas as notas corretamente.';
        return;
      }

      const media = (n1 + n2 + n3) / 3;
      const mediaArredondada = media.toFixed(2);

      if (media < 7) {
        resultadoDiv.textContent = `Média: ${mediaArredondada} - Reprovado`;
        resultadoDiv.style.color = 'red';
        } else {
        resultadoDiv.textContent = `Média: ${mediaArredondada} - Aprovado`;
        resultadoDiv.style.color = 'green';
        }
    }