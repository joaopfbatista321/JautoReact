import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function LoginPage({ isRegistered }) {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h1 className="text-center mb-4">Login</h1>
        {isRegistered ? (
          <div className="alert alert-warning">
            You are not registered yet. Please proceed to{' '}
            <Link to="/register">Register</Link>.
          </div>
        ) : (
          <Form id="account" method="post">
            <h2>Use a local account to log in.</h2>
            <hr />
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="name@example.com" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="rememberMe" /> Remember me
              </Label>
            </FormGroup>
            <Button type="submit" color="primary" className="w-100 mt-3">Log in</Button>
            <div className="mt-3">
              <p>
                <Link to="./forgotPassword">Forgot your password?</Link>
              </p>
              <p>
                <Link to="./register">Register as a new user</Link>
              </p>
              <p>
                <Link to="./resendEmailConfirmation">Resend email confirmation</Link>
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

export default LoginPage;
