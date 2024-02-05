import express from 'express';
import  { getRecipes, getRecipe, postRecipe, modifyRecipe, deleteRecipe } from '../controllers/recipesControllers.js';

const recipesRouter = express.Router();

recipesRouter.get(`/`, getRecipes);
recipesRouter.get(`/:id`, getRecipe);
recipesRouter.post(`/`, postRecipe);
recipesRouter.put(`/:id`, modifyRecipe);
recipesRouter.delete(`/:id`, deleteRecipe);

export default recipesRouter;
