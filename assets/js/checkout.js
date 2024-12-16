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
// click vào 2 form

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


