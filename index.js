import dotenv from 'dotenv';
import express from 'express';
import recipesRouter from './routes/recipesRouter.js';
import cors from 'cors';

dotenv.config();
const app = express();
const port = 8000;

app.use(cors());
app.use('/recipes', recipesRouter);

app.get("/", (req, res) => {
    res.send('GET request to the root')
});


    

app.listen(port, () => {
    console.log(`Example app listenting on port ${port}`);
})
