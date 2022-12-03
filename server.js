const express = require('express');
const { default: nodeTest } = require('node:test');
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

app.post('/contact',(req,res) => {
    var name = req.body.name
    if(name){
        contacts.push({
        id:(contacts.length + 1).toString(),
        name:name
        })
        res.send({
        success:true,
        message:'Data added successfully',
        })
    }else{
        res.send({
            success:false,
            message:" validation error",
        })
    }
})
app.delete('/contact/:id',(req,res) => {
    var id = req.params.id
    var newcontacts = contacts.filter(el => el.id != id)
    contacts = newcontacts

    res.send({
        success:true,
        message:'Data deleted successfully',
        data:contacts
    })
})

app.put('/contact/:id',(req,res) => {
    var id = req.params.id
    var name = req.body.name
    
    var index = contacts.findIndex(el => el.id == id)
    
    contacts[index] = {
        ...contacts[index],
        name:name
    }

    res.send({
        success:true,
        message:'Data changed successfully',
    })
})