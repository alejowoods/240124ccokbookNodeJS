const recipes = [{name: "pizza", ingredients: "cheese, tomato sauce"}, {name:"spaguetti carbonara", ingredients:"pasta, bacon"}]

export const getRecipes = (req, res) => {
    res.send(recipes);
    console.log(`Visitor at /recipes`);
}; 