import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FaBars, FaTimes, FaSignOutAlt} from "react-icons/fa";
import "../styles/Sidebar.css"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async() => {
        try{
            const response = await fetch("http://localhost:8080/logout",{
                method: "POST",
                credentials:"include"
            });

            if (response.status === 200) {
                console.log("Вихід успішний!");
            }else{
                console.log("Помилка при вході: статус ", response.status);
            }
        }catch(err){
            console.error("Помилка при виході:", err)
        }
        toggleSidebar();
        navigate("/login");
    };

    return(
        <>
            <button className={`menu-button ${isOpen ? "hidden" : ""}`}
                    onClick={toggleSidebar}
            >
                <FaBars />
            </button>
            <div className={`sidebar-overlay ${isOpen ? "visible" : ""}`} onClick={toggleSidebar}>
                <div className={`sidebar ${isOpen ? "open" : ""}`} style={{fontFamily: 'Vollda, sans-serif'}}>
                    <button className="close-button" onClick={toggleSidebar}>
                        <FaTimes/>
                    </button>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/home" onClick={toggleSidebar}>
                                    Головна
                                </Link>
                            </li>
                            <li>
                                <Link to="/income-expenses" onClick={toggleSidebar}>
                                    Доходи та витрати
                                </Link>
                            </li>
                            <li>
                                <Link to="/income" onClick={toggleSidebar}>
                                    Доходи
                                </Link>
                            </li>
                            <li>
                                <Link to="/expenses" onClick={toggleSidebar}>
                                    Витрати
                                </Link>
                            </li>
                            <li>
                                <button className="logout-button" onClick={handleLogout} style={{
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    cursor: "pointer",
                                    color: "inherit"
                                }}>
                                    <FaSignOutAlt className="icon"/> Вийти
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;