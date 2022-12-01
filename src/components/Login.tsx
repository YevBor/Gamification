import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <p className="login__welcome">Welcome</p>
        <form onSubmit={this.handleSubmit} className="login__form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Login
          </button>
        </div>
        <div className="login__signup">
          <p>Already have an account?</p>
          <Link to="/register" className="signup__link">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
