var swiper = new Swiper(".new__container", {
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 3, // Hiển thị 3 sản phẩm đồng thời
  pagination: {
    el: ".swiper-pagination.new__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.new__button-next",
    prevEl: ".swiper-button-prev.new__button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Hiển thị 1 lon trên màn hình nhỏ
    },
    768: {
      slidesPerView: 3, // Hiển thị 3 lon trên màn hình lớn hơn
    },
  },
  on: {
    init: function () {
      // Hiển thị tên lon giữa khi khởi tạo
      updateProductName();
    },
    slideChangeTransitionEnd: function () {
      // Cập nhật tên lon giữa khi chuyển slide
      updateProductName();
    },
  },
});

// Hàm cập nhật tên sản phẩm
function updateProductName() {
  const slides = document.querySelectorAll(".swiper-slide");
  const productNameElement = document.querySelector(".product-name");
  const typeElement = productNameElement.querySelector(".type");
  const flavorElement = productNameElement.querySelector(".flavor");

  // Ẩn tên cũ với hiệu ứng slide-down
  productNameElement.classList.remove("show");

  // Sau 300ms, cập nhật thông tin và hiển thị lại tên với hiệu ứng slide-up
  setTimeout(() => {
    slides.forEach((slide) => {
      if (slide.classList.contains("swiper-slide-active")) {
        // Phóng to lon giữa
        slide.style.transform = "scale(1.35)";
        slide.style.transition = "transform 0.6s ease";

        // Lấy thông tin từ thuộc tính data
        const type = slide.querySelector("img").getAttribute("data-type");
        const flavor = slide.querySelector("img").getAttribute("data-flavor");

        // Cập nhật tên hiển thị
        typeElement.textContent = type;
        flavorElement.textContent = flavor;

        // Đổi font chữ dựa trên loại nước
        switch (type) {
          case "Tropical":
            typeElement.style.fontFamily = "'Potta One', cursive";
            typeElement.style.color = "#E56B00";
            break;
          case "Cà phê":
            typeElement.style.fontFamily = "'Oi', sans-serif";
            typeElement.style.color = "#4B2A24";
            break;
          case "Trà thảo mộc":
            typeElement.style.fontFamily = "'Pacifico', sans-serif";
            typeElement.style.color = "#156A5A";
            typeElement.style.fontWeight = "200";
            break;
          case "Sữa":
            typeElement.style.fontFamily = "'Potta One', sans-serif";
            typeElement.style.color = "#398EBA";
            break;
          default:
            typeElement.style.fontFamily = "'Poppins', sans-serif";
            typeElement.style.color = "#F3E2AA";
            break;
        }

        // Hiển thị tên mới với hiệu ứng
        productNameElement.classList.add("show");
      } else {
        // Thu nhỏ các lon không phải lon giữa
        slide.style.transform = "scale(0.9)";
        slide.style.transition = "transform 0.6s ease";
      }
    });
  }, 300); // Đợi hiệu ứng ẩn cũ (300ms) trước khi cập nhật thông tin mới
}
