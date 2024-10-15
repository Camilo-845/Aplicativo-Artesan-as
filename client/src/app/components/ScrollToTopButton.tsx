'use client'

import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Función para desplazarse hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Función que maneja la visibilidad del botón
  const toggleVisibility = () => {
    if (window.scrollY > 20) {  // Umbral ajustado a 100 píxeles
      setIsVisible(true);  // Mostrar el botón si se ha hecho scroll hacia abajo
    } else {
      setIsVisible(false); // Ocultar el botón si está en la parte superior
    }
  };

  // useEffect para agregar el evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 bg-gray-200 p-3 rounded-full shadow-lg transition-opacity transform duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        className="fill-foreground"
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
      >
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
      </svg>
    </button>
  );
}
