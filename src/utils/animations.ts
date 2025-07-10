export const initializeAnimations = () => {
  // Cursor follower
  const cursorFollower = document.getElementById('cursor-follower');
  
  if (cursorFollower) {
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    const updateCursor = () => {
      const deltaX = mouseX - followerX;
      const deltaY = mouseY - followerY;
      
      followerX += deltaX * 0.1;
      followerY += deltaY * 0.1;
      
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';
      
      requestAnimationFrame(updateCursor);
    };
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    updateCursor();
  }

  // Parallax scrolling
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  const updateParallax = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach((element, index) => {
      const speed = (index + 1) * 0.1;
      (element as HTMLElement).style.transform = `translateY(${rate * speed}px)`;
    });
  };
  
  window.addEventListener('scroll', updateParallax);

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, observerOptions);
  
  // Observe all elements that should animate on scroll
  document.querySelectorAll('.feature-card, .testimonial-card').forEach((el) => {
    observer.observe(el);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href') || '');
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Dynamic background particles
  const createBackgroundParticles = () => {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'fixed inset-0 pointer-events-none z-0';
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-cyan-400/20 rounded-full';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 3 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      
      // Add floating animation
      particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
      
      particleContainer.appendChild(particle);
    }
    
    document.body.appendChild(particleContainer);
  };
  
  createBackgroundParticles();

  // Button hover effects
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });

  // Glitch effect on specific elements
  const addGlitchEffect = (selector: string) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('glitch');
      });
      
      element.addEventListener('mouseleave', () => {
        element.classList.remove('glitch');
      });
    });
  };
  
  addGlitchEffect('.holographic');
};

export const createRippleEffect = (e: React.MouseEvent<HTMLElement>) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const ripple = document.createElement('span');
  ripple.className = 'absolute bg-white/20 rounded-full animate-ping';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.style.width = '0px';
  ripple.style.height = '0px';
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
};

export const animateNumber = (element: HTMLElement, start: number, end: number, duration: number) => {
  const startTime = performance.now();
  
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = Math.floor(start + (end - start) * progress);
    element.textContent = current.toString();
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  requestAnimationFrame(animate);
};