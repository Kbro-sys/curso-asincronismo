import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchDt(urlAPI){
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
}

const anotherFunction = async(urlAPI) =>{
    try{
        const products = await fetchDt(`${API}/products`);
        const product = await fetchDt(`${API}/products/${products[0].id}`);
        const category = await fetchDt(`${API}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    }catch (error){
        console.log(error);
    }
} 

anotherFunction(API);