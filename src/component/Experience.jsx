import React from 'react';
import useFadeUp from '../hooks/useFadeUp';

export default function Experience() {
    const s2 = useFadeUp();

    return (
        <section id="experience" className="section">
            <div className="fade-up" ref={s2}>
                <div className="sec-eyebrow">Experience</div>
                <h2 className="sec-title-large">Work <span className="sec-title-outline">History</span></h2>
                <div className="sec-line" />
            </div>

            <div className="exp-timeline">
                <div className="exp-entry">
                    <div className="exp-date">
                        2025 – 2026<br />
                        <span style={{ color: '#bbb', fontSize: '0.68rem' }}>Full Time</span>
                    </div>
                    <div className="exp-body">
                        <div className="exp-role">Software Developer</div>
                        <div className="exp-company">Strydo Technologies Pvt. Ltd. · Vellore, India</div>
                        <ul className="exp-points">
                            {[
                                [
                                    "Handled end-to-end application development and ongoing maintenance, including bug fixing and performance optimization.",
                                    "Designed and developed scalable full-stack applications using Java, Spring Boot, and React.js following industry best practices.",
                                    "Built and integrated secure RESTful APIs for efficient communication between front-end and back-end systems.",
                                    "Implemented business logic and database operations using MySQL, ensuring performance, data integrity, and security.",
                                    "Developed responsive and user-friendly interfaces using React.js, HTML, CSS, and JavaScript.",
                                    "Used GitHub and version control practices to support collaborative development and maintain code quality."
                                ]
                            ].map(p => <li key={p}>{p}</li>)}
                        </ul>
                        <div className="exp-tag-row">
                            {['Node.js', 'Java', 'Spring Boot', 'React.js', 'MySQL', 'GitHub', ].map(t => (
                                <span key={t} className="exp-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Currently available badge */}
            <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '0.8rem 1.5rem', border: '1px solid rgba(10,10,10,0.15)',
                marginTop: '3rem', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#555',
            }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'blink 2s infinite' }} />
                Currently open for new opportunities
            </div>
        </section>
    );
}
