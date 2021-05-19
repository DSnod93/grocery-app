import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="container">
      <div className="col">

        <h4>Login</h4>
        <br/>
        <form className="col s12" onSubmit={handleFormSubmit}>
          <div className="input-field col s6">
            <input
                name="email"
                type="email"
                id="email"
                className="validate"
                onChange={handleChange}
              />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s6">
            
            <input
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
              className="validate"
            />
            <label htmlFor="pwd">Password</label>
          </div>
          {
            error ? <div>
              <p className="error-text red-text" >The provided credentials are incorrect!</p>
            </div> : null
          }
          <div className="flex-row flex-end">
            <button className="btn waves-effect waves-light" type="submit">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}


export default Login;
