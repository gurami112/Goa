import axios from 'axios';

const fetchRecipes = async (ingredient) => {
    const appId = 'd8b39cfb'; // Replace with your actual APP_ID
    const appKey = '519dff30f654196da1d86bc5b2e82c44'; // Replace with your actual APP_KEY
    
    const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${appId}&app_key=${appKey}`;

    try {
        const response = await axios.get(url);
        return response.data.hits;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};

export default fetchRecipes;