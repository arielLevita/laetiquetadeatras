import { checkboxGenerator, cardGenerator, generalFilter } from "./generalModule.js";

// Almacenar los elementos a dinamizar.
const cardsContainer = document.getElementById("cardsContainer");
const categorySelectors = document.getElementById("categorySelectors");
const input = document.querySelector('input');

// Obtener información de los eventos y generar el contenido dinámico.
async function getData() {
    try {
        const response = await fetch ("../data/products.json");
        const data = await response.json();
        // Guardar los dato de products.js en una variable.
        let productsArray = data.products;
        // Generar detectores de eventos que disparen determinada función.
        input.addEventListener('input', () => generalFilter(productsArray, cardsContainer, input));
        categorySelectors.addEventListener('change', () => generalFilter(productsArray, cardsContainer, input));
        // Generar los selectores de categoría a partir del arreglo de eventos.
        checkboxGenerator(productsArray, categorySelectors);
        // Generar las tarjetas a partir del arreglo de eventos.
        cardGenerator(productsArray, cardsContainer);
        return data;
    }
    catch(error) {
        console.log(error);
    }
}
getData();

