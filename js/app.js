window.addEventListener('DOMContentLoaded', function () {
  let images = [];
  function preload() {
      for (var i = 0; i < arguments.length; i++) {
          images[i] = new Image();
          images[i].src = preload.arguments[i];
      }
  }

  // preload(
  //     "https://static.faberlic.com/fl_greenly/greenly_powders/v2/app/images/dest/bg-other-sc.jpg",
  //     "https://static.faberlic.com/fl_greenly/greenly_powders/v2/app/images/dest/bg-other-sc.fone-sc5.jpg"
  // )
  preload(
    "https://static.faberlic.com/fl_greenly/greenly_detergent/v2/app/images/dest/bg-other-sc.jpg"
)
  
  setTimeout(() => {
    document.documentElement.classList.add('loaded');
    document.querySelector(".main-content").classList.add("loaded");
  }, 10)
  if(window.innerWidth > 500) {
    setTimeout(() => {
      document.documentElement.classList.add("greenly__main_ready");
      setTimeout(() => {
        document.querySelector(".gr-f-sc__anim-text_box2").style.opacity = 1;
        show_text();  
      }, 1000);
      setTimeout(() => {
        document.documentElement.classList.add("stop-anim");
      }, 2000);
    }, 3000);  
  } else {
    let parent = document.querySelector("#mob-text");
    setTimeout(() => {
      parent.style.opacity = 1;
      show3();
    }, 100);
  }
})
let videoSection = document.querySelector(".section--video");
videoSection.onclick = () => {
  videoSection.classList.add("show");
};
let source = document.getElementsByClassName("animatable-text");
let dest = document.getElementsByClassName("show-text");
let currentSource = source[1];
let currentDest = dest[1];
let len = currentSource.innerHTML.length;
let now = 0;
let delay = 5;
let letters = 1;
let newString = "";
let end = false;
function show_text() {
  show();
}
function show() {
  if(currentSource.innerHTML.substr(now,letters)  == "%") {
    return;
  } else if(currentSource.innerHTML.substr(now,letters)  == "~") {
    document.querySelector(".gr-f-sc__anim-text_box1").style.opacity = 1;
    currentSource = source[0];
    currentDest = dest[0];
    len = currentSource.innerHTML.length;
    now = 0;
    show_text();
    end = true;
  } else if(currentSource.innerHTML.substr(now,letters)  == "/" ) {
    let el = document.createElement("span");
    el.innerHTML = "&nbsp;";
    el.className = "wrap";
    currentDest.append(el);
  } else if(currentSource.innerHTML.substr(now,letters)  == "*" ) {
    let el = document.createElement("span");
    el.classList = "opacity22 titled-text";
    el.innerHTML = currentSource.innerHTML.substr(now+1,letters);
    currentDest.append(el);
    now++;
  } else {
    let el = document.createElement("span");
    el.className = "opacity";
    el.innerHTML = currentSource.innerHTML.substr(now,letters);
    currentDest.append(el);
  }
  now += letters;
  if(now < len) {
    setTimeout("show()", delay);
  } 
}

