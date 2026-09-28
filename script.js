function calcularMedia() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);

  if (isNaN(nota1) || isNaN(nota2)) {
    document.getElementById('resultado').textContent = 'Por favor, insira ambas as notas.';
    return;
  }

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    document.getElementById('resultado').textContent = 'As notas devem estar entre 0 e 10.';
    return;
  }

  const media = (nota1 + nota2) / 2;
  document.getElementById('resultado').textContent = `A média do aluno é ${media.toFixed(2)}.`;

  if (media >= 7) {
    document.getElementById('resultado1').textContent = 'O aluno está aprovado.'
    return;
  } else {
    document.getElementById('resultado1').textContent = 'O aluno está em recuperação.'
  }
}