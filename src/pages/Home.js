import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import '../styles/Home.css';
import Sidebar from "../reusableComponents/Sidebar";

const Home = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const backgroundDiv = document.createElement('div');
        backgroundDiv.classList.add('home-background');
        document.body.appendChild(backgroundDiv);
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
        return () => {
            document.body.removeChild(backgroundDiv);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("username");
        navigate("/login");
    };

    return (
        <>
            <Sidebar />
            <Container className="home-container" style={{fontFamily: 'Vollda, sans-serif'}}>
                <div className="user-info">{username}</div>
                <h1>Ласкаво просимо до вашої
                    <br/>домашньої бухгалтерії!</h1>
                <div className="mt-4">
                    <Link to="/income-expenses">
                        <Button className="custom-button">Облік доходів та витрат</Button>
                    </Link><br/>
                    <Link to="/income">
                        <Button className="custom-button">Доходи</Button>
                    </Link><br/>
                    <Link to="/expenses">
                        <Button className="custom-button">Витрати</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default Home;