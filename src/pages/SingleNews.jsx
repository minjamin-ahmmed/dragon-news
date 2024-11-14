/* eslint-disable react/prop-types */
import { FaEye, FaRegShareSquare, FaStar } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";


const SingleNews = ({ singleNews }) => {

    const { author, title, image_url, details, total_view, rating } = singleNews

    return (
        <div className="mt-5 p-4 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 ">
                    <div className="w-[50px] h-[50px]">
                        <img className="w-full h-full rounded-full object-cover" src={author.img} alt="" />
                    </div>
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-gray-600">{author.published_date}</p>
                    </div>
                </div>

                <div className="flex gap-5 items-center">
                    <span> <IoBookmarksOutline /> </span>
                    <span> <FaRegShareSquare /> </span>
                </div>
            </div>

            <h1 className="font-semibold text-xl text-[#1c1c1cde] mb-4"> {title} </h1>
            <div>
                <img src={image_url} alt="" />
            </div>

            <p className="text-sm text-gray-600 my-4">
                {details.slice(0, 450)}
            </p>
            <a href="#" className="text-yellow-600 font-medium">
                Read More
            </a>

            <div className="flex items-center justify-between px-4 py-3 border-t">
                <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />

                    <span className="text-sm font-semibold">{rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500">
                    <FaEye className="mr-1" />
                    <span className="text-sm font-semibold">{total_view}</span>
                </div>
            </div>


        </div>
    );
};

export default SingleNews;