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