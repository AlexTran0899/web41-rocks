console.log('it is working')
const express = require('express')

const server = express()

const port = process.env.PORT || 5000

server.use(express.json())

server.get('/api/*', (req, res)=>{
    res.json({
        cohort:'web 41'
    })
})


server.listen(port, ()=>{
    console.log(`listening on ${port}`)
})