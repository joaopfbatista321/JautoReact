import React, { useEffect, useState } from 'react';
import CarrosApi from '../api/CarrosApi';
import ProprietariosApi from '../api/ProprietariosApi';
import ProprietariosList from '../components/ProprietariosList';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { Link } from 'react-router-dom';

function HomePage() {
  const [carros, setCarros] = useState([]);
  const [proprietarios, setProprietarios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const carrosData = await CarrosApi.getCarros();
      const proprietariosData = await ProprietariosApi.getProprietarios();
      setCarros(carrosData);
      setProprietarios(proprietariosData);
    }

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <nav className="navbar">
  <div className="container">
    <Link to="/" className="navbar-brand">Minha Oficina</Link>
    <ul className="navbar-nav flex-row ml-auto">
      <li className="nav-item">
        <Link to="/proprietarios" className="nav-link">
          <button className="btn btn-primary">Clientes</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          <button className="btn btn-primary">Login</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          <button className="btn btn-success">Registro</button>
        </Link>
      </li>
    </ul>
  </div>
</nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Bem-vindo à Minha Oficina</h1>
          <p>Serviços confiáveis para o seu veículo</p>
          <Link to="/services" className="btn btn-primary">Nossos Serviços</Link>
        </div>
      </header>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fa fa-cogs"></i>
                <h3>Manutenção e Reparos</h3>
                <p>Realizamos manutenção preventiva e corretiva em veículos de todas as marcas.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fa fa-calendar"></i>
                <h3>Agendamento Online</h3>
                <p>Agende facilmente um horário para o serviço do seu veículo através do nosso sistema online.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fa fa-car"></i>
                <h3>Peças e Acessórios</h3>
                <p>Oferecemos uma variedade de peças e acessórios automotivos de qualidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <h2>O que nossos clientes estão dizendo</h2>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>"Excelente atendimento e serviço de qualidade. Recomendo!"</p>
            </div>
            <div className="testimonial-author">
              <img src="avatar1.png" alt="Avatar" />
              <p>João Silva</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>"Ótima oficina, profissionais competentes e preço justo."</p>
            </div>
            <div className="testimonial-author">
              <img src="avatar2.png" alt="Avatar" />
              <p>Maria Santos</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Minha Oficina. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
