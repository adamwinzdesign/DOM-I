const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav

let navEle = document.querySelector('nav');
let newFirstLink = document.createElement('a');
let newLastLink = document.createElement('a');
newFirstLink.textContent = 'New First Link';
newLastLink.textContent = 'New Last Link';
navEle.prepend(newFirstLink);
navEle.append(newLastLink);
newFirstLink.href = '#';
newLastLink.href = '#';

let navItems = document.querySelectorAll('a');

navItems.forEach(a => {
  a.style.color = 'green';
});

navItems[1].textContent = siteContent['nav']['nav-item-1'];
navItems[2].textContent = siteContent['nav']['nav-item-2'];
navItems[3].textContent = siteContent['nav']['nav-item-3'];
navItems[4].textContent = siteContent['nav']['nav-item-4'];
navItems[5].textContent = siteContent['nav']['nav-item-5'];
navItems[6].textContent = siteContent['nav']['nav-item-6'];


// cta
let ctaTxt = document.querySelector('.cta-text h1');
ctaTxt.style.whiteSpace = 'pre';
ctaTxt.textContent = 'DOM\n Is\n Awesome';

let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = 'Get Started';

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// main-content
let allH4 = document.getElementsByTagName('h4');
let allP = document.getElementsByTagName('p');

allH4[0].textContent = siteContent['main-content']['features-h4'];
allP[0].textContent = siteContent['main-content']['features-content'];
allH4[1].textContent = siteContent['main-content']['about-h4'];
allP[1].textContent = siteContent['main-content']['about-content'];

let featuresImg = document.getElementById('middle-img');
featuresImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

allH4[2].textContent = siteContent['main-content']['services-h4'];
allP[2].textContent = siteContent['main-content']['services-content'];
allH4[3].textContent = siteContent['main-content']['product-h4'];
allP[3].textContent = siteContent['main-content']['product-content'];
allH4[4].textContent = siteContent['main-content']['vision-h4'];
allP[4].textContent = siteContent['main-content']['vision-content'];

// contact
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

allP[5].style.whiteSpace = 'pre';
allP[5].textContent = '123 Way 456 Street\n Somewhere, USA';
allP[6].textContent = siteContent['contact']['phone'];
allP[7].textContent = siteContent['contact']['email'];

// footer
let footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];

// stretch styling

let footerEle = document.querySelector('footer');
footerEle.style.backgroundColor = 'gray';
footerEle.style.height = '10rem';
footerEle.style.display = 'flex';
footerEle.style.flexDirection = 'column';
footerEle.style.justifyContent = 'space-evenly';
footerEle.style.alignItems = 'center';

// add button in footer along with event listeners
const newBtn = document.createElement('button');
newBtn.textContent = 'I\'m a new test button!';
newBtn.style.height = '4rem';
newBtn.style.width = '25rem';
newBtn.style.fontSize = '2rem';
newBtn.style.borderRadius = '1rem';
newBtn.style.padding = '.5rem 2rem';
newBtn.style.backgroundColor = 'white';
newBtn.style.color = 'black';
newBtn.style.outlineColor = 'gray';
newBtn.addEventListener('mouseenter', (event) => {
  newBtn.textContent = 'You arrived!';
  newBtn.style.cursor = 'pointer';
});
newBtn.addEventListener('mouseout', (event) => {
  newBtn.textContent = 'Nooo!  You left me!';
});
newBtn.addEventListener('mousedown', (event) => {
  newBtn.textContent = 'You clicked!';
  newBtn.style.backgroundColor = 'black';
  newBtn.style.color = 'white';
});
newBtn.addEventListener('mouseup', (event) => {
  newBtn.textContent = 'You let go!';
  newBtn.style.backgroundColor = 'white';
  newBtn.style.color = 'black';
});
footerEle.append(newBtn);