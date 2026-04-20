import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = () => setMenuOpen(false);

    const navLinks = [
        ["about", "About"],
        ["skills", "Skills"],
        ["experience", "Experience"],
        ["projects", "Projects"],
        ["contact", "Contact"],
    ];

    return (
        <NavContainer
            scrolled={scrolled}
            className="nav"
        >
            {/* Logo */}
            <div
                className="nav-logo"
                style={{ cursor: "pointer" }}
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    closeMenu();
                }}
            >
                <span style={{ color: "#0a0a0a", fontWeight: 900 }}>SHIVA</span>
                <span style={{ color: "#999", fontWeight: 400 }}>SHANKAR</span>
            </div>

            {/* Links - Desktop */}
            <ul className="nav-links">
                {navLinks.map(([id, label]) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById(id)
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Hamburger Menu - Mobile */}
            <MenuButton onClick={toggleMenu} isOpen={menuOpen}>
                <div />
                <div />
                <div />
            </MenuButton>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={menuOpen}>
                <ul>
                    {navLinks.map(([id, label]) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById(id)
                                        ?.scrollIntoView({ behavior: "smooth" });
                                    closeMenu();
                                }}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            className="mobile-cta"
                            onClick={() => {
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                closeMenu();
                            }}
                        >
                            Hire Me
                        </button>
                    </li>
                </ul>
            </MobileMenu>

            {/* Desktop CTA */}
            <StyledWrapper className="desktop-cta">
                <button
                    className="btn-12"
                    onClick={() =>
                        document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    <span>Hire Me</span>
                </button>
            </StyledWrapper>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 70px;
  background: ${props => props.scrolled ? "rgba(255,255,255,0.95)" : "transparent"};
  box-shadow: ${props => props.scrolled ? "0 2px 40px rgba(0,0,0,0.07)" : "none"};
  border-bottom: ${props => props.scrolled ? "1px solid rgba(10,10,10,0.08)" : "1px solid transparent"};
  backdrop-filter: ${props => props.scrolled ? "blur(20px)" : "none"};
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    padding: 0 1.5rem;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(10,10,10,0.08);

    .nav-links, .desktop-cta {
      display: none;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1010;

  @media (max-width: 900px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: #0a0a0a;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: #fff;
    z-index: 1005;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    padding-top: 80px;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: #0a0a0a;
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      font-family: 'Space Mono', monospace;
    }

    .mobile-cta {
      margin-top: 1rem;
      padding: 1rem 3rem;
      background: #0a0a0a;
      color: #fff;
      border: none;
      border-radius: 100px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

const StyledWrapper = styled.div`
  .btn-12 {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    font-weight: 900;
    padding: 0.8rem 3rem;
    text-transform: uppercase;
    border-radius: 99rem;
    border: 2px solid #000;
    position: relative;
    overflow: hidden;
    font-family: 'Space Grotesk', sans-serif;
  }

  .btn-12 span {
    position: relative;
    z-index: 1;
    mix-blend-mode: difference;
  }

  .btn-12:after,
  .btn-12:before {
    background: #fff;
    content: "";
    inset: 0;
    position: absolute;
    transform: translateY(var(--progress, 100%));
    transition: transform 0.2s ease;
  }

  .btn-12:after {
    --progress: -100%;
    z-index: -1;
  }

  .btn-12:hover:after,
  .btn-12:hover:before {
    --progress: 0;
  }
`;