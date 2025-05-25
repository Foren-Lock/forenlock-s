// Scroll to top button functionality
document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form validation and submission simulation
const form = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Bootstrap validation check
  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add('was-validated');
    return;
  }

  // If valid, simulate submission success
  form.classList.remove('was-validated');

  // Show success message
  formAlert.classList.remove('d-none');

  // Reset form fields
  form.reset();

  // Hide message after 4 seconds
  setTimeout(() => {
    formAlert.classList.add('d-none');
  }, 4000);
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});