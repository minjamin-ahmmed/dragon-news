
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftContainer = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))

    }, [])


    return (
        <div className="p-4">
            <h2 className="font-semibold">All Category ({categories.length}) </h2>

            <div className="flex flex-col gap-2 mt-2">
                {
                    categories.map(category =>

                        <NavLink
                            key={category.category_id}
                            to={`/category/${category.category_id}`}
                            className="btn justify-start bg-base-100 border-none"

                        >

                            {category.category_name}

                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftContainer;