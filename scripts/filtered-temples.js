const navButton = document.querySelector('#menu');

const navigation = document.querySelector('nav');

navButton.addEventListener('click', () => {
    navigation.classList.toggle('open');

    navButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // my added temples
  {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, New Mexico, United States",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg"
  },
  {
    templeName: "Gila Valley Arizona",
    location: "Central, Arizona, United States",
    dedicated: "2010, May, 23",
    area: 18561,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/the-gila-valley-arizona-temple/the-gila-valley-arizona-temple-12777-main.jpg"
  },
  {
    templeName: "Portland Oregon",
    location: "Lake Oswego, Oregon, United States",
    dedicated: "1989, August, 21",
    area: 80500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-1629-main.jpg"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona, United States",
    dedicated: "2014, March, 2",
    area: 85326,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  }
];

const templeContainer = document.querySelector("#templeCards");
const pageTitle = document.querySelector("#pageTitle");

function displayTemples(filteredTemples) {
  templeContainer.innerHTML= "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");

    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML =  `<strong>Location:</strong> ${temple.location}`;
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 400;
    image.height = 250;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    templeContainer.appendChild(card);
  });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", (event) => {
  event.preventDefault();
  pageTitle.textContent = "Home";
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
  event.preventDefault();
  pageTitle.textContent = "Old";
  const oldTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0,4)) < 1900);
  displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (event) => {
  event.preventDefault();
  pageTitle.textContent = "New";
  const newTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000);
  displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (event) => {
  event.preventDefault();
  pageTitle.textContent = "Large";
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (event) => {
  event.preventDefault();
  pageTitle.textContent = "Small";
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});

