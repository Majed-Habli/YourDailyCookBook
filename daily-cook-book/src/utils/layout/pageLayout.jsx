import React from "react";
import {Outlet} from "react-router-dom";
import styles from './pageLayout.module.css';
// import Sidebar from "../../components/Sidebar/Sidebar";
import Sidebar from "../../components/sidebar/sidebar";
import { useNavigate } from "react-router-dom";

const PageLayout = () => {
    // const navigate = useNavigate();
    // const sidebar = [
    //     {
    //     svg: <AiFillHome size={32} />,
    //     onclick: () => navigate("/parent"),
    //     },
    //     {
    //     svg: <ImStatsDots size={32} />,
    //     onclick: () => navigate("/parent/statistics"),
    //     },
    //     {
    //     svg: <BsCameraVideoFill size={32} />,
    //     onclick: () => navigate("/parent/bookmeet"),
    //     },
    // ];

    return (
        <div className="Parent_layout app dark">
            <div className="side_bar_container">
                <Sidebar/>
            </div>
            <div className="outlet_parent">
                <Outlet/>
            </div>
            {/* <div className="body_right"> */}
                {/* <Profile/> */}
            {/* </div> */}
        </div>
    )
}

export default PageLayout;