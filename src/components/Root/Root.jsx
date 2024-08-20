import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <h2><Header></Header></h2>
            <h2><Outlet></Outlet></h2>
            </div>

            <h2><Footer></Footer></h2>
        </div>
    );
};

export default Root;