let source1, dest1, currentSource1, currentDest1, len1;
if(window.innerWidth > 1024) {
  source1 = document.getElementsByClassName("animatable-text2");
  dest1 = document.getElementsByClassName("show-text2");  
  currentSource1 = source1[0];
  currentDest1 = dest1[0];
  len1 = currentSource1.innerHTML.length;  
} else if( window.innerWidth <= 1024 && window.innerWidth > 500) {
  source1 = document.getElementsByClassName("animatable-text2-laptop");
  dest1 = document.getElementsByClassName("show-text2");
  currentSource1 = source1[0];
  currentDest1 = dest1[0];
  len1 = currentSource1.innerHTML.length;  
}
let now1 = 0;
let delay1 = 5;
let letters1 = 1;
let newString1 = "";
let end1 = false;
function show_text1() {
  let checkEnd1 = document.querySelector(".end");
  if(checkEnd1) {
    return;
  }
  show1();
}
function show1() {
  if(currentSource1.innerHTML.substr(now1,letters1)  == "~" ) {
    let el = document.createElement("span");
    el.innerHTML = "&nbsp;";
    el.className = "end";
    currentDest1.append(el);
    currentSource1 = source1[1];
    currentDest1 = dest1[1];
    len1 = currentSource1.innerHTML.length;
    now1 = 0;
    show_text1();
  } else if(currentSource1.innerHTML.substr(now1,letters1)  == "/" ) {
    let el = document.createElement("span");
    el.innerHTML = "&nbsp;";
    el.className = "wrap";
    currentDest1.append(el);
  } else if(currentSource1.innerHTML.substr(now1,letters1)  == "*" ) {
    let el = document.createElement("span");
    el.classList = "opacity titled-text";
    el.innerHTML = currentSource1.innerHTML.substr(now1+1,letters1);
    currentDest1.append(el);
    now1++;
  } else if(currentSource1.innerHTML.substr(now1,letters1)  == "`" ) {
    let el = document.createElement("span");
    el.innerHTML = '* ';
    el.className = "opacity";
    currentDest1.append(el);
    now1++;
  } else if(currentSource1.innerHTML.substr(now1,letters1)  == "^" ) {
    let el = document.createElement("span");
    el.classList = "opacity22 bold-transform";
    el.innerHTML = currentSource1.innerHTML.substr(now1+1,letters1);
    currentDest1.append(el);
    now1++;
  } else {
    let el = document.createElement("span");
    el.className = "opacity";
    el.innerHTML = currentSource1.innerHTML.substr(now1,letters1);
    currentDest1.append(el);
  }
  now1 += letters1;
  if(now1 < len1) {
    setTimeout("show1()", delay1);
  } 
}

let source3, dest3, len3;
if(window.innerWidth <= 500) {
  source3 = document.querySelector("#anim-mob");
  dest3 = document.querySelector("#show-mob");
  len3 = source3.innerHTML.length;  
}
let now3 = 0;
let delay3 = 0;
let letters3 = 1;
let newString3 = "";
function show3() {
  if(source3.innerHTML.substr(now3,letters3)  == "$") {
    return;
  } else if(source3.innerHTML.substr(now3,letters3)  == "~") {
    let el = document.createElement("span");
    el.innerHTML = "&nbsp;";
    el.className = "empty-string";
    dest3.append(el);
  } else if(source3.innerHTML.substr(now3,letters3)  == "/" ) {
    let el = document.createElement("span");
    el.innerHTML = "&nbsp;";
    el.className = "wrap";
    dest3.append(el);
  } else if(source3.innerHTML.substr(now3,letters3)  == "*" ) {
    let el = document.createElement("span");
    el.classList = "opacity bold-transform";
    el.innerHTML = source3.innerHTML.substr(now3+1,letters3);
    dest3.append(el);
    now3++;
  } else {
    let el = document.createElement("span");
    el.className = "opacity";
    el.innerHTML = source3.innerHTML.substr(now3,letters3);
    dest3.append(el);
  }
  now3 += letters3;
  if(now3 < len3) {
    setTimeout("show3()", delay3);
  } 
}

let bodyMain = document.querySelector(".main-content");
bodyMain.setAttribute('scroll-y', 0);
let checkEl = document.querySelector("#border1");
let point;
let check1 = true;
let width = window.innerWidth;
window.addEventListener("scroll", () => {
  if(link.classList.contains("focus-link")) {
    link.classList.remove("focus-link");
  }
  if(width <= 500) {
    bodyMain.setAttribute('scroll-y', window.scrollY);
  }
  if(checkEl && check1 && width > 500) {
    point = checkEl.getBoundingClientRect().bottom;
  } else if(check1 && width > 500) {
    checkEl = document.querySelector("#border1");
  }
  if(point && check1 && point >= window.pageYOffset && width > 500) {
    show_text1();
    check1 = false;
  }
});  

