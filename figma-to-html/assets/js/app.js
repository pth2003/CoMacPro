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

const data = [
  {
    heading: "Máy cấu",
    productData: [
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
    ],
  },
  {
    heading: "Máy xúc",
    productData: [
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
    ],
  },
  {
    heading: "Xe nâng",
    productData: [
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
    ],
  },
  {
    heading: "Máy phát điện",
    productData: [
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
      {
        imgSrc: "./assets/image/product.png",
        verifyIconSrc: "./assets/image/shield-tick.png",
        title: "2021 Spider 15.75 Pro Platform Basket Spider Lift",
        score: 4.2,
        details: {
          "Nhãn hiệu": "Platform Basket",
          Model: "Spider 15.75 Pro",
          "Năm sản xuất": "2021",
        },
        price: { day: "S$2000", week: "S$2000", month: "S$7000" },
      },
    ],
  },
];

// const renderProducts = (products) => {
//   const container = document.getElementById("product-container");
//   container.innerHTML = "";
//   products.forEach((product) => {
//     const card = document.createElement("div");
//     card.className = "col";
//     card.innerHTML = `
//       <div class="card position-relative">
//                 <img
//                   src="${product.imgSrc}"
//                   alt="product"
//                   class="card-img-top"
//                 />
//                 <div class="verify-icon position-absolute">
//                   <img src="${product.verifyIconSrc}" alt="" />
//                 </div>
//                 <div class="card-body">
//                   <h6 class="card-title fw-bold">
//                   ${product.title}
//                   </h6>
//                   <div class="rated">
//                     <img src="./assets/image/Star 1.svg" alt="" />
//                     <span><span class="score">${product.score}</span>/5</span>
//                   </div>
//                   <div class="card-text">
//                   ${Object.entries(product.details)
//                     .map(
//                       ([key, value]) =>
//                         ` <div class="d-flex justify-content-between align-items-center"> <span>${key}</span> <span>${value}</span> </div> `
//                     )
//                     .join("")}
//                   </div>
//                 </div>
//                 <div class="card-footer">
//                       <small class="text-small-secondary"><span class="price">${
//                         product.price.day
//                       }</span> /day</small>
//                       <small class="text-small-secondary"><span class="price">${
//                         product.price.week
//                       }</span> /week</small> <br/>
//                       <small class="text-small-secondary"><span class="price">${
//                         product.price.month
//                       }</span> /month</small>

//                 </div>
//               </div>
//     `;
//     container.appendChild(card);
//   });
// };

// renderProducts(productData);

const renderSection = (datas) => {
  const productSection = document.getElementById("product-section");
  productSection.innerHTML = "";
  datas.forEach((data) => {
    const sectionDiv = document.createElement("section");
    const sectionContainer = document.createElement("div");
    sectionContainer.className = "container mt-5";

    const sectionHeader = document.createElement("div");
    sectionHeader.className =
      "d-flex position-relative justify-content-between align-items-center";
    sectionHeader.innerHTML = ` 
      <h2 class="product-heading fw-bold d-flex align-items-center">${data.heading}</h2>
      <div
            class="carousel-controls position-absolute top-0 end-0 d-flex gap-4 align-items-center"
          >
            <div class="d-flex gap-3">
              <button class="btn btn-prev" onclick="prevProduct()">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button class="btn btn-next" onclick="nextProduct()">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <a href="#" class="all-product">Xem tất cả</a>
          </div>
    `;
    sectionContainer.appendChild(sectionHeader);
    sectionDiv.appendChild(sectionContainer);
    const productList = document.createElement("div");
    productList.className = "product-list mt-3 overflow-x-auto";
    const productContainer = document.createElement("div");
    productContainer.className = "row row-cols-1 row-cols-md-5";

    data.productData.forEach((product) => {
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card position-relative">
                  <img
                    src="${product.imgSrc}"
                    alt="product"
                    class="card-img-top"
                  />
                  <div class="verify-icon position-absolute">
                    <img src="${product.verifyIconSrc}" alt="" />
                  </div>
                  <div class="card-body">
                    <h6 class="card-title fw-bold">
                    ${product.title}
                    </h6>
                    <div class="rated">
                      <img src="./assets/image/Star 1.svg" alt="" />
                      <span><span class="score">${product.score}</span>/5</span>
                    </div>
                    <div class="card-text">
                    ${Object.entries(product.details)
                      .map(
                        ([key, value]) =>
                          ` <div class="d-flex justify-content-between align-items-center"> <span>${key}</span> <span>${value}</span> </div> `
                      )
                      .join("")}
                    </div>
                  </div>
                  <div class="card-footer"> 
                        <small class="text-small-secondary"><span class="price">${
                          product.price.day
                        }</span> /day</small>
                        <small class="text-small-secondary"><span class="price">${
                          product.price.week
                        }</span> /week</small> <br/>
                        <small class="text-small-secondary"><span class="price">${
                          product.price.month
                        }</span> /month</small>  
                  
                  </div>
                </div>
      `;
      productContainer.appendChild(card);
    });
    productList.appendChild(productContainer);
    sectionContainer.appendChild(productList);
    sectionDiv.appendChild(sectionContainer);
    productSection.append(sectionDiv);
  });
};

renderSection(data);
