import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import profile from "../assets/lap.jpg"
import { href } from 'react-router-dom';

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);
    const [display, setDisplay] = useState('');
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [visible, setVisible] = useState(false);
    const roles = ['Software Developer', 'Java Developer', 'React.js Developer', 'Full Stack Developer'];

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const current = roles[roleIdx];
        const speed = deleting ? 40 : 90;
        const t = setTimeout(() => {
            if (!deleting) {
                if (charIdx < current.length) {
                    setDisplay(current.slice(0, charIdx + 1));
                    setCharIdx(c => c + 1);
                } else {
                    setTimeout(() => setDeleting(true), 2000);
                }
            } else {
                if (charIdx > 0) {
                    setDisplay(current.slice(0, charIdx - 1));
                    setCharIdx(c => c - 1);
                } else {
                    setDeleting(false);
                    setRoleIdx(i => (i + 1) % roles.length);
                }
            }
        }, speed);
        return () => clearTimeout(t);
    }, [charIdx, deleting, roleIdx]);

    return (
        <section
            id="about"
            style={{
                minHeight: '100vh',
                paddingTop: '70px', /* Updated to match navbar height */
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#f6f6f4',
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            {/* ── CONTENT ── */}
            <div
                style={{
                    maxWidth: '1000px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 1s ease, transform 1s ease',
                }}
            >
                {/* Eyebrow label */}
                <div style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.68rem',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#999',
                    marginBottom: '1.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 15,
                }}>
                    <span style={{ width: 28, height: 1, background: '#999', display: 'inline-block' }} />
                    Software Developer & Engineer
                    <span style={{ width: 28, height: 1, background: '#999', display: 'inline-block' }} />
                </div>

                {/* Name */}
                <h1 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                    fontWeight: 900,
                    lineHeight: 0.9,
                    letterSpacing: '-4px',
                    color: '#0a0a0a',
                    marginBottom: '2rem',
                    textAlign: 'center',
                }}>
                    SHIVA<br />
                    <span style={{
                        WebkitTextStroke: '2px #0a0a0a',
                        color: 'transparent',
                    }}>SHANKAR</span>
                </h1>

                {/* Divider bar with description + role */}
                <div style={{
                    borderTop: '1px solid rgba(10,10,10,0.12)',
                    borderBottom: '1px solid rgba(10,10,10,0.12)',
                    padding: '1.5rem 0',
                    marginBottom: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    width: '100%',
                    maxWidth: '700px',
                }}>
                    <p style={{ 
                        color: '#666', 
                        fontSize: '1rem', 
                        lineHeight: 1.7, 
                        margin: 0,
                        maxWidth: '600px'
                    }}>
                        Software Developer with 1 year of experience building scalable
                        web applications. Passionate about cloud infrastructure and clean APIs.
                    </p>
                    <div style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.9rem',
                        color: '#0a0a0a',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        padding: '0.5rem 1rem',
                        background: 'rgba(10,10,10,0.05)',
                        borderRadius: '4px',
                    }}>
                        {display}<span style={{ animation: 'blink 1s infinite', display: 'inline-block' }}>|</span>
                    </div>
                </div>

                {/* Buttons */}
                <div style={{ 
                    display: 'flex', 
                    gap: '1.5rem', 
                    marginBottom: '3rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <StyledWrapper>
                        <button onClick={() =>
                            document.getElementById('contact')
                                .scrollIntoView({ behavior: 'smooth' })
                        }>
                            <span>Get In Touch ↗</span>
                        </button>
                    </StyledWrapper>

                    <StyledWrapper>
                        <button onClick={() =>
                            window.open('https://linkedin.com/in/shiv-jk', '_blank')
                        }>
                            <span>LinkedIn ↗</span>
                        </button>
                    </StyledWrapper>
                </div>

                {/* Location Badge */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}>
                    <div style={{
                        background: 'rgba(10,10,10,0.85)',
                        color: '#fff',
                        padding: '0.8rem 1.2rem',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.7rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        borderRadius: '2px',
                    }}>
                        📍 Chennai, India
                    </div>
                    <span style={{ color: '#999', fontSize: '0.62rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        Available for work
                    </span>
                </div>
            </div>
        </section>
    );
}
const StyledWrapper = styled.div`
  button {
   outline: none;
   cursor: pointer;
   border: none;
   padding: 0.9rem 2rem;
   margin: 0;
   font-family: inherit;
   font-size: inherit;
   position: relative;
   display: inline-block;
   letter-spacing: 0.05rem;
   font-weight: 700;
   font-size: 17px;
   border-radius: 500px;
   overflow: hidden;
   background: #66ff66;
   color: ghostwhite;
  }

  button span {
   position: relative;
   z-index: 10;
   transition: color 0.4s;
  }

  button:hover span {
   color: black;
  }

  button::before,
  button::after {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 0;
  }

  button::before {
   content: "";
   background: #000;
   width: 120%;
   left: -10%;
   transform: skew(30deg);
   transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::before {
   transform: translate3d(100%, 0, 0);
  }`;
