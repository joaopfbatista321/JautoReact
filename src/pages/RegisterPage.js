/* import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RegisterPage({ isRegistered }) {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h1 className="text-center mb-4">Register</h1>
        {isRegistered ? (
          <div className="alert alert-success">
            Registration successful! Please proceed to{' '}
            <Link to="/login">Login</Link>.
          </div>
        ) : (
          <Form id="registerForm" method="post">
            <h2>Create a new account.</h2>
            <hr />
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="name@example.com" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="password" />
            </FormGroup>
            <Button type="submit" color="primary" className="w-100 mt-3">Register</Button>
            <div className="mt-3">
          
              <p>
                <Link to="../login">Fazer o Login</Link>
              </p>

              <p>
                <Link to="../">Voltar à Pagina Principal </Link>
              </p>
             
            </div>
          </Form>

        )}
      </div>
    </Container>
  );
}

export default RegisterPage;
 */

/* import React, { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Perform registration logic here (e.g., send data to the server)
    // You can use the Fetch API or an HTTP library like Axios

    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      // Make a POST request to the server endpoint for registration
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Handle the response from the server
      if (response.ok) {
        // Registration successful
        // Redirect or show a success message
      } else {
        // Registration failed
        // Handle error (e.g., display error message)
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};
 
export default RegisterPage;
*/
import React, { useState } from 'react';
import AccountApi from '../api/AccountApi';  // Replace with your actual path
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();  // To use for redirection

  const handleRegister = async (e) => {
    e.preventDefault();

    // Perform registration logic here (e.g., send data to the server)
    const data = {
      Email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      // Make a POST request to the server endpoint for registration
      const response = await AccountApi.register(data.Email, data.password);

      // Handle the response from the server
      if (response) {
        navigate('/login');  // Redirect to login page
        // Registration successful
        // Redirect or show a success message
      } else {
        // Registration failed
        // Handle error (e.g., display error message)
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
