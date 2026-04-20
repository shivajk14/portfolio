import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import profile from "../assets/pic3.png"
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
                paddingTop: '45px', /* exact navbar height */
                position: 'relative',
                display: 'flex',
                overflow: 'hidden',
                background: '#f6f6f4',
            }}
        >
            {/* ── LEFT CONTENT ── */}
            <div
                style={{
                    flex: '0 0 55%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '5rem 4rem 5rem 5rem',
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
                    gap: 10,
                }}>
                    <span style={{ width: 28, height: 1, background: '#999', display: 'inline-block' }} />
                    Software Developer & Engineer
                    <span style={{ width: 28, height: 1, background: '#999', display: 'inline-block' }} />
                </div>

                {/* Name */}
                <h1 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(3.8rem, 8vw, 8rem)',
                    fontWeight: 900,
                    lineHeight: 0.88,
                    letterSpacing: '-4px',
                    color: '#0a0a0a',
                    marginBottom: '2rem',
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
                    padding: '1.2rem 0',
                    marginBottom: '2.2rem',
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                }}>
                    <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.75, margin: 0, flex: '1 1 auto', minWidth: '200px' }}>
                        Software Developer with 1 year of experience building scalable
                        web applications. Passionate about cloud infrastructure and clean APIs.
                    </p>
                    <div style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.78rem',
                        color: '#0a0a0a',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        borderLeft: '1px solid rgba(10,10,10,0.15)',
                        paddingLeft: '1.5rem',
                        minWidth: 140,
                        paddingTop: '0.2rem',
                    }}>
                        {display}<span style={{ animation: 'blink 1s infinite', display: 'inline-block' }}>|</span>
                    </div>
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
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

                
                  
                    {/* <a
                        href="https://linkedin.com/in/shi-jk"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            padding: '0.9rem 2rem',
                            borderRadius: '100px',
                            border: '1.5px solid rgba(10,10,10,0.25)',
                            background: 'transparent',
                            color: '#0a0a0a',
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            letterSpacing: '0.3px',
                        }}
                        onMouseOver={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.06)'; e.currentTarget.style.borderColor = '#0a0a0a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseOut={e => { e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = ''; e.currentTarget.style.transform = ''; }}
                    >
                        LinkedIn
                    </a> */}
                </div>

           
            </div>

            {/* ── RIGHT IMAGE ── */}
            <div style={{
                flex: '0 0 45%',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Fade gradient on left edge to blend with left section */}
                <div style={{
                    position: 'absolute',
                    left: 0, top: 0, bottom: 0,
                    width: '80px',
                    background: 'linear-gradient(to right, #f6f6f4, transparent)',
                    zIndex: 2,
                    pointerEvents: 'none',
                }} />

                <img
                    src={profile}
                    alt="Shivashankar J"
                    style={{
                        width: '100%',
                        height: '85%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        filter: 'grayscale(100%)',
                        display: 'block',
                    }}
                />

                {/* Name watermark overlay on image */}
                <div style={{
                    position: 'absolute',
                    bottom: '8rem',
                    right: '2rem',
                    zIndex: 3,
                    textAlign: 'right',
                }}>
                    <div style={{
                        background: 'rgba(10,10,10,0.85)',
                        color: '#fff',
                        padding: '1rem 1.4rem',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.7rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                    }}>
                        📍 Chennai, India<br />
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.62rem' }}>Available for work</span>
                    </div>
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
