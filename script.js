document.getElementById('menuButton').addEventListener('click', function() {
    // Verberg de menu knop
    this.style.display = 'none';

    // Toon de navbar links
    var navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(function(link) {
        link.style.display = 'inline'; // Of 'block' als je verticale weergave wilt
    });

    // Toon de sluitknop
    document.getElementById('closeButton').style.display = 'inline';
});

document.getElementById('closeButton').addEventListener('click', function() {
    // Verberg de sluitknop
    this.style.display = 'none';

    // Verberg de navbar links
    var navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(function(link) {
        link.style.display = 'none';
    });

    // Toon de menu knop
    document.getElementById('menuButton').style.display = 'inline';
});


// DATA API
fetch('http://localhost:3000/cars')
.then(response => response.json())
.then(data => {
  const carContainer = document.getElementById('car-container');
  data.forEach(car => {
    const carBox = document.createElement('div');
    carBox.classList.add('car-box');
    carBox.innerHTML = `
      <img class="car-image" src="${car.img}" alt="${car.brand} ${car.model}">
      <h3>${car.brand} ${car.model} (${car.year})</h3>
      <p>€${car.price} p/dag</p>
      <p>Minimum leeftijd : ${car.minage}</p>
      <p>${car.fuel}</p>
      <a href="#" class="btn">View Details</a>
      <a href="#" class="btn">Rent Now</a>
    `;
    carContainer.appendChild(carBox);
  });
})
.catch(error => console.error('Error fetching data:', error));