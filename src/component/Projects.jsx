import React from 'react';
import useFadeUp from '../hooks/useFadeUp';

const projects = [
  {
    num: '01',
    title: 'Invoice Management System',
    desc: 'Developed and maintained a full-stack Invoice Management System to automate invoice processing, tracking, and record management, significantly reducing manual effort and improving operational efficiency. Built scalable backend services using Java and Spring Boot with secure RESTful APIs and MySQL integration for reliable data handling. Designed responsive and user-friendly interfaces using React.js to enhance usability and performance. Continuously handled system maintenance, bug fixes, and enhancements, improving application stability, processing speed, and overall user experience.',
    specs: [
      ['Frontend', 'React.js, HTML, CSS'],
      ['Backend', 'Java, Spring Boot'],
      ['Database', 'MySQL'],
    ],
    tags: ['React.js', 'Spring Boot', 'MySQL', 'REST API', 'Full Stack'],
  },

  {
    num: '02',
    title: 'Strydo Company Website',
    desc: 'Developed and maintained the official company website to ensure a responsive, fast, and user-friendly experience. Focused on improving performance, reliability, and smooth navigation across devices. Regularly handled updates, bug fixes, and feature enhancements, ensuring optimal functionality and improved user satisfaction.',
    specs: [
      ['Frontend', 'React.js, HTML, CSS'],
      ['Backend', 'N/A (Frontend Focused)'],
    ],
    tags: ['React.js', 'Responsive Design', 'UI/UX', 'Website Maintenance'],
  },

  {
    num: '03',
    title: 'JCI Website',
    desc: 'Designed and developed a fully responsive website to support organizational activities and improve user accessibility. Built with a focus on clean UI, performance optimization, and seamless navigation. Responsible for ongoing maintenance, bug fixes, and feature enhancements to ensure smooth functionality and better user experience.',
    specs: [
      ['Frontend', 'React.js, HTML, CSS'],
      ['Backend', 'N/A (Frontend Focused)'],
    ],
    tags: ['React.js', 'Responsive Design', 'UI/UX', 'Web Development'],
  },
];

export default function Projects() {
    const s3 = useFadeUp();

    return (
        <section id="projects" className="section section-alt">
            <div className="fade-up" ref={s3}>
                <div className="sec-eyebrow">Projects</div>
                <h2 className="sec-title-large">Featured <span className="sec-title-outline">Builds</span></h2>
                <div className="sec-line" />
            </div>

            <div className="projects-grid">
                {projects.map(p => (
                    <div key={p.num} className="project-card">
                        <div className="proj-num">PROJECT _{p.num}</div>
                        <div className="proj-title">{p.title}</div>
                        <p className="proj-desc">{p.desc}</p>

                        <div style={{ marginBottom: '1.2rem' }}>
                            {p.specs.map(([k, v]) => (
                                <div key={k} style={{ display: 'flex', gap: '1rem', marginBottom: 6, fontSize: '0.8rem' }}>
                                    <span className="proj-key" style={{ minWidth: 80 }}>{k}:</span>
                                    <span className="proj-val">{v}</span>
                                </div>
                            ))}
                        </div>

                        <div className="proj-tags-bw">
                            {p.tags.map(t => <span key={t} className="proj-tag-bw">{t}</span>)}
                        </div>
                    </div>
                ))}

                {/* Coming soon card */}
                <div className="project-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, border: '1px dashed rgba(10,10,10,0.15)', background: '#fafafa' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '3rem', fontWeight: 900, color: 'rgba(10,10,10,0.1)', marginBottom: '1rem' }}>+</div>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#bbb', textAlign: 'center', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        More projects<br />coming soon
                    </div>
                </div>
            </div>
        </section>
    );
}
