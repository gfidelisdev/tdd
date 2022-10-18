const express = require('express')
const app = express()
const port = 3131

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/color', (req,res)=>{
    res.json({
        color:'BlUe'
    })
})

module.exports = app
