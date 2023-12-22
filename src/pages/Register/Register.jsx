/* eslint-disable no-useless-escape */
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";


const Register = () => {

    const {  userRegister } = useContext(AuthContext);
    const [userRegisterError, setUserRegisterError] = useState('');

    const handleUserRegister = (e) => {
        e.preventDefault();

        const userForm = new FormData(e.currentTarget);
        const name = userForm.get('name');
        const photoURL = userForm.get('photoURL');
        const email = userForm.get('email');
        const password = userForm.get('password');
        console.log(name, photoURL, email, password);

        //create users 
        if (password.length < 6) {
            setUserRegisterError('Password must be more than 6 characters');
        }
        else if (!/[A-Z]/.test(password)) {
            setUserRegisterError('Password must have a capital letter');
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            setUserRegisterError('Password must have one special character');
        }
        else {
            userRegister(email, password)
                .then(result => {
                    console.log(result.user);

                    //update profile
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photoURL
                    })
                        .then(() => {
                            console.log('profile updated');
                        })
                        .catch((error) => {
                            console.log(error.message);
                        })
                    // window.location.reload();

                    // database connection
                    const user = { 
                        email,
                        createdAt: result.user.metadata.creationTime 
                    }
                    fetch('https://task-management-server-jet.vercel.app/users', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(user)
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

    }

    return (
        <div>

            <h1 className="text-center text-3xl font-extrabold mt-16">Please Register</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleUserRegister}
                            className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    placeholder="Enter your photoURL"
                                    className="input input-bordered" />
                            </div>

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
                                    placeholder="Enter password"
                                    className="input input-bordered" required />
                                
                            </div>

                            <div>
                                {
                                    userRegisterError && <p>{userRegisterError}</p>
                                }
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white font-bold">Register</button>
                            </div>
                        </form>
                        <div>
                            <p className="text-center p-5">
                                Already have account?<Link to="/login"> <span className="text-blue-700 font-bold">Login</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;