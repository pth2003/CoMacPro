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
