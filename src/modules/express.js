const express = require('express');

const app = express()

const port = 8080

app.listen(port, () => console.log(`Server is running on port ${port}!`))

app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send("<h1>Hello World!</h1>")
})

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Gabriel',
            age: 25
        },
        {
            name: 'Maria',
            age: 30
        },
        {
            name: 'João',
            age: 28
        }
    ];
    res.status(200).json(users);
});