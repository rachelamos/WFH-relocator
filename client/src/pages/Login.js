import React from 'react';
import { Input, FormBtn } from '../components/Form';
import Example from '../components/Signup';

function Login() {
  return (
    <div>
      <form>
        <Input
          onChange="{}"
          name="username"
          placeholder="Username (required)"
        />
        <Input
          onChange="{}"
          name="password"
          placeholder="Password (required)"
        />
        <FormBtn
          disabled="{}"
          onClick="{}"
        >
          Login!
        </FormBtn>

      </form>
      <Example />
    </div>
  )
}

export default Login;