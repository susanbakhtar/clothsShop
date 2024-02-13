'use strict';
// menu
const btnMenu = document.querySelector('.menu-icon');
const headerNav = document.querySelector('.header-section__nav');

btnMenu.addEventListener('click', openMenu);
function openMenu() {
  headerNav.classList.toggle('sticky');
}

/////////////////////////////single product
const singleProductImgMain = document.querySelector(
  '.single-products-container__img'
);
const singleImg1 = document.querySelectorAll('.single-img-product');

singleImg1.forEach(img => {
  img.addEventListener('click', function () {
    singleProductImgMain.src = img.src;
  });
});

/////////////////////////////
// table product
// const mediaQuery = window.matchMedia('(max-width: 36em)');

// function handleTabletChange(e) {
//   const main = document.querySelector('.main-section ');
//   if (e.matches) {
//     // وقتی عرض صفحه کمتر از 36em است
//     main.style.gridColumn = '1 / -1';
//   } else {
//     // وقتی عرض صفحه بیشتر از 36em است
//     main.style.gridColumn = ''; // حذف تنظیمات اعمال شده
//   }
// }

// mediaQuery.addListener(handleTabletChange); // اضافه کردن گوش کردن به تغییرات

// // بررسی اولیه در هنگام بارگذاری صفحه
// handleTabletChange(mediaQuery);

////////

const loginForm = document.querySelector('.account-section__login');
const registerForm = document.querySelector('.account-section__regester');

const loginButton = document.querySelector('.login');
const registerButton = document.querySelector('.regester');

// کلیک بر روی Register
registerButton.addEventListener('click', function () {
  loginForm.style.transform = 'translateX(100%)';
  registerButton.classList.toggle('border-1');
  loginButton.classList.remove('border-1');
  registerForm.style.transform = 'translateX(0)';
});
// کلیک بر روی login
loginButton.addEventListener('click', function () {
  loginForm.style.transform = 'translateX(0)';
  loginButton.classList.toggle('border-1');
  registerButton.classList.remove('border-1');
  registerForm.style.transform = 'translateX(-100%)';
});
