import React, {useEffect, useState} from 'react';
import { Table, Form, Container } from 'react-bootstrap';
import '../styles/IncomeExpenses.css';
import Sidebar from "../reusableComponents/Sidebar";

const IncomeExpenses = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({
        type: "",
        date: "",
        startBalance: "",
        income: "",
        expense: "",
        endBalance: "",
        responsible: "",
        note: "",

    });

    const transactions = [
        { type: 'Доходи', date: '2025-03-01', startBalance: 1000, income: 500, expense: 0, endBalance: 1500, responsible: 'Анна', note: 'Зарплата' },
        { type: 'Витрати', date: '2025-03-02', startBalance: 1500, income: 0, expense: 200, endBalance: 1300, responsible: 'Анна', note: 'Продукти' },
    ];

    useEffect(() => {
        const backgroundDiv = document.createElement('div');
        backgroundDiv.classList.add('login-background');
        document.body.appendChild(backgroundDiv);
        return () =>{
            document.body.removeChild(backgroundDiv);
        }
    }, []);

    return (
        <>
            <Sidebar />
            <Container className="income-expenses-container" style={{fontFamily: 'Vollda, sans-serif'}}>
                <h2 className="table-title">Облік доходів та витрат</h2>

                <div className="date-filters">
                    <Form.Group>
                        <Form.Label>Від:</Form.Label>
                        <Form.Control type="date"
                                      className="date-input"
                                      value={startDate}
                                      onChange={(e) => setStartDate(e.target.value)}
                                      onKeyDown={(e) => e.preventDefault()}
                                      max={endDate}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>До:</Form.Label>
                        <Form.Control type="date"
                                      className="date-input"
                                      value={endDate}
                                      onChange={(e) => {
                                          if (e.target.value >= startDate) {
                                              setEndDate(e.target.value);
                                          }
                        }}
                                      onKeyDown={(e) => e.preventDefault()}
                                      min={startDate}
                        />
                    </Form.Group>
                </div>
                <div className="income-expenses-table">
                    <Table bordered hover >
                        <thead>
                        <tr>
                            <th>Стаття</th>
                            <th>Дата</th>
                            <th>Початкове сальдо</th>
                            <th>Сума доходу</th>
                            <th>Сума витрат</th>
                            <th>Кінцеве сальдо</th>
                            <th>Відповідальний</th>
                            <th>Нотатки</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions.map((item, index) => (
                            <tr key={index} className={item.type === 'Доходи' ? 'income-row' : 'expense-row'}>
                                <td>{item.type}</td>
                                <td>{item.date}</td>
                                <td>{item.startBalance}</td>
                                <td>{item.income}</td>
                                <td>{item.expense}</td>
                                <td>{item.endBalance}</td>
                                <td>{item.responsible}</td>
                                <td>{item.note}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );
};

export default IncomeExpenses;
