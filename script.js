// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Active navigation highlighting
function updateActiveNavigation() {
  const sections = ["inicio", "sobre", "tecnologias", "projetos", "contato"]
  const scrollPosition = window.scrollY + 100

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    const navLink = document.querySelector(`[data-section="${sectionId}"]`)

    if (section && navLink) {
      const offsetTop = section.offsetTop
      const offsetHeight = section.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        // Remove active class from all nav links
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active")
        })
        // Add active class to current nav link
        navLink.classList.add("active")
      }
    }
  })
}

// Listen for scroll events
window.addEventListener("scroll", updateActiveNavigation)

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateActiveNavigation()

  // Add fade-in animation to elements when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe tech cards and project cards
  document.querySelectorAll(".tech-card, .project-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})

// Form submission handling
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  // Form will submit normally to FormSubmit
  // You can add additional validation or feedback here if needed
  console.log("Form submitted")
})
