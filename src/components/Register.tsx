import React from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../auth';

class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('hello');
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      auth
        .register(this.state.username, this.state.password, this.state.email)
        .then((res) => {
          if (res) {
            this.setState(
              {
                message: '',
              },
              () => {
                this.props.history.push('/login');
              }
            );
          } else {
            this.setState({
              message: 'Что-то пошло не так!',
            });
          }
        });
    }
  };

  render(): React.ReactNode {
    return (
      <div className="register">
        <p className="register__welcome">Plese register here</p>
        <form className="register__form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
          />
          <div className="register__button-container">
            <button type="submit">Register</button>
          </div>
        </form>
        <div className="register__login">
          <p>Already have an account?</p>
          <Link to="/login" className="redister__login-link">
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
