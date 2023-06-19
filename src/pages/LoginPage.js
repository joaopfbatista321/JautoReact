/* import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      UserName: username,
      Password: password
    };

    try {
      const response = await fetch('/api/AccountApi/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        // Login successful, perform necessary actions (e.g., redirect)
        console.log('Logged in successfully');
      } else {
        // Login failed
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}; 

export default LoginPage;

*/

//  import React from 'react';
// import LoginForm from '../components/LoginForm';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';

// function LoginPage({ isRegistered }) {
//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4">
//         <h1 className="text-center mb-4">Login</h1>
//         {isRegistered ? (
//           <div className="alert alert-warning">
//             You are not registered yet. Please proceed to{' '}
//             <Link to="/register">Register</Link>.
//           </div>
//         ) : (
//           <Form id="account" method="post">
//             <h2>Use a local account to log in.</h2>
//             <hr />
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input type="email" name="email" id="email" placeholder="name@example.com" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input type="password" name="password" id="password" placeholder="password" />
//             </FormGroup>
//             <FormGroup check>
//               <Label check>
//                 <Input type="checkbox" name="rememberMe" /> Remember me
//               </Label>
//             </FormGroup>
//             <Button type="submit" color="primary" className="w-100 mt-3">Log in</Button>
//             <div className="mt-3">
//               <p>
//                 <Link to="./forgotPassword">Forgot your password?</Link>
//               </p>
//               <p>
//                 <Link to="./register">Register as a new user</Link>
//               </p>
//               <p>
//                 <Link to="./resendEmailConfirmation">Resend email confirmation</Link>
//               </p>

//               <p>
//                 <Link to="../">Voltar à Pagina Principal </Link>
//               </p>
//             </div>
//           </Form>
//         )}
//       </div>
//     </Container>
//   );
// }

// export default LoginPage;
 
/* import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform login logic here (e.g., send data to the server)
    // You can use the Fetch API or an HTTP library like Axios

    const data = {
      email: email,
      password: password,
    };

    try {
      // Make a POST request to the server endpoint for login
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Handle the response from the server
      if (response.ok) {
        // Login successful
        // Redirect or perform desired actions
      } else {
        // Login failed
        // Handle error (e.g., display error message)
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
 */
import React, { useState } from 'react';
import AccountApi from '../api/AccountApi';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
 

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await AccountApi.login(Email, password);

      // Handle response accordingly
      if (response === 200) {
        window.location = "/carros"
        
      } else {
        // Handle login failure (show error message, etc.)
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    
    <div className="container">
    <h2>Login</h2>
    <form onSubmit={handleLogin} className="mt-3">
      <div className="mb-3">
        <label for="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
  );
}

export default LoginPage;
