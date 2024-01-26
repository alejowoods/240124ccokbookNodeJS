import express from 'express';
import recipesRouter from './routes/recipesRouter.js';

const app = express();
const port = 8000;

app.use('/recipes', recipesRouter);

app.listen(port, (req, res) => {
    console.log(`Example app listenting on port ${port}`);
})
