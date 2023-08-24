import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from './sidebar.module.css'

const Sidebar = (sidebarContent) => {
    const navigate = useNavigate();
  const [content, useContent] = useState(sidebarContent ? sidebarContent : []);
  return (
    <div className={styles.sidebar}>
        <div className={styles.top_container}>

            <div className={styles.logo}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                fill="var(--white)"
                width="20px">
                <path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z" />
                </svg>
            </div>

            <div className={styles.mid}>
                <div className={styles.nav}>Profile</div>
                <div className={styles.nav}>Dashboard</div>
                <div className={styles.nav}>Liked</div>
                <div className={styles.nav}>My-List</div>
                {/* onClick={nav.onclick}> */}
            </div>
        </div>
      
      <div
        className={styles.bottom}
        onClick={() => { localStorage.clear();
          ;navigate("/")}}>
        Log out
      </div>
    </div>
  );
};

export default Sidebar;