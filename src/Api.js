async function getCarros() {

    let dados = await fetch("api/carrosApi/");
    if (!dados.ok) {
      console.error(dados)
      throw new Error("Não foi possível aceder à API e ler os dados dos Carros. Código: ",
        dados.status)
    }
    // exportar os dados recebido
    return await dados.json();
  }