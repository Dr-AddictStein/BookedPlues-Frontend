import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const Main = () => {
    const location = useLocation();
    const shouldRenderNavbarAndFooter = !['/dashboard'].includes(location.pathname);
    return (
        <div>
            {shouldRenderNavbarAndFooter && <Navbar />}
            <div className='min-h-[100vh]'>
                <Outlet />
                <ScrollToTop />
            </div>
            {shouldRenderNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Main;