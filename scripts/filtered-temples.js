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
    "images/aba-nigeria-temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/manti-temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/payson-utah-temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/yigo-guam-temple.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/washington-dc-temple.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/lima-peru-temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/mexico-city-temple.webp"
  },
  // my added temples
  {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, New Mexico, United States",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl:
    "images/albuquerque-new-mexico-temple.webp"
  },
  {
    templeName: "Gila Valley Arizona",
    location: "Central, Arizona, United States",
    dedicated: "2010, May, 23",
    area: 18561,
    imageUrl:
    "images/the-gila-valley-arizona-temple.webp"
  },
  {
    templeName: "Portland Oregon",
    location: "Lake Oswego, Oregon, United States",
    dedicated: "1989, August, 21",
    area: 80500,
    imageUrl:
    "images/portland-oregon-temple.webp"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona, United States",
    dedicated: "2014, March, 2",
    area: 85326,
    imageUrl:
    "images/gilbert-arizona-temple.webp"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "images/paris-france-temple.webp"
  }
];

const templeContainer = document.querySelector("#templeCards");
const pageTitle = document.querySelector("#pageTitle");

function displayTemples(filteredTemples) {
  templeContainer.innerHTML= "";

  filteredTemples.forEach((temple, index) => {
    const card = document.createElement("section");

    const name = document.createElement("h2");
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
    if(index === 0){
      image.loading = "eager";
    }
    else{
      image.loading = "lazy";
    }
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

