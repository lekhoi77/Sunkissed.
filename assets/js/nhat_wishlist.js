// Đợi đến khi toàn bộ nội dung của trang được tải xong
document.addEventListener("DOMContentLoaded", function() {

  // Lấy các phần tử nút giảm, tăng số lượng và ô nhập số lượng
  const decreaseBtn = document.querySelector("[data-quantity-remove]");
  const increaseBtn = document.querySelector("[data-quantity-add]");
  const quantityInput = document.querySelector("[data-quantity-input]");

  // Hàm xử lý giảm số lượng khi nhấn nút giảm
  decreaseBtn.addEventListener("click", function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  // Hàm xử lý tăng số lượng khi nhấn nút tăng
  increaseBtn.addEventListener("click", function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 99) {
      quantityInput.value = currentValue + 1;
    }
  });
});




