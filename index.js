const cart = document.querySelector(".cart-div");
const dropdown = document.querySelector(".dropdown");
const cards = document.querySelector(".card-list");
const cross = document.querySelector(".cross");
const productDetail = document.querySelector(".product-detail");
const mainContainer = document.querySelector(".main-container");
const cushionImage = document.querySelectorAll(".cushion-image");
const cushionName = document.querySelector(".product-name");
const arrowUp = document.querySelector(".arrow-up");

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
  mainContainer.style.overflow = "hidden";
  const selectedCushion = e.srcElement.parentElement.innerText.split(" ")[0];
  for (let i = 0; i < cushionList.length; i++) {
    if (cushionList[i].name.split(" ")[0] === selectedCushion) {
      cushionName.innerText = cushionList[i].name;
      cushionImage.forEach((cushion) => (cushion.src = cushionList[i].imgSrc));
    }
  }
  productDetail.classList.add("card-visible");
  mainContainer.classList.add("container");
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
};

const handleCrossClick = () => {
  productDetail.classList.remove("card-visible");
  mainContainer.classList.remove("container");
  document.body.style.overflow = "unset";
};

const handleArrowClick = () => {
  window.scroll({ top: 0, behavior: "smooth" });
};

cart.addEventListener("click", () => handleCartClick());
window.addEventListener("click", (e) => handleBodyClick(e));
cards.addEventListener("click", (e) => handleCardClick(e));
cross.addEventListener("click", () => handleCrossClick());
arrowUp.addEventListener("click", () => handleArrowClick());

