document.querySelectorAll('.wishlist-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var wishlistIcon = this.querySelector('.wishlist-icon');
        var notification = document.getElementById('notification');
        if (wishlistIcon.classList.contains('heart-red')) {
            wishlistIcon.classList.remove('heart-red');
            notification.textContent = 'Removed from wishlist';
        } else {
            wishlistIcon.classList.add('heart-red');
            notification.textContent = 'Added to wishlist';
        }
        notification.classList.add('show');
        setTimeout(function() {
            notification.classList.remove('show');
        }, 2000);
    });
  });
  
  function redirectTo(url) {
    window.location.href = url;
  }
  
  function clearWishlist() {
    // Add your logic to clear the wishlist here
    alert('Wishlist has been cleared!');
  }

  document.addEventListener("DOMContentLoaded", function() {
  const decreaseBtn = document.querySelector("[data-quantity-remove]");
  const increaseBtn = document.querySelector("[data-quantity-add]");
  const quantityInput = document.querySelector("[data-quantity-input]");

  // Function to decrease quantity
  decreaseBtn.addEventListener("click", function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  // Function to increase quantity
  increaseBtn.addEventListener("click", function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 99) {
      quantityInput.value = currentValue + 1;
    }
  });
});


