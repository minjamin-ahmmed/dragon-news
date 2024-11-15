import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

    const [error, setError] = useState({})
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleRegisterForm = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const name = event.target.name.value
        const photo = event.target.photo.value
        const password = event.target.password.value

        if (name.length <= 5) {
            setError({ ...error, name: "Name must be more more than 5 character or long" });
            return;
        }




        createNewUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUser(user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/")
                    })

                    .catch((error) => {
                        console.log(error);

                    })



            })
            .catch(error => {
                console.log("ERROR", error.message);

            })


    }







    return (
        <div className="min-h-screen flex justify-center">
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-lg px-5 lg:px-20 py-14">
                <h1 className="text-center font-bold text-2xl">Register Your Account</h1>


                <form onSubmit={handleRegisterForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered rounded-none bg-[#F3F3F3]" required />
                    </div>

                    {
                        error.name && <label className="label text-sm text-red-600">
                            {error.name}
                        </label>
                    }

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your photo URL" className="input input-bordered rounded-none bg-[#F3F3F3]" required />
                    </div>


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

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] rounded-none text-white">Register</button>
                    </div>

                    <h2>Already have an account? <NavLink to="/auth/login" className="text-red-600 font-semibold">Login</NavLink> </h2>


                </form>
            </div>
        </div>
    );
};

export default Register;