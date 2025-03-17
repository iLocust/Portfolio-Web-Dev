// Additional effects for modals

/**
 * Adds a parallax effect to modal images as the cursor moves
 */
export const addImageParallax = () => {
  const modalImages = document.querySelectorAll('.modal-image-parallax');
  
  modalImages.forEach(image => {
    const container = image.parentElement;
    
    container.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;  // -0.5 to 0.5
      const y = (e.clientY - top) / height - 0.5;  // -0.5 to 0.5
      
      // Apply subtle movement based on cursor position
      image.style.transform = `translateX(${x * 20}px) translateY(${y * 20}px) scale(1.1)`;
    });
    
    container.addEventListener('mouseleave', () => {
      // Reset on mouse leave
      image.style.transform = 'translateX(0) translateY(0) scale(1)';
    });
  });
};

/**
 * Adds a 3D tilt effect to project cards
 */
export const addTiltEffect = () => {
  const tiltElements = document.querySelectorAll('.tilt-effect');
  
  tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;  // -0.5 to 0.5
      const y = (e.clientY - top) / height - 0.5;  // -0.5 to 0.5
      
      // Apply subtle rotation based on cursor position
      element.style.transform = `perspective(1000px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
    });
    
    element.addEventListener('mouseleave', () => {
      // Reset on mouse leave
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
};

/**
 * Adds a magnetic effect to buttons where they slightly move towards cursor
 */
export const addMagneticEffect = () => {
  const magneticElements = document.querySelectorAll('.magnetic-effect');
  
  magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      
      // Apply subtle attraction toward cursor
      element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    element.addEventListener('mouseleave', () => {
      // Reset on mouse leave with smooth transition
      element.style.transform = 'translate(0, 0)';
    });
  });
};

/**
 * Adds hover split text effect
 */
export const addTextHoverEffect = () => {
  const textElements = document.querySelectorAll('.split-hover-text');
  
  textElements.forEach(element => {
    const originalText = element.innerText;
    const letters = originalText.split('');
    
    // Create wrapped text with individual letters
    element.innerHTML = letters.map(letter => 
      `<span class="letter">${letter}</span>`
    ).join('');
    
    const letterElements = element.querySelectorAll('.letter');
    
    element.addEventListener('mouseenter', () => {
      letterElements.forEach((letter, i) => {
        letter.style.transition = `transform 0.5s ${i * 0.03}s, color 0.5s ${i * 0.03}s`;
        letter.style.transform = 'translateY(-8px)';
        letter.style.color = '#ffffff';
      });
    });
    
    element.addEventListener('mouseleave', () => {
      letterElements.forEach((letter, i) => {
        letter.style.transition = `transform 0.5s ${i * 0.03}s, color 0.5s ${i * 0.03}s`;
        letter.style.transform = 'translateY(0)';
        letter.style.color = '';
      });
    });
  });
};

/**
 * Initialize all modal effects
 */
export const initModalEffects = () => {
  // Setup observers to add effects when modals are opened
  const modalObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
        // Check if any modals were added to the DOM
        const addedModals = Array.from(mutation.addedNodes).filter(
          node => node.classList && (
            node.classList.contains('modal-backdrop') ||
            node.classList.contains('modal-content')
          )
        );
        
        if (addedModals.length) {
          // Add effects to newly opened modals
          setTimeout(() => {
            addImageParallax();
            addTiltEffect();
            addMagneticEffect();
            addTextHoverEffect();
          }, 300); // Delay to ensure modal is fully rendered
        }
      }
    });
  });
  
  modalObserver.observe(document.body, { childList: true, subtree: true });
};
