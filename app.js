const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

function validateCardInput() {
    var cardNumberInput = document.getElementById('cardNumberInput');
    var expiryMonthInput = document.getElementById('expiryMonthInput');
    var expiryYearInput = document.getElementById('expiryYearInput');
    var cvvInput = document.getElementById('cvvInput');
    var cardError = document.getElementById('cardError');

    var firstNameInput = document.getElementById('firstNameInput');
    var phoneNumberInput = document.getElementById('phoneNumberInput');
    var addressInput = document.getElementById('addressInput');

    // Regular expressions for Visa and MasterCard
    var visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var mastercardRegEx = /^5[1-5][0-9]{14}$/;

    if (
        cardNumberInput.value === '' ||
        expiryMonthInput.value === '' ||
        expiryYearInput.value === '' ||
        cvvInput.value === '' ||
        firstNameInput.value === '' ||
        phoneNumberInput.value === '' ||
        addressInput.value === ''
    ) {
        cardError.innerHTML = "Please fill out all the input fields.";
        cardError.style.color = 'red';
        return;
    }

    if (!visaRegEx.test(cardNumberInput.value) && !mastercardRegEx.test(cardNumberInput.value)) {
        cardError.innerHTML = "Please enter a valid Visa or MasterCard number.";
        cardError.style.color = 'red';
        return;
    }

    if (!/^(0[1-9]|1[0-2])$/.test(expiryMonthInput.value)) {
        cardError.innerHTML = "Please enter a valid expiration month (MM).";
        cardError.style.color = 'red';
        return;
    }

    if (!/^20[2-9][0-9]$/.test(expiryYearInput.value)) {
        cardError.innerHTML = "Please enter a valid expiration year (YYYY).";
        cardError.style.color = 'red';
        return;
    }

    if (!/^[0-9]{3}$/.test(cvvInput.value)) {
        cardError.innerHTML = "Please enter a valid 3-digit CVV.";
        cardError.style.color = 'red';
        return;
    }

    // Validate phone number for the Philippines
    var phoneRegEx = /^(09|\+639)\d{9}$/; // Philippine mobile number format
    if (!phoneRegEx.test(phoneNumberInput.value)) {
        cardError.innerHTML = "Please enter a valid Philippines phone number.";
        cardError.style.color = 'red';
        return;
    }

   // If all inputs are valid, display the success message.
    cardError.innerHTML = "Payment checkout successful! Thank you for your purchase";
    cardError.style.color = 'green';

    // Clear all input fields
    cardNumberInput.value = '';
    expiryMonthInput.value = '';
    expiryYearInput.value = '';
    cvvInput.value = '';
    firstNameInput.value = '';
    phoneNumberInput.value = '';
    addressInput.value = '';
  }