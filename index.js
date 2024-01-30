import express from 'express';
import recipesRouter from './routes/recipesRouter.js';

const app = express();
const port = 8000;

app.use('/recipes', recipesRouter);

app.get("/", (req, res) => {
    res.send('GET request to the root')
});


    

app.listen(port, () => {
    console.log(`Example app listenting on port ${port}`);
})