const btnToBuy = document.querySelector("#to-buy-anch");
if(btnToBuy) {
  btnToBuy.onclick = (e) => {
    e.preventDefault();
    smoothScroll(document.querySelector("#to-buy"));
  };  
}
function currentYPosition() {
  if (self.pageYOffset) return self.pageYOffset;
  if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

const link = document.querySelector("#desktop-link");
link.onclick = () => {
  link.classList.toggle("focus-link");
};


function elmYPosition(el) {
  var elm = el;
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
  } return y;
}


function smoothScroll(el) {
  var startY = currentYPosition();
  var stopY = elmYPosition(el) - 100;
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
      scrollTo(0, stopY); return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
      for ( var i=startY; i<stopY; i+=step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
  }
  for ( var i=startY; i>stopY; i-=step ) {
      setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
  }
}


const arrowText = document.querySelector(".arrow-gnome");
const mobText1 = document.querySelector("#mob-text1");
const mobText2 = document.querySelector("#mob-text2");
const mobGnome = document.querySelector(".gr-o-sc1__main-col2");
if(window.innerWidth <= 500 && arrowText) {
  arrowText.onclick = () => {
    mobText1.classList.toggle("move");
    mobText2.classList.toggle("move2");
    mobGnome.classList.toggle("move");
    arrowText.classList.toggle("change-side");
  };
}
let mobMenu = document.querySelector(".link-mobile");
if(window.innerWidth <= 500) {
  const burger = document.querySelector(".burger");
  if(burger) {
    burger.onclick = () => {
      if(burger.classList.contains("opened")) {
        burger.classList.add("closed");
        burger.classList.remove("opened");
        closeMenu();
      } else if(burger.classList.contains("closed")) {
        burger.classList.add("opened");
        burger.classList.remove("closed");
        openMenu();
      } else {
        burger.classList.add("opened");
        openMenu();
      }
    };
  }
}
let bodyTag = document.querySelector("body");
function openMenu() {
  if(mobMenu) {
    const scrollY = bodyMain.getAttribute('scroll-y');
      mobMenu.classList.add("toggle-menu");
      bodyTag.classList.add("main-lock");
      bodyTag.style.top = `-${scrollY}`;  
  }
}
function closeMenu() {
  if(mobMenu) {
    const scrollY = bodyMain.getAttribute('scroll-y').top;
    mobMenu.classList.remove("toggle-menu");
    bodyTag.classList.remove("main-lock");
    bodyTag.style.top = `-${scrollY}`;
    bodyTag.style.top = '';
  }
}
window.addEventListener("load", initDrawers);

  const btnLeft = document.querySelectorAll('.container-left');
  const btnRight = document.querySelectorAll('.container-right');

  const articlesLeft = document.querySelectorAll(".article-unactive");
  const articlesRight = document.querySelectorAll(".article-active");

  btnLeft.forEach(btn => {
    btn.addEventListener('click', function() {
      let section = btn.closest("section");
      if(section.classList.contains("gr-o-sc9")) {
        return;
      }
      let side = section.getAttribute("side");
      if(side == "left") {
        return;
      } else {
        section.setAttribute("side", "left")
      }  
      let main = btn.closest("section").querySelector(".wrapper-mobile");
      if(main.classList.contains("invert-right")) {
        main.classList.remove("invert-right");
      }
      main.classList.add('invert-left');
      let active =  btn.closest("section").querySelector(".article-active");
      let unactive = btn.closest("section").querySelector(".article-unactive");
      changeArticle(active, unactive);
    })  
  });
  btnRight.forEach(btn => {
    btn.addEventListener('click', function() {
      let section = btn.closest("section");
      if(section.classList.contains("gr-o-sc9")) {
        return;
      }
      let side = section.getAttribute("side");
      if(side == "right") {
        return;
      } else {
        section.setAttribute("side", "right")
      }  
      let main = btn.closest("section").querySelector(".wrapper-mobile");
      if(main.classList.contains("invert-left")) {
        main.classList.remove("invert-left");
      }
      main.classList.add('invert-right');
      let active =  btn.closest("section").querySelector(".article-active");
      let unactive = btn.closest("section").querySelector(".article-unactive");
      changeArticle(unactive, active);
    })  
  });

