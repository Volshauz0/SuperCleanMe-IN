'use client'


// Navbar.jsx
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from './assets/logo.png';
import next from './assets/next.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navbarClass = `${styles.navbar} ${isScrolled ? styles.scrolled : ''}`;

  return (
    <nav className={styles.nav}>

      <div className={navbarClass}>
        {/* Responsive menu icon */}
        <div className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.open : ''}`} onClick={handleMobileMenuToggle}>
          <div className={styles.bar} />
          <div className={styles.bar} />
          <div className={styles.bar} />
        </div>

        {/* Navigation links */}

        <Link className={styles.logoo} href="/">
          <Image src={logo} />
        </Link>

        <div className={`${styles.links} ${isMobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.linkBlocks}>
            <Link className={styles.home} href="/" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link className={styles.Link} href="/industry" onClick={closeMobileMenu}>
              Industry
            </Link>
            <Link className={styles.Link} href="/about" onClick={closeMobileMenu}>
              About
            </Link>
          </div>

          <Link className={styles.logo} href="/">
            <Image src={logo} />
          </Link>

          <div className={styles.linkBlocks}>
            <Link className={styles.Link} href="/services" onClick={closeMobileMenu}>
              Services
            </Link>
            <Link className={styles.Link} href="/products" onClick={closeMobileMenu}>
              Products
            </Link>
            <Link className={styles.query} style={{ color: "#fff" }} href="/contact" onClick={closeMobileMenu}>
              Have any query <Image src={next} alt="next" />
            </Link>
          </div>
        </div>
      </div>

    </nav>
  );
}
