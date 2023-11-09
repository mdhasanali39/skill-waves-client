import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {

    const location = useLocation()
    if(location.pathname === "/"){
        document.title = "SkillWaves | Home"
    }else if(location.pathname === '/add-job'){
        document.title = "SkillWaves | Add-job"
    }
    else if(location.pathname === '/my-posted-jobs'){
        document.title = "SkillWaves | My-posted-jobs"
    }
    else if(location.pathname === '/my-bids'){
        document.title = "SkillWaves | My-bids"
    }
    else if(location.pathname === '/bid-requests'){
        document.title = "SkillWaves | Bid-requests"
    }else if(location.pathname === '/login'){
        document.title = "SkillWaves | Login"
    }else if(location.pathname === '/register'){
        document.title = "SkillWaves | Register"
    }
    console.log(location);

    return (
        <div className="max-w-[1300px] mx-auto px-4 font-Roboto border">
            {/* navbar  */}
            <div className="sticky z-50 top-0 bg-white pr-4">
            <Navbar></Navbar>
            </div>
            {/* Outlet */}
            <Outlet></Outlet>
            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;