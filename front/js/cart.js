/*
*
* Récupération de tous les produits de l'API
*
*/
fetch("http://localhost:3000/api/products/")
    // Retour du résultat en JSON.
    .then((result) => result.json())
    // On nomme le résulat apiProducts.
    .then((apiProducts) => {
        // On affiche ce qui a été récupéré sous forme tableau dans la console.
        console.table(apiProducts);
        //

    })
    // Une erreur est survenue si détecté
    .catch((error) => {
        console.log(error);
    });

/*
*
* 
*
*/

function displayCart(cart) {
// On crée un élément <div> en mémoire
const documentFragment = document.createElement('div');
// On récupére l'élément items situé dans le DOM
let itemsContainer = document.getElementById('cart__items');

// 
for (let cart of carts) {

    // 
    documentFragment.innerHTML += `
        <article class="cart__item" data-id="${cart._id}" data-color="${cart.colors}">
            <div class="cart__item__img">
            <img src="${cart._image}" alt="${cart._alt}">
            </div>
            <div class="cart__item__content">
            <div class="cart__item__content__description">
                <h2>${cart.name}</h2>
                <p>${cart.colors}</p>
                <p>${cart.price}</p>
            </div>
            <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart.quantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
                </div>
            </div>
            </div>
        </article>
    `
    }
}