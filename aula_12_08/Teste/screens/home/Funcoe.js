export function realizarCalculo(numero1, numero2, operacao, setResultado) {
  const n1 = Number(numero1);
  const n2 = Number(numero2);

  if (numero1 === '' || numero2 === '') {
    setResultado('Digite os dois números');
    return;
  }

  if (operacao === '/' && n2 === 0) {
    setResultado('Não é possível dividir por zero');
    return;
  }

  switch (operacao) {
    case '+':
      setResultado(n1 + n2);
      break;
    case '-':
      setResultado(n1 - n2);
      break;
    case '*':
      setResultado(n1 * n2);
      break;
    case '/':
      setResultado(n1 / n2);
      break;
    default:
      setResultado('Operação inválida');
  }
}
