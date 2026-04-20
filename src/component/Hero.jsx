import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import profile from "../assets/pic3.png"

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
        <HeroSection id="about" visible={visible}>
            {/* ── LEFT CONTENT ── */}
            <LeftContent visible={visible}>
                {/* Eyebrow label */}
                <Eyebrow>
                    <Line />
                    Software Developer & Engineer
                    <Line />
                </Eyebrow>

                {/* Name */}
                <Name>
                    SHIVA<br />
                    <span className="outline">SHANKAR</span>
                </Name>

                {/* Divider bar with description + role */}
                <RoleBar>
                    <p>
                        Software Developer with 1 year of experience building scalable
                        web applications. Passionate about cloud infrastructure and clean APIs.
                    </p>
                    <TypewriterContainer>
                        {display}<span>|</span>
                    </TypewriterContainer>
                </RoleBar>

                {/* Buttons */}
                <ButtonContainer>
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
                </ButtonContainer>
            </LeftContent>

            {/* ── RIGHT IMAGE ── */}
            <RightImage>
                <FadeOverlay />
                <img src={profile} alt="Shivashankar J" />
                <Watermark>
                    <div>
                        📍 Chennai, India<br />
                        <span className="sub">Available for work</span>
                    </div>
                </Watermark>
            </RightImage>
        </HeroSection>
    );
}

const HeroSection = styled.section`
  min-height: 100vh;
  padding-top: 70px;
  position: relative;
  display: flex;
  overflow: hidden;
  background: #f6f6f4;

  @media (max-width: 900px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const LeftContent = styled.div`
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 4rem 5rem 5rem;
  position: relative;
  zIndex: 2;
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 1s ease, transform 1s ease;

  @media (max-width: 1200px) {
    padding: 4rem 2rem 4rem 3rem;
  }

  @media (max-width: 900px) {
    flex: 1 1 auto;
    padding: 3rem 1.5rem;
    order: 2;
  }
`;

const Eyebrow = styled.div`
  font-family: 'Space Mono', monospace;
  fontSize: 0.68rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Line = styled.span`
  width: 28px;
  height: 1px;
  background: #999;
  display: inline-block;
`;

const Name = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(3.5rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: -4px;
  color: #0a0a0a;
  margin-bottom: 2rem;

  .outline {
    WebkitTextStroke: 2px #0a0a0a;
    color: transparent;
  }

  @media (max-width: 900px) {
    text-align: center;
    letter-spacing: -2px;
  }
`;

const RoleBar = styled.div`
  border-top: 1px solid rgba(10,10,10,0.12);
  border-bottom: 1px solid rgba(10,10,10,0.12);
  padding: 1.2rem 0;
  marginBottom: 2.2rem;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  flexWrap: wrap;

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.75;
    margin: 0;
    flex: 1 1 auto;
    min-width: 200px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const TypewriterContainer = styled.div`
  font-family: 'Space Mono', monospace;
  fontSize: 0.78rem;
  color: #0a0a0a;
  font-weight: 700;
  white-space: nowrap;
  border-left: 1px solid rgba(10,10,10,0.15);
  padding-left: 1.5rem;
  minWidth: 140;
  paddingTop: 0.2rem;

  span {
    animation: blink 1s infinite;
    display: inline-block;
  }

  @media (max-width: 900px) {
    border-left: none;
    border-top: 1px solid rgba(10,10,10,0.15);
    padding-left: 0;
    padding-top: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const RightImage = styled.div`
  flex: 0 0 45%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(100%);
    display: block;
  }

  @media (max-width: 900px) {
    flex: 1 1 auto;
    height: 50vh;
    order: 1;
  }
`;

const FadeOverlay = styled.div`
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 80px;
  background: linear-gradient(to right, #f6f6f4, transparent);
  zIndex: 2;
  pointerEvents: none;

  @media (max-width: 900px) {
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, #f6f6f4, transparent);
  }
`;

const Watermark = styled.div`
  position: absolute;
  bottom: 8rem;
  right: 2rem;
  zIndex: 3;
  textAlign: right;

  div {
    background: rgba(10,10,10,0.85);
    color: #fff;
    padding: 1rem 1.4rem;
    font-family: 'Space Mono', monospace;
    fontSize: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .sub {
    color: rgba(255,255,255,0.5);
    fontSize: 0.62rem;
  }

  @media (max-width: 900px) {
    bottom: 2rem;
    right: 1.5rem;
  }
`;

const StyledWrapper = styled.div`
  button {
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.9rem 2rem;
    margin: 0;
    font-family: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 15px;
    border-radius: 500px;
    overflow: hidden;
    background: #000;
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
    background: #fff;
    width: 120%;
    left: -10%;
    transform: skew(30deg) translate3d(-100%, 0, 0);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::before {
    transform: skew(30deg) translate3d(0, 0, 0);
  }
`;

