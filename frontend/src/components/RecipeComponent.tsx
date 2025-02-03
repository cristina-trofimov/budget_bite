import React, { useState, useEffect } from 'react';

import Ingredient from '../interface/ingredient';
import Recipe from '../interface/Recipe';
import './RecipeComponent.css';

const API_KEY = "34a7dac016c6479c9c30c16be772b3d8";

interface RecipeComponentProps {
    initialIngredients?: Ingredient[];
  }

  const RecipeComponent: React.FC<RecipeComponentProps> = ({ initialIngredients = [
    { name: "carrot", cost: 2 }, 
    { name: "chicken", cost: 2 },
    { name: "cabbage", cost: 2 },
] }) => {
    const [ingredients, setIngredients] = useState<Ingredient[]>(initialIngredients);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        setIngredients(initialIngredients);
      }, [initialIngredients]);

    /////////// function to format ingredient for API
    const formatIngredients = (ingredients: Ingredient[]): string => {
        return ingredients.map(ing => ing.name).join(",+");
    };

    ////////// function to calculate total cost
    const calculateTotalCost = (ingredients: Ingredient[]): number => {
        return ingredients.reduce((sum, ing) => sum + ing.cost, 0);
    };

    

    const getUsedIngredients =  async (recipeId : string): Promise<Ingredient[]> => {
      const urlRecipe = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;

      try {
        const response = await fetch(urlRecipe);
        const data = await response.json();
        const usedIngredients =  data.extendedIngredients.map((ingredient: any) => ingredient.name);

        const matchingIngredients = ingredients.filter(ingredient => 
          usedIngredients.includes(ingredient.name)
        );
      
        return matchingIngredients; 
      } catch (error) {
        setError("Erreur.");
      }
      return[];


    }

    ///////// Fetch recipes from API
    const fetchRecipes = async () => {
        setError(null);

        if (ingredients.length === 0) {
            setError("Veuillez entrer au moins un ingrédient.");
            return;
        }

        const formattedIngredients = formatIngredients(ingredients);
        const ranking = 1;
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${formattedIngredients}&number=2&ranking=${ranking}&apiKey=${API_KEY}`;


        try {
            const response = await fetch(url);
            const data = await response.json();

            const newRecipes = await Promise.all(data.map(async (recipe: any) => {
              const usedIngredients = await getUsedIngredients(recipe.id.toString());
              const recipeCost = await calculateTotalCost(usedIngredients); // Ensure the id is a string
              return {
                  id: recipe.id,
                  title: recipe.title,
                  img: recipe.image,
                  cost: recipeCost, 
                  content: "",
                  usedIngredients: usedIngredients,
                  missedIngredients: recipe.missedIngredients.map((ingredient: any) => ingredient.name)
              };
          }));

            setRecipes(newRecipes);
            
        } catch (error) {
            setError("Erreur lors de la récupération des recettes.");
        }
    };

    return (
      <div className="recipe-container">
          <h1>Recherche de Recettes</h1>
          <button onClick={fetchRecipes} className="recipe-button">
              Rechercher
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="recipe-list">
              {recipes.map((recipe) => (
                  <div key={recipe.id} className="recipe-card">
                      <h3>{recipe.title}</h3>
                      <img src={recipe.img} alt={recipe.title} />
                      <h3 style={{ color: "black" }}>{recipe.cost} $</h3>
                      <div className="usedIngredients">
                <h4>Ingredients in special: </h4>
                <div className = "notSpecial">
                {
                    recipe.usedIngredients.map((ingredient, index) => (
                        <div key={index} className="ing">
                            <p>{ingredient.name}</p>
                        </div>
                    ))
                }
                </div>
            </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default RecipeComponent;
function setError(arg0: null) {
  throw new Error('Function not implemented.');
}

