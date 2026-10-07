/* =========================================
   LOADS — MENU BOOK INTERACTION
========================================= */


/* =========================================
   FOOD DATA
========================================= */

const foodData = {

  feliz: {
    number: "SIGNATURE / 01",
    name: "Feliz Special Kumbir",
    price: "24",
    image: "images/feliz-final.png",

    description:
      "A loaded baked potato layered with rich flavours, creamy sauces and satisfying toppings. A bold and comforting LOADS favourite made for hungry customers.",

    style: "Signature",
    portion: "Generous",
    experience: "Filling"
  },


  kozlu: {
    number: "SIGNATURE / 02",
    name: "Kozlu Et Lavas",
    price: "22",
    image: "images/kozlu-et-lavas.png",

    description:
      "A Turkish-inspired lavash wrap packed with seasoned meat, fresh ingredients and bold sauces. Designed for a satisfying meal on the go.",

    style: "Turkish",
    portion: "Generous",
    experience: "Bold"
  },


  "loaded-fries": {
    number: "SIGNATURE / 03",
    name: "Loaded Fries",
    price: "18",
    image: "images/loaded-fries.png",

    description:
      "Crispy golden fries finished with rich toppings, sauces and layers of flavour. A satisfying choice for sharing or enjoying on your own.",

    style: "Loaded",
    portion: "Large",
    experience: "Comfort"
  },


  shawarma: {
    number: "SIGNATURE / 04",
    name: "Shawarma",
    price: "15",
    image: "images/shawarma.png",

    description:
      "Tender seasoned meat wrapped with fresh ingredients and signature sauces. A familiar favourite with the LOADS approach.",

    style: "Classic",
    portion: "Generous",
    experience: "Everyday"
  },


  "box-pizza": {
    number: "SIGNATURE / 05",
    name: "Box Pizza",
    price: "28",
    image: "images/box-pizza.png",

    description:
      "A convenient pizza experience packed into a practical box. Rich toppings, melted cheese and bold flavours made for sharing or enjoying on the move.",

    style: "Pizza",
    portion: "Generous",
    experience: "Convenient"
  },


  burger: {
    number: "SIGNATURE / 06",
    name: "LOADS Burger",
    price: "25",
    image: "images/burger.png",

    description:
      "A bold and satisfying burger built with a juicy centre, fresh ingredients and signature LOADS flavours.",

    style: "Classic",
    portion: "Generous",
    experience: "Satisfying"
  }

};


/* =========================================
   GET BOOK ELEMENTS
========================================= */

const loadsBook =
  document.getElementById("loadsBook");


const menuItems =
  document.querySelectorAll(".book-food[data-food]");


const detailBack =
  document.getElementById("detailBack");


/* =========================================
   DETAIL ELEMENTS
========================================= */

const bookFoodImage =
  document.getElementById("bookFoodImage");


const bookFoodNumber =
  document.getElementById("bookFoodNumber");


const bookFoodName =
  document.getElementById("bookFoodName");


const bookFoodPrice =
  document.getElementById("bookFoodPrice");


const bookFoodDescription =
  document.getElementById("bookFoodDescription");


const bookFoodStyle =
  document.getElementById("bookFoodStyle");


const bookFoodPortion =
  document.getElementById("bookFoodPortion");


const bookFoodExperience =
  document.getElementById("bookFoodExperience");


/* =========================================
   OPEN FOOD PAGE
========================================= */

function openFood(foodKey) {

  const food =
    foodData[foodKey];


  if (!food) {
    return;
  }


  /* =====================================
     UPDATE FOOD INFORMATION
  ====================================== */

  bookFoodNumber.textContent =
    food.number;


  bookFoodName.textContent =
    food.name;


  bookFoodPrice.textContent =
    food.price;


  bookFoodDescription.textContent =
    food.description;


  bookFoodStyle.textContent =
    food.style;


  bookFoodPortion.textContent =
    food.portion;


  bookFoodExperience.textContent =
    food.experience;


  /* =====================================
     CHANGE IMAGE
  ====================================== */

  bookFoodImage.style.opacity = "0";


  setTimeout(() => {

    bookFoodImage.src =
      food.image;

    bookFoodImage.alt =
      food.name;

    bookFoodImage.style.opacity = "1";

  }, 250);


  /* =====================================
     START BOOK TURN
  ====================================== */

  loadsBook.classList.add("page-turning");

  loadsBook.classList.add("show-food");


  /* Remove animation class after turn */

  setTimeout(() => {

    loadsBook.classList.remove("page-turning");

  }, 1200);

}


/* =========================================
   FOOD BUTTONS
========================================= */

menuItems.forEach(item => {

  item.addEventListener("click", () => {

    const foodKey =
      item.dataset.food;


    openFood(foodKey);

  });

});


/* =========================================
   BACK TO MENU
========================================= */

if (detailBack) {

  detailBack.addEventListener("click", () => {

    loadsBook.classList.add("page-turning");


    loadsBook.classList.remove("show-food");


    setTimeout(() => {

      loadsBook.classList.remove("page-turning");

    }, 1200);

  });

}