// Mobile menu
var navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('open');
  });
}

// Light / dark mode
var themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('connectlab-theme', next); } catch (e) {}
  });
}

// Lab photo banner — tap to flip on touch devices, where there is no hover
var labBanner = document.getElementById('labBanner');
if (labBanner) {
  labBanner.addEventListener('click', function () {
    labBanner.classList.toggle('is-flipped');
  });
}
