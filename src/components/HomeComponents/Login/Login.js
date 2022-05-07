import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const navigateSignUp = event => {
        navigate('/signup')
    }

    // sign in with email and password

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


      if(user) {
          toast('Login successfully');
          navigate("/home");
      }

      else {
          toast(error)
      }





    // handle login form submit

    const handleOnSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

    }


    return (
        <div className='login-signup mx-auto my-5 p-3'>
            <h3 className='text-info'>Please Login</h3>
            <form onSubmit={handleOnSubmit}>
                <input className='w-100 mb-2 rounded-pill' type="email" name="email" placeholder="email" required />
                <input className='w-100 mb-2 rounded-pill' type="password" name="password" placeholder="password" required />
                <button className='btn fw-bolder border text-info my-2 rounded-pill' type="submit">Login
                </button>

                <div>
                    <p>New User?
                        <Link className='ms-1' to='/signup' onClick={navigateSignUp}>SignUp</Link>
                    </p>
                </div>
                <div className='custom-hr'>
                    <span></span>
                    <h4 className='text-info margin-1 text-center'>or</h4>
                    <span></span>
                </div>
                <button className='btn'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                </button>
                <button className='btn'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/480px-Octicons-mark-github.svg.png" alt="" />
                </button>
            </form>
        </div>
    );
};

export default Login;