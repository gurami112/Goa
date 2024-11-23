import fetchRecipes from './recipeFetcher.js';

document.getElementById('searchButton').addEventListener('click', async () => {
    const ingredient = document.getElementById('ingredient').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    try {
        const recipes = await fetchRecipes(ingredient);
        if (recipes.length === 0) {
            resultsDiv.innerHTML = '<p>No recipes found.</p>';
        } else {
            recipes.forEach(recipeData => {
                const recipe = recipeData.recipe;
                const recipeElement = document.createElement('div');
                recipeElement.innerHTML = `
                    <h2>${recipe.label}</h2>
                    <img src="${recipe.image}" alt="${recipe.label}">
                    <p>${recipe.ingredientLines.join(', ')}</p>
                    <a href="${recipe.url}" target="_blank">View Recipe</a>
                `;
                resultsDiv.appendChild(recipeElement);
            });
        }
    } catch (error) {
        resultsDiv.innerHTML = '<p>Error fetching recipes. Please try again later.</p>';
    }
});