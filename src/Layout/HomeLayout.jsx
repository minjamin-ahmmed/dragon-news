import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftContainer from "../Components/layout-components/LeftContainer";
import RightContainer from "../Components/layout-components/RightContainer";
import Navbar from "../Components/Navbar";



const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>

                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>

                <nav className="w-11/12 mx-auto mt-10">
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className="w-11/12 mx-auto mt-8 lg:grid lg:grid-cols-12">

                <aside className="col-span-3 "> <LeftContainer></LeftContainer> </aside>
                <section className="col-span-6 "> <Outlet></Outlet> </section>
                <aside className="col-span-3 "> <RightContainer></RightContainer> </aside>

            </main>
        </div>
    );
};

export default HomeLayout;