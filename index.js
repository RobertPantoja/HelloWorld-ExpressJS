const express = require('express')
const app = express()
const port = 3000

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