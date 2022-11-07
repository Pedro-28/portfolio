import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  const headerScrollHandler = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', headerScrollHandler);
    return () => window.removeEventListener('scroll', headerScrollHandler);
  }, []);

  return (
    <header className={scrolled ? "header-container header-scrolled" : "header-container"}>
      <h1>Portfolio</h1>
      <nav className={active ? "header-nav-container active-nav" : "header-nav-container"}>
        <a className="header-nav-item-container" href="#home">Início</a>
        <a className="header-nav-item-container" href="#about">Sobre</a>
        <a className="header-nav-item-container" href="#projects">Projetos</a>
        <a className="header-nav-item-container" href="#skills">Habilidades</a>
      </nav>
      <button
        type='button'
        className={active ? "header-nav-menu active" : 'header-nav-menu'}
        onClick={() => setActive((prev) => !prev)}>
      </button>
    </header>
  );
}
