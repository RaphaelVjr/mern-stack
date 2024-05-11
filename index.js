const express = require('express')
const app = express()
const port = 3000

app.get('/soma', (req, res) => {
    const soma = 100 + 1;
    res.send({soma: soma})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
