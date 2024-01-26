import express from 'express';
import  { getRecipes } from '../controllers/recipesControllers.js';

const recipesRouter = express.Router();

recipesRouter.get(`/`, getRecipes);

export default recipesRouter;
