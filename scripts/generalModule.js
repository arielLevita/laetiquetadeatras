// ----- FUNCIONES GENERALES PARA EXPORTAR -----

// Unir los filtros.
export function generalFilter(productsArray, cardsContainer, input) {
    let firstFilter = filterBySearchbox(productsArray, input.value);
    let secondFilter = filterByCheckbox(firstFilter);
    cardGenerator(secondFilter, cardsContainer);
}
// Generar los checkboxes a partir de las categorías filtradas.
export function checkboxGenerator(productsArray, categoryCheckboxes) {
    let categoriesArray = productsArray.map(product => product.category);
    let setproduct = new Set(categoriesArray);
    let filteredCategoriesArray = Array.from(setproduct);
    let docFrag = document.createDocumentFragment();
    filteredCategoriesArray.forEach(category => {
        let div = document.createElement("div");
        div.classList.add('d-flex', 'align-items-center', 'w-100');
        div.innerHTML =
            `<input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="cat${category}"
                value="${category}"
            />
            <label for="cat${category}">${category}</label>`;
        docFrag.appendChild(div);
    });
    categoryCheckboxes.appendChild(docFrag);
}
// Crear el molde de tarjeta dentro del div "cards". Asignarle la imagen de fondo.
export function cardGenerator(productsArray, cardsContainer) {
    cardsContainer.innerHTML = '';
    if (productsArray.length == 0) {
        cardsContainer.innerHTML = `<h3 class="display-1 fw-bolder text-center">No soup for you!</h3>`;
        return;
    }
    let dFrag = document.createDocumentFragment();
    productsArray.forEach(product => {
        let div = document.createElement("div");
        div.classList.add('card', 'shadow');
        div.setAttribute('id', `card${product._id}`);
        div.innerHTML =
            `<div class="card-image" id="bg-product${product._id}"></div>  
            <div class="card-body">
                <h6 class="card-title text-center">${product.name}</h6>
            </div>
            <div class="row card-bottom d-flex align-items-baseline">
                <div class="col btn-details shadow p-0">
                    <a href="../pages/product-details.html?id=${product._id}" class="btn btn-sm w-100">Detalles</a>
                </div>
            </div>`;
        dFrag.appendChild(div)
        dFrag.getElementById(`bg-product${product._id}`).style.backgroundImage = `url(${product.imageFront})`;
    });
    cardsContainer.appendChild(dFrag);
}
// Crear filtro por input de texto.
function filterBySearchbox(productsArray, searchTerm) {
    let filteredArray = productsArray.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredArray;
}
// Crear filtro por input de checkbox.
function filterByCheckbox(productsArray) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let checkboxesArray = Array.from(checkboxes);
    let checkedCheckboxes = checkboxesArray.filter(check => check.checked);
    let checkedCheckboxesValues = checkedCheckboxes.map(checkedCheckbox => checkedCheckbox.value);
    let filteredArray = productsArray.filter(product => checkedCheckboxesValues.includes(product.category));
    if (checkedCheckboxes.length > 0) {
        console.log(filteredArray)
        return filteredArray;
    };
    return productsArray;
}
