const express = require('express')
const app = express()
app.use(express.json())

app.listen(8000,() => {
    console.log('server is working');
})

var contacts = [
    {
        id:"1",
        name:"Joe"
    }
]

app.get('/contact',(req,res) => {
    res.send({
        success:true,
        message:'Data is saved successfully',
        data:contacts
    })
})


