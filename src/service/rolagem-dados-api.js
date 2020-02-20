export function fetchRolagemDados() {
  let rolagemDados = [];

  for (let i = 3; i <= 18; i++) {    
    rolagemDados.push({
      id: i,
      nome: i
    });
  }

  return rolagemDados;
}
