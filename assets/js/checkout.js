// click vào 2 form
document.addEventListener('DOMContentLoaded', function() {
  const loginLink = document.querySelector('a[href="#return-customer"]');
  const couponLink = document.querySelector('a[href="#have-coupon"]');
  const loginForm = document.querySelector('#return-customer');
  const couponForm = document.querySelector('#have-coupon');

  loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginForm.classList.toggle('show');
      couponForm.classList.remove('show');
  });

  couponLink.addEventListener('click', function(event) {
      event.preventDefault();
      couponForm.classList.toggle('show');
      loginForm.classList.remove('show');
  });
});
// Click vào bạn có muốn tạo tk mới
document.addEventListener("DOMContentLoaded", function () {
  const toggleLink = document.querySelector('.gl-link');
  const collapsibleDiv = document.querySelector('#create-account');

  toggleLink.addEventListener('click', function (event) {
      event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ `<a>`
      collapsibleDiv.classList.toggle('show');
  });
});

// Adding some CSS for smooth transitions
const style = document.createElement('style');
style.innerHTML = `
  #return-customer, #have-coupon {
      transition: opacity 0.5s ease;
      opacity: 0;
      display: none;
  }

  #return-customer.show, #have-coupon.show {
      opacity: 1;
      display: block;
  }
`;
document.head.appendChild(style);

// TĂNG GIẢM SỐ LƯỢNG SẢN PHẨM
document.addEventListener('DOMContentLoaded', function () {
  // Lấy tất cả các `input-counter` trên trang
  const counters = document.querySelectorAll('.input-counter');

  counters.forEach(counter => {
      const minusButton = counter.querySelector('.input-counter__minus');
      const plusButton = counter.querySelector('.input-counter__plus');
      const inputField = counter.querySelector('.input-counter__text');

      if (minusButton && plusButton && inputField) {
          // Khi nhấn vào nút trừ
          minusButton.addEventListener('click', function () {
              let currentValue = parseInt(inputField.value); // Lấy giá trị hiện tại
              const minValue = parseInt(inputField.getAttribute('data-min')) || 1; // Lấy giá trị tối thiểu

              if (currentValue > minValue) {
                  inputField.value = currentValue - 1; // Giảm giá trị
              }
          });

          // Khi nhấn vào nút cộng
          plusButton.addEventListener('click', function () {
              let currentValue = parseInt(inputField.value); // Lấy giá trị hiện tại
              const maxValue = parseInt(inputField.getAttribute('data-max')) || 1000; // Lấy giá trị tối đa

              if (currentValue < maxValue) {
                  inputField.value = currentValue + 1; // Tăng giá trị
              }
          });
      }
  });
});

// Lắng nghe sự kiện click trên liên kết có thuộc tính `data-modal-id`
document.querySelectorAll('[data-modal-id="#edit-ship-address"]').forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    const modalId = this.getAttribute("data-modal-id");
    document.querySelector(modalId).style.display = "block"; // Hiển thị form chỉnh sửa
  });
});

// Đóng form chỉnh sửa
document.getElementById("close-edit-modal").addEventListener("click", function () {
  document.getElementById("edit-ship-address").style.display = "none";
});

// Hiển thị form thêm địa chỉ mới
document.getElementById("add-new-address").addEventListener("click", function () {
  document.getElementById("edit-ship-address").style.display = "none";
  document.getElementById("new-address-modal").style.display = "block";
});

// Đóng form thêm địa chỉ mới
document.getElementById("close-new-address-modal").addEventListener("click", function () {
  document.getElementById("new-address-modal").style.display = "none";
  document.getElementById("edit-ship-address").style.display = "block";
});

