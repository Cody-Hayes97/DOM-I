const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navigation = document.querySelectorAll("nav");
navigation.forEach(navItem => {
  navItem.append(siteContent["nav"]["nav-item-1"]);
  navItem.append(siteContent["nav"]["nav-item-2"]);
  navItem.append(siteContent["nav"]["nav-item-3"]);
  navItem.append(siteContent["nav"]["nav-item-4"]);
  navItem.append(siteContent["nav"]["nav-item-5"]);
  navItem.append(siteContent["nav"]["nav-item-6"]);
  navItem.prepend(siteContent["nav"]["nav-item-2"]);

  navItem.style.display = "flex";
  navItem.style.width = "610px";
  navItem.style.justifyContent = "space-between";
  navItem.style.color = "green";
});

let head = document.querySelector("h1").append(siteContent["cta"]["h1"]);

let btn = document.querySelector("button").append(siteContent["cta"]["button"]);
let ctaImg = document
  .getElementById("cta-img")
  .setAttribute("src", siteContent["cta"]["img-src"]);

let headerFours = document.querySelector(".text-content > h4");

headerFours.append(siteContent["main-content"]["features-h4"]);

let features = document.querySelectorAll(".text-content > p ");
features.forEach(section => {
  section.append(siteContent["main-content"]["features-content"]);
});

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let contactHead = document.querySelector(".contact > h4");
contactHead.append(siteContent["contact"]["contact-h4"]);

let contactAdd = document.querySelector(".contact > p");
contactAdd.append(siteContent["contact"]["address"]);
contactAdd.append(siteContent["contact"]["phone"]);
contactAdd.append(siteContent["contact"]["email"]);
contactAdd.style.display = "flex";
contactAdd.style.flexDirection = "column";

let foot = document.querySelector("footer > p");
foot.append(siteContent["footer"]["copyright"]);
