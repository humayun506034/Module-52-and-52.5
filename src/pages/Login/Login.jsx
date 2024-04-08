import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Login = () => {

    const location =useLocation();
    const navigate = useNavigate()
    console.log(" Loaction In the Login Page : ", location)
    const { signIn } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login

                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div >
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 w-full mx-auto" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />

                    </div>
                </form>
                <p className="text-center">Do not have an account <Link to="/register" className="btn btn-link">Register</Link> </p>
            </div>

        </div>
    );
};

export default Login;
