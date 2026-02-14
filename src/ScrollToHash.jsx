import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // if using router; otherwise skip import & use window

const ScrollToHash = () => {
  const { hash } = useLocation(); // or: const hash = window.location.hash;

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // small delay for mount
      }
    }
  }, [hash]);

  return null;
};