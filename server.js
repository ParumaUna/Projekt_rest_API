const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is up on port ${port}`));

//middlewear
app.use('/api/user', require('./routes/routes'));
app.use(express.json());


/*
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
*/