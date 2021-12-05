const axios = require('axios');

export async function getAllCocktail() {

    try{
        const response = await axios.get('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function getOneCocktail(name) {

    try{
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name);
        return response.data;
    }catch(error) {
        return [];
    }
}