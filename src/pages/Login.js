import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap"; 

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (username === "admin" && password === "password") {
			navigate("/");
		}else {
			alert("Неправильний логін або пароль");
		}
	};

	return(
		<Container>
			<h2>Вхід</h2>
			<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formUsername">
			<Form.Label>Логін</Form.Label>
			<Form.Control
				type="text"
				placeholder="Введіть логін"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			</Form.Group>
			
			<Form.Group controlId="formPassword">
			<Form.Label>Пароль</Form.Label>
			<Form.Control
				type="password"
				placeholder="Введіть пароль"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			</Form.Group>
			<Button variant="primary" type="submit">
			Увійти
			</Button>
			</Form>
		</Container>
	);
}

export default Login;