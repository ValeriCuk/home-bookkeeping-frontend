import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import '../App.css';

const Home = () => {
  return (
    <Container className="home-container">
      <h1>Ласкаво просимо до вашої домашньої бухгалтерії!</h1>
      <div className="mt-4">
        <Link to="/income-expenses">
          <Button variant="primary" className="m-2">Облік доходів та витрат</Button>
        </Link>
        <Link to="/income">
          <Button variant="success" className="m-2">Доходи</Button>
        </Link>
        <Link to="/expenses">
          <Button variant="danger" className="m-2">Витрати</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;