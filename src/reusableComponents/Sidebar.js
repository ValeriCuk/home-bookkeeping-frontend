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
                                <Link to="/login" onClick={toggleSidebar}>
                                    <FaSignOutAlt className="icon"/> Вийти
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;