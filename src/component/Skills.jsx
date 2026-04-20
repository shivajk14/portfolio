import React, { useRef, useState, useEffect } from 'react';
import useFadeUp from '../hooks/useFadeUp';
import profileImg from '../assets/pic3.png';
import styled from "styled-components";

export default function Skills() {
    const [skillsVisible, setSkillsVisible] = useState(false);
    const skillsRef = useRef();
    const s1 = useFadeUp();

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsVisible(true); }, { threshold: 0.2 });
        if (skillsRef.current) obs.observe(skillsRef.current);
        return () => obs.disconnect();
    }, []);

    const skillCategories = [
        {
            title: 'Backend Development',
            details: ' Node.js, Java, Spring Boot, REST APIs, Object-Oriented Programming,Express.js , MVC Architecture'
        },
        {
            title: 'Frontend Development',
            details: 'React.js, JavaScript (ES6+), HTML5, CSS3, DOM Manipulation, Bootstrap, Tailwind CSS'
        },
        // {
        //     title: 'Cloud & Infrastructure',
        //     details: 'AWS (EC2, S3, IAM, RDS), CloudWatch, Linux Server Administration'
        // },
        {
            title: 'Tools',
            details: 'Vs Code, Eclipse, GitHub, Postman, Eclipse'
        },
        {
            title: 'Database Management',
            details: 'MySQL, SQL, Relational Database Design, Complex Query Optimization'
        }
    ];

    const techTags = ['Java', 'React.js', 'Spring Boot', 'AWS', 'Docker', 'MySQL', 'Git', 'CI/CD'];

    return (
        <section id="skills" className="section section-alt" ref={skillsRef}>
            <div className="fade-up" ref={s1}>
                <div className="sec-eyebrow">Expertise</div>
                <h2 className="sec-title-large">Tech <span className="sec-title-outline">Arsenal</span></h2>
                <div className="sec-line" />
            </div>

            <div className="skills-split" style={{ alignItems: 'flex-start' }}>
                {/* Left: Skill category cards */}
                <div className="skills-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {skillCategories.map((cat, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: '1.5rem',
                                background: '#fff',
                                border: '1px solid rgba(10,10,10,0.1)',
                                opacity: skillsVisible ? 1 : 0,
                                transform: skillsVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s`
                            }}
                        >
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.4rem', color: '#0a0a0a', letterSpacing: '-0.3px' }}>
                                {cat.title}
                            </h3>
                            <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.7' }}>
                                {cat.details}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right: Profile photo + tag cloud */}
                <StyledWrapper>
                    <div className="flip-card">
                        <div className="flip-card-inner">

                            {/* FRONT - PHOTO */}
                            <div className="flip-card-front">
                                <img src={profileImg} alt="Shivashankar J" />
                                <div className="name-bar">SHIVASHANKAR J</div>
                            </div>

                            {/* BACK - SKILLS */}
                            <div className="flip-card-back">
                                <h3>Core Technologies</h3>
                                <div className="skills">
                                    {techTags.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </StyledWrapper>
            </div>
        </section>
    );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  .flip-card {
    background-color: transparent;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 3/4;
    perspective: 1000px;
    font-family: inherit;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
    overflow: hidden;
  }

  .flip-card-front {
    background: #fff;
    color: #000;
  }

  .flip-card-front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    filter: grayscale(100%);
  }

  .name-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #0a0a0a;
    color: #fff;
    padding: 1rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
  }

  .flip-card-back {
    background: #0a0a0a;
    color: #fff;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
  }

  .flip-card-back h3 {
    font-family: 'Space Mono', monospace;
    font-size: 0.8rem;
    color: #888;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }

  .skills span {
    padding: 6px 14px;
    font-size: 0.75rem;
    font-family: 'Space Mono', monospace;
    background: #fff;
    color: #0a0a0a;
    border-radius: 4px;
  }
`;