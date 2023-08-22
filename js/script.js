const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const footerLink = document.querySelectorAll(".footer-social-link")
  const callBack = document.querySelector('.callback-bt')



const toggleBurger = document.querySelector('.burger-button')

toggleBurger.onclick = function () {
  document.querySelector('.burger-menu').classList.toggle('burger-menu-open')
}


  callBack.onclick = function () {
    footerLink.forEach((item) => {
      let linkName = item.getAttribute('data-link')
      let activeLinkName = item.childNodes[1].classList[0].split('-').shift()

      if(activeLinkName === linkName) {
        item.classList.toggle(`${activeLinkName}-active`)
      }
  
    })
  }


  let burgerItem = document.querySelector('.active')

  burgerItem.onclick = function () {
    document.querySelector('.burger-dropdown-menu-header').classList.toggle('active-list')
  }


  try {
    const scrollUpButton = document.querySelector(".wrapper-button-scroll-up");
  
    scrollUpButton.onclick = function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
  
      scrollY > 400
        ? scrollUpButton.classList.add("wrapper-button-scroll-up-open")
        : scrollUpButton.classList.remove("wrapper-button-scroll-up-open");
    });
  } catch {}


  window.addEventListener("scroll", () => {
    const scrollA = window.scrollY || document.documentElement.scrollTop;

 if(scrollA > 110) {
    document.querySelector('header').classList.add("sticky")

 } else if (scrollA < 1) {
    document.querySelector('header').classList.remove("sticky");
 }

  });

try {
  
const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.about-next',
      prevEl: '.about-prev',
    },
  });

} catch {

}
  