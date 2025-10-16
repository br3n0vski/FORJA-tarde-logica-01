   function calcular() {
      const n1 = parseFloat(document.getElementById('num1').value);
      const n2 = parseFloat(document.getElementById('num2').value);
      const resultadoDiv = document.getElementById('resultado');

      if (isNaN(n1) || isNaN(n2)) {
        resultadoDiv.innerHTML = "<strong>Por favor, preencha os dois números corretamente.</strong>";
        resultadoDiv.style.color = "red";
        return;
      }

      const soma = n1 + n2;
      const subtracao = 5;
      const resultadoFinal = soma - subtracao;

      resultadoDiv.style.color = "black";
      resultadoDiv.innerHTML = `
        <p><strong>Número 1:</strong> ${n1}</p>
        <p><strong>Número 2:</strong> ${n2}</p>
        <p><strong>Soma:</strong> ${soma}</p>
        <p><strong>Subtraindo 5:</strong> ${soma} - 5 = ${resultadoFinal}</p>
        <p><strong>Resultado final:</strong> ${resultadoFinal}</p>
      `;
    }