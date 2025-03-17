// Utility functions for animations and interactions

// Smooth reveal animation for elements as they enter viewport
export const setupScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal-element');
  
  const revealCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  };
  
  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15
  });
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
};

// Text scramble effect for headings
export class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#_';
    this.update = this.update.bind(this);
  }
  
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  
  update() {
    let output = '';
    let complete = 0;
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="text-accent">${char}</span>`;
      } else {
        output += from;
      }
    }
    
    this.el.innerHTML = output;
    
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Parallax effect for images
export const setupParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(el => {
      const speed = el.dataset.speed || 0.2;
      const yPos = -(scrollY * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
};

// Cursor follow effect
export const setupCursorFollow = () => {
  // Kursor kustom dinonaktifkan
  
  // Bersihkan kursor kustom yang mungkin sudah ada sebelumnya
  const existingCursor = document.querySelector('.custom-cursor');
  if (existingCursor) {
    existingCursor.remove();
  }
  
  // Hapus style cursor kustom jika ada
  const cursorStyles = document.querySelectorAll('style');
  cursorStyles.forEach(style => {
    if (style.innerHTML.includes('.custom-cursor')) {
      style.remove();
    }
  });
};

// Smooth scroll for navigation
export const setupSmoothScroll = () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
};

// Initialize all animations
export const initAnimations = () => {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
      setupScrollReveal();
      setupParallax();
      setupCursorFollow();
      setupSmoothScroll();
      
      // Add TextScramble effect to main headings
      const headings = document.querySelectorAll('h2.text-4xl, h2.text-5xl, h2.text-6xl, h2.text-7xl');
      headings.forEach(heading => {
        const originalText = heading.innerText;
        const fx = new TextScramble(heading);
        
        // Add intersection observer to trigger effect when in view
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              fx.setText(originalText);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        
        observer.observe(heading);
      });
    }, 100);
  } else {
    window.addEventListener('DOMContentLoaded', initAnimations);
  }
};
