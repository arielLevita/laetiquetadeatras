const detailsContainer = document.getElementById("product-details");

// Obtener información de los productos y generar el contenido dinámico.
async function getData() {
    try {
        const response = await fetch ("../data/products.json");
        const data = await response.json();
        // Guardar la información de amazing.js en una variable para acceder y manipular la información.
        let products = data.products;
        const queryString = location.search;
        const params = new URLSearchParams(queryString);
        const detailId = params.get('id');
        const product = products.find(product => product._id == detailId);
        
        detailsGenerator(product, detailsContainer);
    }
    catch(error) {
        console.log(error);
    }
}
getData();

// Crear el molde de tarjeta dentro del div "cards". Asignarle la imagen de fondo.
function detailsGenerator(product, detailsContainer) {
    let div = document.createElement("div");
    div.classList.add('details-card', 'row', 'p-5', 'grid', 'gap-3');
    div.innerHTML =
        `<div class="col-lg-8 p-3 details-image border border-dark" id="bg-details${product._id}">
        </div>
        <div class="col p-3 details-data bg-light">
            <h3 class="text-center p-3">${product.name}</h3>
            <ul>
            <li class="pt-2"><span>Marca:</span> ${product.brand}</li>
            <li class="pt-2"><span>Producto:</span> ${product.name}</li>
            <li class="pt-2"><span>Categoría:</span> ${product.category}</li>
            <li class="pt-2"><span>Tamaño de la porción:</span> ${product.servingSize}</li>
            </ul>
        </div>`;
    detailsContainer.appendChild(div)
    document.getElementById(`bg-details${product._id}`).style.backgroundImage = `url(${product.imageBack})`;
}