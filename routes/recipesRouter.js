import express from 'express';
import  { getRecipes, getRecipe, postRecipe, modifyRecipe, deleteRecipe } from '../controllers/recipesControllers.js';

const recipesRouter = express.Router();

recipesRouter.get(`/recipes`, getRecipes);
recipesRouter.get(`/recipes/:id`, getRecipe);
recipesRouter.get(`/recipes`, postRecipe);
recipesRouter.get(`/recipes/:id`, modifyRecipe);
recipesRouter.get(`/recipes/:id`, deleteRecipe);

export default recipesRouter;
