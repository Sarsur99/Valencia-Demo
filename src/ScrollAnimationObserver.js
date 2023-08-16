// ScrollAnimationObserver.js
import React, { useEffect } from 'react';


function ScrollAnimationObserver({ children }) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}

export default ScrollAnimationObserver;
