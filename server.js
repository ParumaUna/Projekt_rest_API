const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

//middlewear
app.use(express.json());
app.use('/api/user', require('./routes/routes'));

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})
