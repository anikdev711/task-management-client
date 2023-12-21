import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const { userGoogleLogin, userLogin } = useContext(AuthContext);
    const [userLogInError, setUserLogInError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/'


    const handleUserGoogleLogIn = (e) => {
        e.preventDefault();

        userGoogleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from, {replace: true});
                const userEmail = result.user?.email;
                const userLoggedIn = { 
                    userEmail,
                    createdAt: result.user.metadata.creationTime 
                }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userLoggedIn)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.insertedId){
                            console.log('user registered to database');
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const logInForm = new FormData(e.currentTarget);
        const email = logInForm.get('email');
        const password = logInForm.get('password')
        console.log(email, password);

        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, {replace: true});
            

            })
            .catch(error => {
                console.log(error);
                setUserLogInError(error.message)
            })

    }

    return (
        <div>

            <h1 className="text-center text-3xl font-extrabold mt-16">Login Now</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleLogin}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                {
                                    userLogInError && <p>{userLogInError}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white font-bold">Login</button>
                            </div>
                            <p className="text-center mt-5">__OR__</p>
                            <div className="form-control mt-6">
                                <button
                                    onClick={handleUserGoogleLogIn}
                                    className="btn btn-secondary text-white font-bold">Google Login</button>
                            </div>
                        </form>
                        <div className="text-center p-10">
                            <p>New user?</p>
                            <Link to="/register"> <span className="text-blue-700 font-bold">Create Account</span> </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;