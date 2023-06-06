class ProprietariosApi {
    static async getProprietarios() {
      try {
        const response = await fetch('https://sua-api-de-proprietarios.com/api/proprietarios');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erro ao ler os dados dos proprietários:', error);
        return [];
      }
    }
  }
  
  export default ProprietariosApi;
  