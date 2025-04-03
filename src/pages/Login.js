import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import '../styles/Login.css';

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (username === "admin" && password === "password") {
			localStorage.setItem("username", username);
			navigate("/home");
		}else {
			alert("Неправильний логін або пароль");
		}
	};

	useEffect(() => {
		const backgroundDiv = document.createElement('div');
		backgroundDiv.classList.add('login-background');
		document.body.appendChild(backgroundDiv);
		return () =>{
			document.body.removeChild(backgroundDiv);
		}
	}, []);

	return(
		<Container className="home-container" style={{fontFamily: 'Vollda, sans-serif'}}>
			<h2>Вхід</h2>
			<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formUsername" className={"form-group-horizontal"}>
			<Form.Control
				type="text"
				placeholder="Введіть логін"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			</Form.Group>
			
			<Form.Group controlId="formPassword" className={"form-group-horizontal"}>
			<Form.Control
				type="password"
				placeholder="Введіть пароль"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			</Form.Group>
			<Button variant="primary" type="submit" className="custom-button">
			Увійти
			</Button>
			</Form>
		</Container>
	);
}

export default Login;