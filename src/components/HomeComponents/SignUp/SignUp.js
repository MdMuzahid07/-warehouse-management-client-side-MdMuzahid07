import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login')
    }

    // email sign up 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      console.log(user)

      if(!user) {
          toast(error)
      }

      if(user) {
          toast('SignUp Complete')
          navigate('/home')
      }
      if(error) {
          toast(error)
      }


     // handle signup form submit

     const handleOnSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)

    }


    // google signIn

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    
  


    return (
        <div className='login-signup mx-auto my-5 p-3'>
            <h3 className='text-info'>Please SignUp</h3>
            <form onSubmit={handleOnSubmit}>
                <input className='w-100 mb-2 rounded-pill' type="text" name="name" placeholder="name" required />
                <input className='w-100 mb-2 rounded-pill' type="email" name="email" placeholder="email" required />
                <input className='w-100 mb-2 rounded-pill' type="password" name="password" placeholder="password" required />
                <button className='btn fw-bolder border text-info my-2 rounded-pill' type="submit">Login
                </button>

                <div>
                    <p>Have an account?
                        <Link className='ms-1' to='/login' onClick={navigateLogin}>Login</Link>
                    </p>
                </div>
                {error}
                <div className='custom-hr'>
                    <span></span>
                    <h4 className='text-info margin-1 text-center'>or</h4>
                    <span></span>
                </div>
                <button className='btn'>
                    <img onClick={() => signInWithGoogle()} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                </button>
                <button className='btn'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/480px-Octicons-mark-github.svg.png" alt="" />
                </button>
            </form>
        </div>
    );
};

export default SignUp;