import React from 'react';
import { Input, FormBtn } from '../components/Form';

function Login() {
    return (
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
    )
}

export default Login;