import React from 'react';
import { useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/homepage'

    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri);
      })
    }
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-6 my-5 bg-dark text-light py-3 w-25 m-auto rounded">
                    <h3>Sign In</h3>
                    <form action="">
                        <input className="form-control w-75 m-auto mb-2" type="email" placeholder="email" />
                        <br />
                        <input className="form-control w-75 m-auto" type="password" placeholder="password" />
                        <input className="mt-3 mb-3 btn btn-danger" type="submit"  value="Submit"/>
                    </form>
                    <div>---------------OR-----------------</div>
                    <button onClick={handleGoogleLogin} className="btn btn-warning mt-3"><span><i className="fab fa-google"></i></span> Sign In With Google</button>
                </div>
                <div className="col-12 col-md-6 mt-5">
                    <img className="w-50" src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;