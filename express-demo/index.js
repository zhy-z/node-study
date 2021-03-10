const express = require('express')
const app  = express()
const port = 3000
app.get('/',(req,res)=>{
    console.log(req.route)
    res.send(`hello word`)
})
app.get('/about',function(req , res){
    res.send(`路径about`)
})
app.listen(port,()=>{
    console.log(`${port}`)
})