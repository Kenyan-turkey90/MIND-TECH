
  // Set current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const navMenu = document.getElementById('nav-menu');

  mobileToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  mobileClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Sticky Header
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // WhatsApp Button
  const whatsappBtn = document.getElementById('whatsappBtn');
  const whatsappPopup = document.getElementById('whatsappPopup');
  const whatsappClose = document.getElementById('whatsappClose');

  whatsappBtn.addEventListener('click', () => {
    whatsappPopup.classList.toggle('show');
  });

  whatsappClose.addEventListener('click', () => {
    whatsappPopup.classList.remove('show');
  });

  // Close WhatsApp popup when clicking outside
  document.addEventListener('click', (e) => {
    if (!whatsappBtn.contains(e.target) && !whatsappPopup.contains(e.target)) {
      whatsappPopup.classList.remove('show');
    }
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      // For now, we'll just log it and show an alert
      console.log({ name, email, subject, message });
      
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }