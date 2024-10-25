window.onload = function() {
    const products = [
        { name: "Laptop", price: 3000 },
        { name: "Phone", price: 1000 },
        { name: "Headphones", price: 150 },
        { name: "Mouse", price: 50 }
    ];
    const cart = [];
    const productListElem = document.getElementById("product-list");
    const cartElem = document.getElementById("cart");
    const totalElem = document.getElementById("total");

    products.forEach(product => {
        const productElem = document.createElement("div");
        productElem.className = "product";
        productElem.innerHTML = `${product.name} - ${product.price}$`;
        
        const addButton = document.createElement("button");
        addButton.className = "add-button"; 
        addButton.textContent = "Add";
        addButton.onclick = () => addToCart(product);

        productElem.appendChild(addButton);
        productListElem.appendChild(productElem);
    });

    updateCart();

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartElem.innerHTML = "";
        let total = 0;

        if(cart.length === 0){
            const cartEmptyElem = document.createElement("div");
            cartEmptyElem.className = "cart-empty";
            cartEmptyElem.innerHTML = `You have no products in the cart`;
            cartElem.appendChild(cartEmptyElem);
        }

        cart.forEach((item, index) => {
            const cartItemElem = document.createElement("div");
            cartItemElem.className = "cart-item fade-in";
            cartItemElem.innerHTML = `${item.name} - ${item.price}$`;
            
            const removeButton = document.createElement("button");
            removeButton.className = "remove-button";
            removeButton.textContent = "Remove";
            removeButton.onclick = () => removeFromCart(index, cartItemElem);

            cartItemElem.appendChild(removeButton);
            cartElem.appendChild(cartItemElem);
            total += item.price;
        });

        totalElem.textContent = `Total: ${total}$`;
    }

    function removeFromCart(index, cartItemElem) {
        cartItemElem.classList.add("fade-out"); 
        setTimeout(() => {
            cart.splice(index, 1); 
            updateCart(); 
        }, 500); 
    }
};
