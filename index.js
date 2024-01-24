const cart = document.querySelector(".cart-div");
const dropdown = document.querySelector(".dropdown");
const cards = document.querySelector(".card-list");
const cross = document.querySelector(".cross");
const productDetail = document.querySelector(".product-detail");
const mainContainer = document.querySelector(".main-container");
const cushionImage = document.querySelectorAll(".cushion-image");
const cushionName = document.querySelector(".product-name");

const cushionList = [
  {
    name: "Plated Cushion",
    imgSrc: "/assets/Rectangle 10.png",
  },
  {
    name: "Silver Cushion",
    imgSrc: "/assets/Rectangle 12.png",
  },
  {
    name: "Deep Blue Cushion",
    imgSrc: "/assets/Rectangle 14.png",
  },
  {
    name: "Pink Cushion",
    imgSrc: "/assets/Rectangle 15.png",
  },
  {
    name: "Black Cushion",
    imgSrc: "/assets/Rectangle 16.png",
  },
  {
    name: "Green Cushion",
    imgSrc: "/assets/Rectangle 17.png",
  },
];

const handleCartClick = () => {
  dropdown.classList.toggle("visible");
};

const handleBodyClick = (e) => {
  if (e.srcElement.className !== "cart") {
    for (let i = 0; i < dropdown.classList.length; i++) {
      if (dropdown.classList[i] === "visible") {
        dropdown.classList.remove("visible");
      }
    }
  }
};

const handleCardClick = (e) => {
  const selectedCushion = e.srcElement.parentElement.innerText.split(" ")[0];
  for (let i = 0; i < cushionList.length; i++) {
    if (cushionList[i].name.split(" ")[0] === selectedCushion) {
      cushionName.innerText = cushionList[i].name;
      cushionImage.forEach((cushion) => (cushion.src = cushionList[i].imgSrc));
    }
  }
  productDetail.classList.add("card-visible");
  mainContainer.style.background = "rgba(47.81, 47.81, 47.81, 0.60)";
  mainContainer.style.filter = "blur(10px)";
};

const handleCrossClick = () => {
  productDetail.classList.remove("card-visible");
  mainContainer.style.background = "";
  mainContainer.style.filter = "";
};

cart.addEventListener("click", () => handleCartClick());
window.addEventListener("click", (e) => handleBodyClick(e));
cards.addEventListener("click", (e) => handleCardClick(e));
cross.addEventListener("click", () => handleCrossClick());
