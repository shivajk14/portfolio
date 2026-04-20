import { useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

/* ── GLOBAL STYLES – Black & White Bazil-inspired ── */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scrollbar-gutter: stable; }
body {
  font-family: 'Space Grotesk', sans-serif;
  background: #ffffff;
  color: #0a0a0a;
  overflow-x: hidden;
}
::selection { background: #0a0a0a; color: #ffffff; }
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: #f5f5f5; }
::-webkit-scrollbar-thumb { background: #0a0a0a; }

/* ── ANIMATIONS ── */
@keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
@keyframes slideRight { from { width:0; } to { width:100%; } }
@keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
@keyframes revealUp { from { clip-path: inset(100% 0 0 0); transform:translateY(20px); } to { clip-path: inset(0% 0 0 0); transform:translateY(0); } }

.fade-up { opacity:0; transform:translateY(40px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
.fade-up.visible { opacity:1; transform:translateY(0); }

/* ── NOISE TEXTURE ── */
body::before {
  content:''; position:fixed; inset:0; z-index:9000; pointer-events:none; opacity:0.02;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 256px;
}

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 3rem; height: 70px;
  background: rgba(255,255,255,0.95);
  border-bottom: 1px solid rgba(10,10,10,0.08);
  backdrop-filter: blur(20px);
}
.nav-logo {
  font-family: 'Space Mono', monospace; font-weight: 700; font-size: 1.05rem;
  color: #0a0a0a; letter-spacing: -0.5px;
}
.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  color: #666; text-decoration: none; font-size: 0.82rem; letter-spacing: 0.5px;
  font-weight: 500; text-transform: uppercase; transition: color 0.2s;
}
.nav-links a:hover { color: #0a0a0a; }
.nav-cta {
  padding: 0.5rem 1.4rem; background: #0a0a0a; color: #fff;
  border: none; border-radius: 100px; font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem; font-weight: 600; cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.nav-cta:hover { background: #333; transform: scale(1.03); }

/* ── HERO ── */
.hero {
  min-height: 100vh; position: relative; z-index: 1;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 0 5rem 5rem; overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0; z-index: 0;
  background: #f8f8f8;
}
.hero-bg-img {
  position: absolute; right: 0; top: 0; bottom: 0;
  width: 48%; object-fit: cover; object-position: top center;
  filter: grayscale(100%);
}
.hero-content { position: relative; z-index: 1; max-width: 55%; }
.hero-label {
  font-family: 'Space Mono', monospace; font-size: 0.72rem;
  letter-spacing: 3px; text-transform: uppercase; color: #888;
  margin-bottom: 1.5rem; animation: fadeIn 0.8s 0.3s both;
  display: flex; align-items: center; gap: 10px;
}
.hero-label::before { content:''; width: 30px; height: 1px; background: #888; }
.hero-name {
  font-family: 'Inter', sans-serif;
  font-size: clamp(4rem, 9vw, 9rem);
  font-weight: 900; line-height: 0.9;
  letter-spacing: -4px; color: #0a0a0a;
  margin-bottom: 1rem;
}
.hero-name .outline-text {
  -webkit-text-stroke: 1.5px #0a0a0a;
  color: transparent;
}
.hero-role-bar {
  display: flex; align-items: center; gap: 2rem;
  padding: 1.2rem 0; border-top: 1px solid rgba(10,10,10,0.12);
  border-bottom: 1px solid rgba(10,10,10,0.12);
  margin-bottom: 2rem; animation: fadeUp 0.8s 0.9s both;
}
.hero-role-text {
  font-size: 0.9rem; color: #555; font-weight: 400; line-height: 1.6; flex: 1;
}
.hero-role-type {
  font-family: 'Space Mono', monospace; font-size: 0.82rem; color: #0a0a0a; font-weight: 700;
  border-left: 1px solid rgba(10,10,10,0.15); padding-left: 2rem;
}
.hero-actions { display: flex; gap: 1rem; align-items: center; animation: fadeUp 0.8s 1.1s both; }
.btn-black {
  padding: 0.85rem 2.2rem; border-radius: 100px; cursor: pointer; border: none;
  font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 0.88rem;
  background: #0a0a0a; color: #fff; letter-spacing: 0.3px;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
}
.btn-black:hover { background: #222; transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.2); }
.btn-outline-bw {
  padding: 0.85rem 2.2rem; border-radius: 100px; cursor: pointer;
  font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 0.88rem;
  background: transparent; color: #0a0a0a; letter-spacing: 0.3px;
  border: 1.5px solid rgba(10,10,10,0.3);
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
  text-decoration: none; display: inline-flex; align-items: center;
}
.btn-outline-bw:hover { border-color: #0a0a0a; background: rgba(10,10,10,0.04); transform: translateY(-2px); }
.hero-stats {
  position: absolute; right: 3rem; bottom: 5rem; z-index: 2;
  display: flex; flex-direction: column; gap: 2rem;
}
.hero-stat { text-align: right; }
.hero-stat-num { font-family: 'Inter', sans-serif; font-size: 2.5rem; font-weight: 900; color: #fff; line-height:1; }
.hero-stat-lbl { font-size: 0.7rem; color: rgba(255,255,255,0.6); letter-spacing: 1px; text-transform: uppercase; margin-top: 2px; }

/* ── MARQUEE ── */
.marquee-section {
  border-top: 1px solid rgba(10,10,10,0.08);
  border-bottom: 1px solid rgba(10,10,10,0.08);
  background: #0a0a0a; overflow: hidden; padding: 1rem 0;
  position: relative; z-index: 1;
}
.marquee-track { display: flex; white-space: nowrap; animation: marquee 20s linear infinite; }
.marquee-item {
  font-family: 'Space Mono', monospace; font-size: 0.78rem; color: rgba(255,255,255,0.5);
  padding: 0 2rem; letter-spacing: 2px; text-transform: uppercase;
}
.marquee-dot { color: #fff; opacity: 0.3; margin: 0 0.5rem; }

/* ── SECTIONS ── */
.section { padding: 7rem 5rem; position: relative; z-index: 1; }
.section-alt { background: #f8f8f8; }
.sec-eyebrow {
  font-family: 'Space Mono', monospace; font-size: 0.7rem;
  letter-spacing: 3px; text-transform: uppercase; color: #888;
  margin-bottom: 1.2rem; display: flex; align-items: center; gap: 10px;
}
.sec-eyebrow::before { content:''; width:24px; height:1px; background:#888; }
.sec-title-large {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 900; line-height: 0.95; letter-spacing: -2px;
  margin-bottom: 1rem; color: #0a0a0a;
}
.sec-title-outline {
  -webkit-text-stroke: 1.5px #0a0a0a;
  color: transparent;
}
.sec-line { width: 50px; height: 2px; background: #0a0a0a; margin-bottom: 3rem; }

/* ── ABOUT SPLIT ── */
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
.about-img-wrap { position: relative; }
.about-img {
  width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: top;
  filter: grayscale(100%); display: block;
  border: 1px solid rgba(10,10,10,0.1);
}
.about-img-label {
  position: absolute; bottom: -1px; left: 0; right: 0;
  background: #0a0a0a; color: #fff; padding: 1rem 1.5rem;
  font-family: 'Space Mono', monospace; font-size: 0.72rem; letter-spacing: 2px;
  text-transform: uppercase;
}
.about-content p { color: #555; line-height: 1.9; font-size: 1rem; margin-bottom: 1.5rem; }
.about-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }
.fact-item { padding: 1.5rem; border: 1px solid rgba(10,10,10,0.1); }
.fact-num { font-family: 'Inter', sans-serif; font-size: 2.2rem; font-weight: 900; color: #0a0a0a; line-height: 1; }
.fact-lbl { font-size: 0.75rem; color: #888; margin-top: 4px; letter-spacing: 0.5px; }

/* ── SKILL BARS ── */
.skill-item { margin-bottom: 1.5rem; }
.skill-head { display: flex; justify-content: space-between; margin-bottom: 8px; }
.skill-name { font-size: 0.88rem; font-weight: 600; color: #0a0a0a; letter-spacing: -0.2px; }
.skill-pct { font-family: 'Space Mono', monospace; font-size: 0.75rem; color: #888; }
.skill-track { height: 2px; background: rgba(10,10,10,0.1); overflow: hidden; }
.skill-bar { height: 100%; background: #0a0a0a; width: 0%; transition: width 1.8s cubic-bezier(0.16,1,0.3,1); }

/* ── TECH TAGS ── */
.tag-cloud { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tech-tag {
  padding: 6px 16px; font-size: 0.75rem; font-family: 'Space Mono', monospace;
  border: 1px solid rgba(10,10,10,0.15); color: #555; cursor: default;
  transition: all 0.2s ease;
}
.tech-tag:hover { background: #0a0a0a; color: #fff; border-color: #0a0a0a; }

/* ── EXPERIENCE ── */
.exp-timeline { display: flex; flex-direction: column; gap: 0; }
.exp-entry {
  display: grid; grid-template-columns: 200px 1fr;
  gap: 3rem; padding: 3rem 0;
  border-bottom: 1px solid rgba(10,10,10,0.1);
}
.exp-entry:first-child { border-top: 1px solid rgba(10,10,10,0.1); }
.exp-date { font-family: 'Space Mono', monospace; font-size: 0.75rem; color: #888; padding-top: 4px; letter-spacing: 0.5px; }
.exp-body {}
.exp-role { font-size: 1.4rem; font-weight: 700; color: #0a0a0a; letter-spacing: -0.5px; margin-bottom: 4px; }
.exp-company { font-family: 'Space Mono', monospace; font-size: 0.8rem; color: #555; margin-bottom: 1.2rem; }
.exp-points { list-style: none; }
.exp-points li {
  padding: 5px 0 5px 1.2rem; color: #666; font-size: 0.88rem;
  line-height: 1.7; position: relative;
}
.exp-points li::before { content: '→'; position: absolute; left: 0; color: #0a0a0a; font-size: 0.8rem; }
.exp-tag-row { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.2rem; }
.exp-tag {
  padding: 4px 12px; font-size: 0.72rem; font-family: 'Space Mono', monospace;
  border: 1px solid rgba(10,10,10,0.15); color: #555;
}

/* ── PROJECTS ── */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 1px; background: rgba(10,10,10,0.1); }
.project-card {
  background: #fff; padding: 3rem; position: relative; overflow: hidden; cursor: default;
  transition: background 0.3s ease;
}
.project-card:hover { background: #0a0a0a; }
.project-card:hover .proj-num,
.project-card:hover .proj-title,
.project-card:hover .proj-desc,
.project-card:hover .proj-key { color: #fff; }
.project-card:hover .proj-val { color: rgba(255,255,255,0.5); }
.project-card:hover .proj-tag-bw { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.1); }
.proj-num { font-family: 'Space Mono', monospace; font-size: 0.7rem; color: #aaa; margin-bottom: 1.5rem; letter-spacing: 2px; transition: color 0.3s; }
.proj-title { font-family: 'Inter', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem; letter-spacing: -0.5px; color: #0a0a0a; transition: color 0.3s; }
.proj-desc { color: #666; font-size: 0.88rem; line-height: 1.8; margin-bottom: 1.5rem; transition: color 0.3s; }
.proj-key { font-family: 'Space Mono', monospace; font-size: 0.72rem; color: #0a0a0a; font-weight: 700; transition: color 0.3s; }
.proj-val { font-family: 'Space Mono', monospace; font-size: 0.72rem; color: #888; transition: color 0.3s; }
.proj-tags-bw { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 1.5rem; }
.proj-tag-bw {
  padding: 4px 10px; font-size: 0.7rem; font-family: 'Space Mono', monospace;
  background: rgba(10,10,10,0.05); border: 1px solid rgba(10,10,10,0.1);
  color: #555; transition: all 0.3s;
}

/* ── EDUCATION ── */
.edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
.edu-entry {
  display: flex; flex-direction: column; gap: 1.5rem;
}
.edu-card {
  padding: 1.5rem 2rem; border: 1px solid rgba(10,10,10,0.1);
  transition: border-color 0.2s, background 0.2s;
}
.edu-card:hover { border-color: #0a0a0a; background: #f8f8f8; }
.edu-icon { font-size: 1.2rem; margin-bottom: 0.6rem; }
.edu-degree { font-weight: 700; font-size: 0.92rem; color: #0a0a0a; margin-bottom: 4px; }
.edu-school { font-family: 'Space Mono', monospace; font-size: 0.72rem; color: #888; }
.cert-card-bw {
  padding: 1.5rem 2rem; border: 1px solid rgba(10,10,10,0.1);
  display: flex; align-items: center; gap: 1.2rem;
  transition: border-color 0.2s, background 0.2s;
}
.cert-card-bw:hover { border-color: #0a0a0a; background: #f8f8f8; }
.cert-icon-bw {
  width: 44px; height: 44px; border: 1px solid rgba(10,10,10,0.15);
  display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;
}
.cert-name-bw { font-size: 0.9rem; font-weight: 700; color: #0a0a0a; margin-bottom: 3px; }
.cert-org-bw { font-family: 'Space Mono', monospace; font-size: 0.72rem; color: #888; }

/* ── CONTACT ── */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; }
.contact-info p { color: #555; line-height: 1.9; font-size: 0.95rem; margin-bottom: 2.5rem; }
.contact-item { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.5rem; }
.c-icon {
  width: 42px; height: 42px; border: 1px solid rgba(10,10,10,0.15);
  display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;
}
.c-label { font-family: 'Space Mono', monospace; font-size: 0.68rem; color: #888; letter-spacing: 1px; margin-bottom: 3px; text-transform: uppercase; }
.c-value { font-size: 0.9rem; color: #0a0a0a; font-weight: 500; }
.social-row { display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 2rem; }
.social-pill {
  padding: 0.6rem 1.4rem; border: 1px solid rgba(10,10,10,0.2);
  font-size: 0.78rem; font-family: 'Space Mono', monospace; color: #555;
  text-decoration: none; transition: all 0.2s;
}
.social-pill:hover { background: #0a0a0a; color: #fff; border-color: #0a0a0a; }
.contact-form-bw { display: flex; flex-direction: column; gap: 1rem; }
.input-bw {
  width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(10,10,10,0.2);
  padding: 1rem 0; color: #0a0a0a; font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem; outline: none; transition: border-color 0.2s;
}
.input-bw:focus { border-bottom-color: #0a0a0a; }
.input-bw::placeholder { color: #aaa; }
.textarea-bw { min-height: 100px; resize: none; }
.send-btn {
  margin-top: 1rem; padding: 1rem 2.5rem; background: #0a0a0a; color: #fff;
  border: none; font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: 0.9rem; cursor: pointer; align-self: flex-start;
  border-radius: 100px; letter-spacing: 0.5px;
  transition: background 0.2s, transform 0.2s;
}
.send-btn:hover { background: #333; transform: translateY(-2px); }

/* ── FOOTER ── */
.footer-bw {
  padding: 3rem 5rem; border-top: 1px solid rgba(10,10,10,0.1);
  display: flex; align-items: center; justify-content: space-between;
  position: relative; z-index: 1; background: #fff;
}
.footer-left { font-family: 'Space Mono', monospace; font-size: 0.78rem; color: #888; }
.footer-logo { font-family: 'Inter', sans-serif; font-size: 1.4rem; font-weight: 900; color: #0a0a0a; letter-spacing: -1px; }
.footer-right { font-family: 'Space Mono', monospace; font-size: 0.72rem; color: #aaa; text-align: right; }

/* ── SKILLS SPLIT ── */
.skills-split { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }

@media (max-width: 900px) {
  .nav { padding: 0 1.5rem; }
  .nav-links { display: none; }
  .hero { padding: 80px 1.5rem 3rem; }
  .hero-content { max-width: 100%; }
  .hero-bg-img { display: none; }
  .hero-name { font-size: clamp(3rem, 12vw, 5rem); letter-spacing: -2px; }
  .hero-stats { position: static; flex-direction: row; justify-content: flex-start; margin-top: 2rem; }
  .hero-stat-num { font-size: 1.8rem; color: #0a0a0a; }
  .hero-stat-lbl { color: #888; }
  .section { padding: 4rem 1.5rem; }
  .about-grid, .edu-grid, .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
  .skills-split { grid-template-columns: 1fr; gap: 3rem; }
  .exp-entry { grid-template-columns: 1fr; gap: 0.5rem; }
  .footer-bw { padding: 2rem 1.5rem; flex-direction: column; gap: 1rem; text-align: center; }
  .projects-grid { grid-template-columns: 1fr; }
  .about-facts { grid-template-columns: 1fr 1fr; }
}
`;

export default function Portfolio() {
  useEffect(() => {
    const el = document.createElement('style');
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);

    return () => {
      el.remove();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <MarqueeBar />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

function MarqueeBar() {
  const items = ['Node.js','Java', 'Spring Boot','JavaScript' ,'React.js',  'MySQL','REST APIs', 'GitHub'];
  const doubled = [...items, ...items];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}<span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}