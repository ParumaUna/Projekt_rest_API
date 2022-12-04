let contacts = [
    {
        id: "1",
        name:"sherry"
    },
];

export const getUser = (req, res) => {
    res.send(contacts);
    console.log(contacts);
  };

export const postUser = (req,res) => {
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
}

export const removeUser = (req,res) => {
    var id = req.params.id
    var newcontacts = contacts.filter(el => el.id != id)
    contacts = newcontacts

    res.send({
        success:true,
        message:'Data deleted successfully',
        data:contacts
    })
}

export const updateUser = (req,res) => {
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
}
