const menuEmail = document.querySelector('.navbar-email'); /*Declarar menuEmail cuyo valor es la clase navbar-email*/
const desktopMenu = document.querySelector('.desktop-menu'); /*Declarar desktopMenu cuyo valor es la clase desktop-menu*/

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');  
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu); /*Escuchar el evento clic y ejecutar la función toggleDesktopMenu*/

menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoIcon);

function toggleDesktopMenu() {     /*Declaración de función toggleDesktopMenu la cual activa hace que la clase inactive desaparezca y aparezca*/
  
  const isAsideClosed = aside.classList.contains('inactive');
  
  desktopMenu.classList.toggle('inactive');

  if(isAsideClosed) {
    desktopMenu.classList.add(!'inactive');
  }

  else {
    aside.classList.add('inactive');
  }

}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  
  mobileMenu.classList.toggle('inactive');

if (isAsideClosed) {
     mobileMenu.classList.add(!'inactive');  /*abrir mobileMenu*/
     } else {
     aside.classList.add('inactive'); /*Cerrar aside y abrir mobileMenu*/
  }

}

function toggleCarritoIcon() {

  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  aside.classList.toggle('inactive');

  if (isMobileMenuClosed) {
    aside.classList.add(!'inactive');  /*abrir aside*/
    } else {
    mobileMenu.classList.add('inactive'); /*Cerrar MobileMenu y abrir aside*/
  }
    
}