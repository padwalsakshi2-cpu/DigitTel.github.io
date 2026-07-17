// Highlight active nav link while scrolling
window.addEventListener("scroll", function() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-links a");
  let scrollPos = window.scrollY + 100;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === sec.id) {
          link.classList.add("active");
        }
      });
    }
  });
});