articlesLeft.forEach(article => {
  article.addEventListener('click', function() {
    let section = article.closest("section");
    let side = section.getAttribute("side");
    if(side == "left") {
      return;
    } else {
      section.setAttribute("side", "left")
    }
    let main = article.closest("section").querySelector(".wrapper-mobile");
    if(main.classList.contains("invert-right")) {
      main.classList.remove("invert-right");
    }
    main.classList.add('invert-left');
    let active =  section.querySelector(".article-active");
    changeArticle(active, article);
  })  
});
articlesRight.forEach(article => {
  article.addEventListener('click', function() {
    let section = article.closest("section");
    let side = section.getAttribute("side");
    if(side == "right") {
      return;
    } else {
      section.setAttribute("side", "right")
    }
    let main = article.closest("section").querySelector(".wrapper-mobile");
    if(main.classList.contains("invert-left")) {
      main.classList.remove("invert-left");
    }
    main.classList.add('invert-right');
    let unactive =  article.closest("section").querySelector(".article-unactive");
    changeArticle(article, unactive);
  })  
});

var containers;
function initDrawers() {
  if(window.innerWidth >= 501) {
    let btns = document.querySelectorAll(".trigger-desk");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        let section = btn.closest("section");
        let container = btn.closest("div");
        if(container.classList.contains("shown-list")) {
          return;
        }
        if(container.classList.contains("hidden-list")) {
          let prev = section.querySelector(".shown-list");
          prev.classList.remove("shown-list");
          prev.classList.add("hidden-list");
          container.classList.remove("hidden-list");
          container.classList.add("shown-list");
        }
      });
    });  
  } else {
    let btns = document.querySelectorAll(".trigger");
    containers = document.querySelectorAll(".container-list");
    containers.forEach(container => {
      if(container.classList.contains("shown-list")) {
        container.classList.remove("shown-list");
      } 
      if(!container.classList.contains("hidden-list")) {
        container.classList.add("hidden-list");
      } 
    });
    btns.forEach(btn => {
      btn.addEventListener("click", ()=> {
        let section = btn.closest("section");
        let container = btn.closest("div");
        if(container.classList.contains("shown-list")) {
          return;
        }
        if(container.classList.contains("hidden-list")) {
          let prev = section.querySelector(".shown-list");
          if(prev) {
            prev.classList.remove("shown-list");
            prev.classList.add("hidden-list");  
          }
          container.classList.remove("hidden-list");
          container.classList.add("shown-list");
        }  
      });
    })
  }
}

var slideIndex = 1;
if(window.innerWidth <= 500) {
  showSlides(slideIndex);
}
window.onresize = () => {
  if(window.innerWidth <= 500) {
    showSlides(slideIndex);
  } else {
    var slides = document.getElementsByClassName("item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
  }
};
function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
const slider = document.querySelector(".slider");
let slstart = 0;
let slend = 0;
slider.addEventListener("touchstart", (e) => {
    slstart = e.touches[0].clientX;
});
slider.addEventListener("touchend", (e) => {
  let stopClasses = ["circle--outer", "circle-arrow--triangle", "circle-arrow--icon", "circle--container", "circle-arrow--bar"]
    let check = stopClasses.indexOf(e.target.className);
    if(check != -1 || window.innerWidth > 500) {
      return;
    } 
    slend = e.changedTouches[0].clientX;
    let delta = slend - slstart;
    if(delta < -window.innerWidth*.2) {
      plusSlide();
    }
    if(delta > window.innerWidth*.2) {
      minusSlide();
    }
});