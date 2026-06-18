/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.08)";

    }

    else{

        navbar.style.boxShadow =
        "0 2px 20px rgba(0,0,0,0.05)";

    }

});

/* =========================
   TOAST NOTIFICATION
========================= */

function showToast(message){

    const toast = document.createElement("div");

    toast.classList.add("toast");

    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        ${message}
    `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    },100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        },300);

    },2500);

}

/* =========================
   ADD TO CART
========================= */

const addCartButtons =
document.querySelectorAll(".add-cart-btn");

addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        showToast("Product added to cart");

        button.innerHTML =
        `<i class="fa-solid fa-check"></i> Added`;

        button.style.background =
        "#10b981";

        setTimeout(() => {

            button.innerHTML =
            "Add to Cart";

            button.style.background =
            "linear-gradient(135deg,#7c3aed,#2563eb)";

        },2000);

    });

});

/* =========================
   WISHLIST BUTTONS
========================= */

const wishlistButtons =
document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if(button.classList.contains("active")){

            button.innerHTML =
            `<i class="fa-solid fa-heart"></i>`;

            showToast("Added to wishlist");

        }

        else{

            button.innerHTML =
            `<i class="fa-regular fa-heart"></i>`;

        }

    });

});

/* =========================
   PRODUCT GALLERY SWITCH
========================= */

const thumbnails =
document.querySelectorAll(".thumbnail-images img");

const mainImage =
document.querySelector(".main-product-image img");

thumbnails.forEach(image => {

    image.addEventListener("click", () => {

        mainImage.src = image.src;

        thumbnails.forEach(img => {

            img.classList.remove("active-thumb");

        });

        image.classList.add("active-thumb");

    });

});

/* =========================
   COLOR OPTIONS
========================= */

const colors =
document.querySelectorAll(".color");

colors.forEach(color => {

    color.addEventListener("click", () => {

        colors.forEach(c => {

            c.classList.remove("active");

        });

        color.classList.add("active");

    });

});

/* =========================
   STORAGE OPTIONS
========================= */

const storageButtons =
document.querySelectorAll(".storage-buttons button");

storageButtons.forEach(button => {

    button.addEventListener("click", () => {

        storageButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/* =========================
   QUANTITY CONTROLLER
========================= */

const quantityBoxes =
document.querySelectorAll(".quantity-box");

quantityBoxes.forEach(box => {

    const minusBtn =
    box.querySelectorAll("button")[0];

    const plusBtn =
    box.querySelectorAll("button")[1];

    const quantity =
    box.querySelector("span");

    let count = 1;

    plusBtn.addEventListener("click", () => {

        count++;

        quantity.innerText = count;

    });

    minusBtn.addEventListener("click", () => {

        if(count > 1){

            count--;

            quantity.innerText = count;

        }

    });

});

/* =========================
   CART QUANTITY
========================= */

const cartControllers =
document.querySelectorAll(".quantity-controller");

cartControllers.forEach(controller => {

    const minus =
    controller.querySelectorAll("button")[0];

    const plus =
    controller.querySelectorAll("button")[1];

    const value =
    controller.querySelector("span");

    let quantity = 1;

    plus.addEventListener("click", () => {

        quantity++;

        value.innerText = quantity;

    });

    minus.addEventListener("click", () => {

        if(quantity > 1){

            quantity--;

            value.innerText = quantity;

        }

    });

});

/* =========================
   REMOVE CART ITEM
========================= */

const removeButtons =
document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const cartItem =
        button.closest(".cart-item");

        cartItem.style.opacity = "0";

        cartItem.style.transform =
        "translateX(100px)";

        setTimeout(() => {

            cartItem.remove();

        },400);

        showToast("Item removed from cart");

    });

});

/* =========================
   PAYMENT METHOD ACTIVE
========================= */

const paymentOptions =
document.querySelectorAll(".payment-option");

paymentOptions.forEach(option => {

    option.addEventListener("click", () => {

        paymentOptions.forEach(item => {

            item.classList.remove("active");

        });

        option.classList.add("active");

    });

});

/* =========================
   PLACE ORDER BUTTON
========================= */

const placeOrderBtn =
document.querySelector(".place-order-btn");

if(placeOrderBtn){

    placeOrderBtn.addEventListener("click", () => {

        placeOrderBtn.innerHTML =
        `<i class="fa-solid fa-circle-notch fa-spin"></i>
         Processing...`;

        setTimeout(() => {

            placeOrderBtn.innerHTML =
            `<i class="fa-solid fa-check"></i>
             Order Placed`;

            placeOrderBtn.style.background =
            "#10b981";

            showToast("Order placed successfully");

        },2500);

    });

}

/* =========================
   NEWSLETTER SUBSCRIBE
========================= */

const newsletterButton =
document.querySelector(".newsletter-box button");

if(newsletterButton){

    newsletterButton.addEventListener("click", () => {

        showToast("Subscribed successfully");

    });

}

/* =========================
   SEARCH BAR EFFECT
========================= */

const searchInput =
document.querySelector(".search-bar input");

if(searchInput){

    searchInput.addEventListener("focus", () => {

        searchInput.parentElement.style.boxShadow =
        "0 0 0 4px rgba(124,58,237,0.15)";

    });

    searchInput.addEventListener("blur", () => {

        searchInput.parentElement.style.boxShadow =
        "none";

    });

}

/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const allButtons =
document.querySelectorAll("button");

allButtons.forEach(button => {

    button.addEventListener("click", function(e){

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple =
        document.createElement("span");

        ripple.classList.add("ripple");

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        },600);

    });

});

/* =========================
   PAGE LOAD ANIMATION
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(`
.product-card,
.service-card,
.order-card,
.checkout-card,
.cart-item
`);

const revealOnScroll = () => {

    const triggerBottom =
    window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top =
        element.getBoundingClientRect().top;

        if(top < triggerBottom){

            element.classList.add("show-reveal");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
   SCROLL ORB EFFECT
========================= */

const orb =
document.querySelector(".bg-orb");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    orb.style.transform = `
    translate(-50%,-50%)
    rotate(${scrollY * 0.15}deg)
    scale(${1 + scrollY * 0.0003})
    `;

});