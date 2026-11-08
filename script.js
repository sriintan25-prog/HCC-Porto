const root = document.body;
const toggleButton = document.getElementById('themeToggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

const savedTheme = localStorage.getItem('intan-theme');
if (savedTheme === 'light') {
  root.classList.add('light-theme');
  if (toggleButton) toggleButton.querySelector('.theme-icon').textContent = '🌙';
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isLight = root.classList.toggle('light-theme');
    const icon = toggleButton.querySelector('.theme-icon');
    icon.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('intan-theme', isLight ? 'light' : 'dark');
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Portofolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:hello@intan.dev?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}
