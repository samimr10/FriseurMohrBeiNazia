// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              // Close mobile menu if open
              navMenu.classList.remove('active');
              mobileMenuToggle.classList.remove('active');
              
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Scroll Animation
  const revealElements = document.querySelectorAll('.reveal');
  
  function checkScroll() {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          
          if (elementTop < windowHeight - revealPoint) {
              element.classList.add('active');
          }
      });
  }
  
  // Initial check
  checkScroll();
  
  // Check on scroll
  window.addEventListener('scroll', checkScroll);
  
  // Lightbox Functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('[data-lightbox]');
  
  galleryItems.forEach(item => {
      item.addEventListener('click', function() {
          const imgSrc = this.querySelector('img').src;
          lightboxImg.src = imgSrc;
          lightbox.style.display = 'flex';
          document.body.style.overflow = 'hidden';
      });
  });
  
  lightboxClose.addEventListener('click', function() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
  });
  
  lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
          lightbox.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
  });
  
  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (name && email && message) {
          // In a real implementation, you would send the form data to a server
          alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
          contactForm.reset();
      } else {
          alert('Bitte füllen Sie alle Pflichtfelder aus.');
      }
  });
  
  // Sticky Header with Blur Effect
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          header.style.backgroundColor = 'rgba(245, 241, 232, 0.95)';
          header.style.backdropFilter = 'blur(10px)';
      } else {
          header.style.backgroundColor = 'rgba(245, 241, 232, 0.95)';
          header.style.backdropFilter = 'blur(0)';
      }
  });
});