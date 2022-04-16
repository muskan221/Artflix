import React from "react";
import {AiOutlineUser} from 'react-icons/ai';
import {GoogleLogin} from "react-google-login";

const responseGoogle = (res) => {
  console.log(res);
}

const Signup = () => {
  return (
    <>
      <GoogleLogin 
        clientId=""
        buttonText="Sign in with Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy = {'single_host_origin'}
        style={{marginTop: '100px'}}
      />
    </>
  );
};

export default Signup;