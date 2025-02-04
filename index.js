const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`It´s alive on port ${port}, http://localhost:${port}`)
});

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/endpoint', (req, res) => {
    res.status(200).send({
        response: 'Test',
        passed: 'Yes ✔'
    })
});

app.post('/endpoint/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
 
    if(!text) {
        res.status(418).send({ message: 'We need some text!' })
    }

    res.send({
        response: `Message received, ID: ${id}` 
    });
})