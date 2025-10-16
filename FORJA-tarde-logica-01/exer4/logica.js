function calcularArea() {
      const lado = parseFloat(document.getElementById('lado').value);
      const resultado = document.getElementById('resultado');

      if (isNaN(lado) || lado <= 0) {
        resultado.textContent = "Por favor, digite um valor válido para o lado.";
        return;
      }

      const area = lado * lado;
      resultado.textContent = `A área do quadrado é ${area} m².`;
    }