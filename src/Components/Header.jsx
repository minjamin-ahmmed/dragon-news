import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="mt-5">
            <div className="flex items-center justify-center">
                <img className="w-5/6 lg:w-1/3" src={logo} alt="" />
            </div>
            <h2 className="text-gray-500 text-lg text-center mt-2">Journalism Without Fear or Favour</h2>

            <p className="text-center font-medium">{moment().format('dddd, MMMM DD, YYYY')}</p>
        </div>
    );
};

export default Header;