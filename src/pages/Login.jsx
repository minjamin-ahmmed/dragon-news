import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Login = () => {

    const { sinInUser, setUser } = useContext(AuthContext)

    const location = useLocation()

    const navigate = useNavigate()

    console.log(location);


    const handleLogin = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        sinInUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
                navigate(location?.state ? location.state : "/")



            })
            .catch(error => {
                console.log(error.message)
            })


    }




    return (
        <div className="min-h-screen flex justify-center">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-lg px-5 lg:px-20 py-14">
                <h1 className="text-center font-bold text-2xl mt-8">Login Your Account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered rounded-none bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered rounded-none bg-[#F3F3F3]" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button to="/" className="btn bg-[#403F3F] rounded-none text-white">Login</button>
                    </div>

                    <h2>Don&apos;t have an account? <NavLink to="/auth/register" className="text-red-600 font-semibold">register</NavLink> </h2>
                </form>
            </div>
        </div>


    );
};

export default Login;