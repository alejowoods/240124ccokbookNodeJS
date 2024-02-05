import { pool } from "../db/pool.js";

export const getRecipes = async (req, res) => {
    console.log('getRecipes');
    try {
        // const {rows} = await pool.query('SELECT * FROM recipes');
        const {rows} = await pool.query(`SELECT 
        recipes.id, 
        recipes.title, 
        recipes.image, 
        recipes.description, 
        recipes.instructions,
        STRING_AGG(CONCAT(quantity.quantity::text, ' ', ingredients.unit, ' ', ingredients.name), ', ') AS ingredients
      FROM 
        recipes
        INNER JOIN 
        quantity ON recipes.id = quantity.recipe_id
      INNER JOIN 
        ingredients ON quantity.ingredient_id = ingredients.id
      GROUP BY recipes.id;`);

        console.log(rows);
        res.json(rows);
    } catch (error) {
        res.sendStatus(500)
    }
}; 
export const getRecipe = async (req, res) => {
    const {id} = req.params;
    try {
        const {rows} = await pool.query(`SELECT 
        recipes.id, 
        recipes.title, 
        recipes.image, 
        recipes.description, 
        recipes.instructions,
        STRING_AGG(CONCAT(quantity.quantity::text, ' ', ingredients.unit, ' ', ingredients.name), ', ') AS ingredients
      FROM 
        recipes
        INNER JOIN 
        quantity ON recipes.id = quantity.recipe_id
      INNER JOIN 
        ingredients ON quantity.ingredient_id = ingredients.id
      WHERE recipes.id = $1;

      `, [id]);
        res.json(rows[0]);
        console.log(rows);
        
    } catch (error) {
        res.sendStatus(500)
    }

};

export const postRecipe = async (req, res) => {
    const {name, ingredients, directions} = req.body;
    try {
        const {rows} = await pool.query('INSERT INTO recipes (name, ingredients, directions) VALUES ($1, $2, $3) RETURNING *', [name, ingredients, directions]);
        res.json(rows);
        console.log(rows);
        
    } catch (error) {
        res.sendStatus(500)
        
    }

};

export const modifyRecipe = async (req, res) => {
    const {id} = req.params;
    const {name, ingredients, directions} = req.body;
    try {
        const {rows} = await pool.query('UPDATE recipes SET name = $1, ingredients = $2, directions = $3 WHERE id = $4 RETURNING *', [name, ingredients, directions, id]);
        res.json(rows);
        console.log(rows);
        
    } catch (error) {
        res.sendStatus(500)
        
    }
    
};

export const deleteRecipe = async (req, res) => {
    const {id} = req.params;
    try {
        const {rows} = await pool.query('DELETE FROM recipes WHERE id = $1 RETURNING *', [id]);
        res.json(rows);
        console.log(rows);
        
    } catch (error) {
        res.sendStatus(500)
        
    }
    
}
