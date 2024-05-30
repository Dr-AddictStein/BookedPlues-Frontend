import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const shouldRenderNavbarAndFooter = !['/dashboard'].includes(location.pathname);
    return (
        <div>
            {shouldRenderNavbarAndFooter && <Navbar />}
            <div className='min-h-[100vh]'>
                <Outlet />
            </div>
            {shouldRenderNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Main;