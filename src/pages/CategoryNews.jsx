import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";


const CategoryNews = () => {

    const { data: news } = useLoaderData()




    return (
        <div className="p-4">
            <h2 className="font-semibold">Dragon News Home</h2>
            <p className="text-gray-500 font-normal"> {news.length} News Found in this category </p>

            <div>
                {
                    news.map(singleNews => <SingleNews key={singleNews._id} singleNews={singleNews}></SingleNews>)
                }
            </div>


        </div>
    );
};

export default CategoryNews;