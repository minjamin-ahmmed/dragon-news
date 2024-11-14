import { Link, NavLink, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightContainer from "../Components/layout-components/RightContainer";


const NewsDetails = () => {

    const { data } = useLoaderData()

    const news = data[0]

    const { image_url, title, details } = news



    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 mt-10">
                <section className="lg:col-span-9 p-4">
                    <div className="space-y-4">
                        <div>
                            <img src={image_url} alt="" />
                        </div>

                        <h2 className="font-bold text-xl">{title} </h2>

                        <p className="text-gray-500 font-medium mb-10">{details} </p>

                        <Link to="/" > <p className="bg-[#D72050] py-2 px-8 text-white mt-5 btn"> All News in This Category </p> </Link>
                    </div>




                </section>
                <aside className="lg:col-span-3"> <RightContainer></RightContainer> </aside>
            </main>
        </div>
    );
};

export default NewsDetails;