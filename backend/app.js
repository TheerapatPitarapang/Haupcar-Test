const express = require('express');
const core = require('cors');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5000;
const host = process.env.URL || 'http://localhost';

app.use(core());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, brand: 'Ford', model: 'Mustang', year: 2021 }
];

app.post('/cars', (req, res) => {
    const receivedData = req.body;
    res.json({ message: 'Data received successfully', data: receivedData });
});

app.get('/cars', (req, res) => {
    res.json({ message: 'List of cars', cars: cars });
});

app.get('/cars/:id', (req, res) => {
    const carId = req.params.id;
    res.json({ message: carId });
});

app.put('/cars/:id', (req, res) => {
    const carId = req.params.id;
    const updatedData = req.body;
    res.json({ message: `ID ${carId} updated successfully`, data: updatedData });
});

app.delete('/cars/:id', (req, res) => {
    const carId = req.params.id;
    res.json({ message: `ID ${carId} deleted successfully` });
});

app.listen(port, () => {
    console.log(`App listening at ${host}:${port}`);
});