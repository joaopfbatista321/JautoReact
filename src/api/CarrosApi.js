class CarrosApi {
    static async getCarros() {
      try {
        const response = await fetch('/api/carrosapi');
        const data = await response.json();
        return data;
      } catch (error) {
        console.log('errou')
        console.error('Erro ao ler os dados dos carros:', error);
        return [];
      }
    }

    static async editCarros(carroData,carroId) {
      try {
        const response = await fetch(`/api/carrosapi/${carroId}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(carroData),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log('errou')
        console.error('Erro ao ler os dados dos carros:', error);
        return [];
      }
    }

    static async createCarro(carroData) {
      try {
        const response = await fetch('/api/carrosapi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(carroData),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erro ao criar o carro:', error);
        throw error;
      }
    }
  
    static async deleteCarro(carroId) {
      try {
        await fetch(`/api/carrosapi/${carroId}`, {
          method: 'DELETE',
        });
      } catch (error) {
        console.error('Erro ao apagar o carro:', error);
        throw error;
      }
    }
  }
  
  
  export default CarrosApi;
  