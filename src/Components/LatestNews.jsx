import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-5 items-center bg-gray-200 px-4 py-2 mt-8">
            <p className="text-white font-bold bg-[#D72050] text-lg py-2 px-4">Latest</p>

            <Marquee speed={50} pauseOnHover={true} gradientColor={true}>
                <Link to="/news">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga consequatur quam adipisci voluptas sunt expedita dolores, mollitia, vitae tempore culpa excepturi fugiat. Deserunt cumque expedita tempora! Ad, fugit mollitia?
                </Link>

                <Link to="/news">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga consequatur quam adipisci voluptas sunt expedita dolores, mollitia, vitae tempore culpa excepturi fugiat. Deserunt cumque expedita tempora! Ad, fugit mollitia?
                </Link>

                <Link to="/news">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga consequatur quam adipisci voluptas sunt expedita dolores, mollitia, vitae tempore culpa excepturi fugiat. Deserunt cumque expedita tempora! Ad, fugit mollitia?
                </Link>

                <Link to="/news">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga consequatur quam adipisci voluptas sunt expedita dolores, mollitia, vitae tempore culpa excepturi fugiat. Deserunt cumque expedita tempora! Ad, fugit mollitia?
                </Link>
            </Marquee>

        </div >
    );
};

export default LatestNews;