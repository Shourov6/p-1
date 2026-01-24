// Projects Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categorySections = document.querySelectorAll('.category-section');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter categories
      if (filter === 'all') {
        categorySections.forEach(section => {
          section.classList.remove('hidden');
          animateSection(section);
        });
      } else {
        categorySections.forEach(section => {
          const category = section.getAttribute('data-category');
          if (category === filter) {
            section.classList.remove('hidden');
            animateSection(section);
          } else {
            section.classList.add('hidden');
          }
        });
      }
    });
  });

  // Animate section on filter
  function animateSection(section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    
    requestAnimationFrame(() => {
      section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all project cards
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });

  // Add hover sound effect (optional - can be removed)
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Optional: Add subtle hover effect
      this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Parallax effect for background orbs
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  });

  function updateParallax() {
    const scrollY = window.scrollY;
    const orbs = document.querySelectorAll('.decoration-orb');
    
    orbs.forEach((orb, index) => {
      const speed = 0.1 + (index * 0.05);
      orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }

  // Initialize animations
  function init() {
    // Trigger initial animations
    const header = document.querySelector('.section-header');
    const filterTabs = document.querySelector('.filter-tabs');
    
    if (header) {
      header.style.opacity = '0';
      header.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
      }, 100);
    }
    
    if (filterTabs) {
      filterTabs.style.opacity = '0';
      filterTabs.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        filterTabs.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        filterTabs.style.opacity = '1';
        filterTabs.style.transform = 'translateY(0)';
      }, 200);
    }
  }

  init();
});

// Add this to handle page visibility changes (for performance)
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Pause animations when page is hidden
    document.body.classList.add('paused');
  } else {
    // Resume animations when page is visible
    document.body.classList.remove('paused');
  }
});
