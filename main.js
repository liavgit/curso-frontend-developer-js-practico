/*<li class="navbar-email">platzi@example.com</li>
<div class="desktop-menu inactive">
<div class="mobile-menu">*/

//menu desktop
const menuEmail = document.querySelector(".navbar-email");
const deskTopMenu = document.querySelector(".desktop-menu");

//menu de mobile
const hamburguerMenuIcon = document.querySelector(".menu");
const hamburguerMenu = document.querySelector(".mobile-menu");

//carrito
const carritoMenuIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

//cards
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamburguerMenuIcon.addEventListener("click", toggleMobileMenu);
carritoMenuIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  //si abrimos el menuEmail cerramos el carrito
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  //quita  o pone la clase inactive dependiendo si la tiene  o no
  deskTopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  //si abrimos el menu del mobile cerramos el carrito
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  //quita  o pone el menu de la hamburguesa
  hamburguerMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = hamburguerMenu.classList.contains("inactive");
  //si abrimos el carrito cerramos el menu mobile
  if (!isMobileMenuClosed) {
    hamburguerMenu.classList.add("inactive");
  }
  //quita  o pone el menu de la hamburguesa
  aside.classList.toggle("inactive");
}

/*Arreglo que devolveria la consulta a la base de datos  por api rest */
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computador",
  price: 300,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

//maquetar html desde js para ver la lista de productos
function renderProducts(arreglo) {
    /*recorrer el array y mostrar los productos en las cards en la pnatlla*/
    for (product of arreglo) {
    //console.log(product.name); // bike - pantalla - computador

    //<div class="product-card">
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //<img src="https://images.pexels.com/photos..." alt="">
    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);

    //<div class="product-info">
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    //<div>
    const productInfoDiv = document.createElement("div");

    //<p>$120,00</p>
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    //<p>Bike</p>
    const productName = document.createElement("p");
    productName.innerText = product.name;

    //<figure>
    const productInfoFigure = document.createElement("figure");

    //<img src="./icons/bt_add_to_cart.svg" alt="">
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    //...organizando el html del producto como esta en el index, poniendo los hijos y padres

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfoFigure.appendChild(productImgCart);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
    /*
    <!--div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </!--div>-->
    */

}

renderProducts(productList);