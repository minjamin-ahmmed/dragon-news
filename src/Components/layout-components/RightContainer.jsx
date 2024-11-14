import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import classImg from "../../assets/class.png"
import swimming from "../../assets/swimming.png"
import playground from "../../assets/playground.png"
import adImage from "../../assets/bg.png"

const RightContainer = () => {
    return (
        <div className="p-4">

            <h2 className="font-semibold">Login With</h2>

            <div className="mt-5 space-y-2 mb-5">
                <button className="btn w-full border-2 border-blue-500"> <FcGoogle /> Login With Google</button>
                <button className="btn w-full border-2 border-black"> <FaGithub /> Login With Github</button>
            </div>

            <div className="join flex join-vertical space-y-2 rounded-sm">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
            </div>

            <h2 className="font-semibold text-xl text-gray-600 my-8">Q-Zone</h2>

            <div className="p-2 bg-white border border-gray-400 rounded-lg transform -rotate-6">
                <div className="m-2 p-2 bg-white border border-gray-400 rounded-lg transform -rotate-6">
                    <div className="transform rotate-12">
                        <img className="w-full" src={swimming} alt="" />
                    </div>
                </div>
            </div>

            <div className="p-2 bg-white border border-gray-400 rounded-lg transform -rotate-6 mt-10">
                <div className="m-2 p-2 bg-white border border-gray-400 rounded-lg transform -rotate-6">
                    <div className="transform rotate-12">
                        <img className="w-full" src={classImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="p-2 bg-white border border-gray-400 rounded-lg transform -rotate-6 mt-10">
                <div className="m-2 p-2 bg-white border border-gray-400 rounded-lg transform -rotate-6">
                    <div className="transform rotate-12">
                        <img className="w-full" src={playground} alt="" />
                    </div>
                </div>
            </div>


            <div className="mt-10">
                <img className="w-full" src={adImage} alt="" />
            </div>







        </div>
    );
};

export default RightContainer;