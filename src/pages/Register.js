import React, {useEffect, useState} from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login")
    };

    useEffect(() => {
        const backgroundDiv = document.createElement('div');
        backgroundDiv.classList.add('register-background');
        document.body.appendChild(backgroundDiv);
        return () =>{
            document.body.removeChild(backgroundDiv);
        }
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();


        if (!name || !surname || !login || !email || !password || !confirmPassword) {
            setErrorMessage("Будь ласка, заповніть усі поля.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Паролі не співпадають!");
            return
        }
        const requestBody = {
            name,
            surname,
            login,
            email,
            password
        };

        try{
          const response = await fetch("http://localhost:8080/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(requestBody)
          });

          if (response.status === 200) {
              navigate("/login");
          } else{
              const error = await response.text();
              setErrorMessage(error);
          }
        } catch (error) {
            console.error("Помилка при реєстрації", error);
            setErrorMessage("Сталася помилка при реєстрації.");
        }
    };

    return (
        <Container className="register-container" style={{ fontFamily: 'Vollda, sans-serif' }}>
            <h2>Реєстрація</h2>
            <Form onSubmit={handleRegister} className={"register-input-general"}>

                {/*name*/}
                <Form.Group controlId="formUsername" className={"register-input-field"}>
                    <Form.Control
                        type="text"
                        placeholder="Введіть імʼя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                {/*surname*/}
                <Form.Group controlId="formUserSurname" className={"register-input-field"}>
                    <Form.Control
                        type="text"
                        placeholder="Введіть фамілію"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </Form.Group>

                {/*login*/}
                <Form.Group controlId="formLogin" className={"register-input-field"}>
                    <Form.Control
                        type="text"
                        placeholder="Введіть логін"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </Form.Group>

                {/*email*/}
                <Form.Group controlId="formEmail" className={"register-input-field"}>
                    <Form.Control
                        type="email"
                        placeholder="Введіть email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                {/*password*/}
                <Form.Group controlId="formPassword" className={"register-input-field"}>
                    <Form.Control
                        type="password"
                        placeholder="Введіть пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {/*password-conf*/}
                <Form.Group controlId="formConfirmPassword" className={"register-input-field"}>
                    <Form.Control
                        type="password"
                        placeholder="Підтвердіть пароль"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>

                {errorMessage && (
                    <div style={{ color: "red", marginBottom: "10px" }}>
                        {errorMessage}
                    </div>
                )}

                <Button variant="primary" type="submit" className="custom-button">
                    Зареєструватися
                </Button>
                <br/>
                <Button
                    variant="outline-primary"
                    onClick={goToLogin}
                    className="custom-button-register"
                >
                    Назад
                </Button>
            </Form>
        </Container>
    );
}

export default Register;

