import { useEffect } from 'react';

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = () => {
      const $nav = document.getElementById('mainNavbar');
      $nav.classList.toggle('scrolled', window.pageYOffset > $nav.offsetHeight);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; 
};

export default ScrollHandler;
