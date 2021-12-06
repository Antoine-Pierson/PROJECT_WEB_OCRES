const axios = require('axios');

export async function getOneCocktail(name) {

    try{
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name);
        return response.data;
    }catch(error) {
        return [];
    }
}

export async function getAllCommandes() {

    try{
        const response = await axios.get('http://localhost:8080/api/commande');
        return response.data;
    }catch(error) {
        return [];
    }
}

export async function postCommande(table, plat) {
    try{
        await axios.post('http://localhost:8080/api/commande', {
            table: table,
            plat: plat
        });
    }catch(error) {
        return [];
    }
}

export async function getCommandeRestaurant() {

    try{
        const response = await axios.get('http://localhost:8080/api/commande/prete?prete=true&servie=false');
        return response.data;
    }catch(error) {
        return [];
    }
}

export async function getCommandeCuisine() {

    try{
        const response = await axios.get('http://localhost:8080/api/commande/prete?prete=false&servie=false');
        return response.data;
    }catch(error) {
        return [];
    }
}

export async function updateCommande(prete, servie, table) {
    try{
        const commande = await axios.get('http://localhost:8080/api/commande/tableprete?prete='+prete+'&servie='+servie+'&table='+table);
        if(prete == false){
            await axios.put('http://localhost:8080/api/commande/'+commande.data[0].id, { prete: true});
        }
        else{
            await axios.put('http://localhost:8080/api/commande/'+commande.data[0].id, { servie: true});
        }
        
    }catch(error) {
        return [];
    }
}