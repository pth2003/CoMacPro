let currentIndex = 0;
const items = document.querySelectorAll(".product-item");

const itemsPerPage = 4;

function updateDisplay() {
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index >= currentIndex && index < currentIndex + itemsPerPage) {
      item.classList.add("active");
    }
  });
}
function nextProduct() {
  if (currentIndex + itemsPerPage < items.length) {
    currentIndex++;
  } else {
    currentIndex = 0; // Quay lại đầu danh sách khi đã đến cuối
  }
  updateDisplay();
}
function prevProduct() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - itemsPerPage; // Quay lại cuối danh sách khi đã ở đầu
  }
  updateDisplay();
}

updateDisplay();

const productData = [
  {
    imgSrc: "./assets/image/product.png",
    verifyIconSrc: "./assets/image/shield-tick.png",
    title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
    score: 4.2,
    details: {
      brand: "Platform Basket",
      Model: "Spider 15.75 Pro",
      year: 2021,
    },
    price: { day: "S$2000 /day", week: "S$2000 /week", month: "S$7000 /month" },
  },
  {
    imgSrc: "./assets/image/product.png",
    verifyIconSrc: "./assets/image/shield-tick.png",
    title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
    score: 4.2,
    details: {
      brand: "Platform Basket",
      Model: "Spider 15.75 Pro",
      year: 2021,
    },
    price: { day: "S$2000 /day", week: "S$2000 /week", month: "S$7000 /month" },
  },
  {
    imgSrc: "./assets/image/product.png",
    verifyIconSrc: "./assets/image/shield-tick.png",
    title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
    score: 4.2,
    details: {
      brand: "Platform Basket",
      Model: "Spider 15.75 Pro",
      year: 2021,
    },
    price: { day: "S$2000 /day", week: "S$2000 /week", month: "S$7000 /month" },
  },
  {
    imgSrc: "./assets/image/product.png",
    verifyIconSrc: "./assets/image/shield-tick.png",
    title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
    score: 4.2,
    details: {
      brand: "Platform Basket",
      Model: "Spider 15.75 Pro",
      year: 2021,
    },
    price: { day: "S$2000 /day", week: "S$2000 /week", month: "S$7000 /month" },
  },
];
