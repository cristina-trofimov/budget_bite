import prop from "../interface/Prop"

const API_KEY = 'add8fe5591714c31b0c155c93938a688';

async function fetchRecipes() {
    prop testProp = prop()
    const input = document.getElementById("ingredients").value;
    const ingredients = input.split(",").map(ing => ing.trim()).join(",");
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        const data = await response.json();
        console.log('recettessss');
        console.log(url);
        console.log(data);
        console.log(response);
        displayRecipes(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes :", error);
    }
   
}

function displayRecipes(recipes) {
    const recipeContainer = document.getElementById("recipeResults");
    recipeContainer.innerHTML = ""; // Nettoie les résultats précédents

    recipes.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");

        recipeElement.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>Ingrédients manquants : ${recipe.missedIngredientCount}</p>
        `;

        recipeContainer.appendChild(recipeElement);
    });
}
