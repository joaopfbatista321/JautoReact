class CarrosApi {
    static async getCarros() {
      try {
        const response = await fetch('https://sua-api-de-carros.com/api/carros');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erro ao ler os dados dos carros:', error);
        return [];
      }
    }
  }
  
  export default CarrosApi;
  