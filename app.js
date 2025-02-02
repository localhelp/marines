// You can add JavaScript here if you'd like to implement any interactivity. 
// For example, smooth scrolling when clicking navigation links, form validation, etc.

// Example of smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
