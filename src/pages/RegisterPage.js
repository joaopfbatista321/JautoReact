import React from 'react';
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
