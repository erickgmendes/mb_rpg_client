export function fetchNiveis() {
  let niveis = [];

  for (let i = 1; i <= 10; i++) {
    niveis.push({
      id: i,
      nome: i
    });
  }

  return niveis;
}
