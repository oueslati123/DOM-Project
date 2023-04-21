//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

//cart workingjs
if (document.readyState == "loading") {
  document.addEventListener("DOMConentLoaded", ready);
} else {
  ready();
}

//Making Function
function ready() {
  //Remove Items From cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}

//Remove Items From cart
function removeCartItem(event) {
  var buttonclicked = event.target;
  buttonclicked.parentElement.remove();
}

//update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBoxes = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[]
        var = price parseFoat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.value
        total = total + (price * quantity);

       document.getElementsByClassName('total-price') []
    }
}
