import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import '../styles/Login.css';

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!username || !password) {
			setErrorMessage("Будь ласка, заповніть обидва поля.");
			return;
		}

		try {
			const response = await fetch("http://localhost:8080/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify({
					login: username,
					password: password
				})
			});

			if (response.ok){
				const data = await response.text();
				console.log(data);
				localStorage.setItem("username", username);
				setErrorMessage("");
				navigate("/home")
			}else{
				setErrorMessage("Неправильний логін або пароль.");
			}
		}catch (error){
			console.error("Помилка при відправці запиту: ", error);
			alert("Сталася помилка при підключенні до сервера");
		}
	};

	const goToRegister = () => {
		navigate("/register")
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
		<Container className="login-container" style={{fontFamily: 'Vollda, sans-serif'}}>
			<h2>Вхід</h2>
			<Form onSubmit={handleSubmit}>

				{/*login*/}
				<Form.Group controlId="formUsername" className={"form-group-horizontal"}>
					<Form.Control
						type="text"
						placeholder="Введіть логін"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Group>

				{/*password*/}
				<Form.Group controlId="formPassword" className={"form-group-horizontal"}>
					<Form.Control
						type="password"
						placeholder="Введіть пароль"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				{errorMessage && (
					<div style={{ color: "red", marginBottom: "10px" }}>
						{errorMessage}
					</div>
				)}

				<Button variant="primary" type="submit" className="custom-button">
					Увійти
				</Button>
				<br/>
				<Button
					variant="outline-primary"
					onClick={goToRegister}
					className="custom-button-register"
				>
					Зареєструватися
				</Button>
			</Form>
		</Container>
	);
}

export default Login;