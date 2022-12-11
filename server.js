import express from "express";
import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewear
app.use(express.json());
app.use("/contacts", routes);

app.listen(PORT, () => {
    console.log(`Server is up on http://localhost:8000/contacts`)
})
