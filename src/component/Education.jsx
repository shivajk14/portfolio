import React from 'react';
import useFadeUp from '../hooks/useFadeUp';

export default function Education() {
    const s5 = useFadeUp();

    return (
        <section className="section">
            <div className="fade-up" ref={s5}>
                <div className="edu-grid">
                    {/* Education column */}
                    <div>
                        <div className="sec-eyebrow">Education</div>
                        <h2 className="sec-title-large" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                            Academic <span className="sec-title-outline">Path</span>
                        </h2>
                        <div className="sec-line" />

                        <div className="edu-entry">
                            {[
                                { icon: '🎓', degree: 'B.Tech – Information & Technology', school: 'C. Abdul Hakeem College of Engineering', loc: 'Ranipet' },
                                { icon: '📚', degree: 'HSC – Higher Secondary', school: 'Gangadhara Matric. Hr. Sec. School', loc: 'Ranipet' },
                                { icon: '📖', degree: 'SSLC – Secondary', school: 'Gangadhara Matric. Hr. Sec. School', loc: 'Ranipet' },
                            ].map(e => (
                                <div key={e.degree} className="edu-card">
                                    <div className="edu-icon">{e.icon}</div>
                                    <div className="edu-degree">{e.degree}</div>
                                    <div className="edu-school">{e.school} · {e.loc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications column */}
                    <div>
                        <div className="sec-eyebrow">Certifications</div>
                        <h2 className="sec-title-large" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                            Credentials <span className="sec-title-outline">&amp; Certs</span>
                        </h2>
                        <div className="sec-line" />

                        <div className="edu-entry">
                            {[
                                { icon: '📊', name: 'Data Science Internship', org: 'Shiash Info Solution, Chennai' },
                                { icon: '☕', name: 'Java Full Stack Development', org: 'QSpider, Chennai' },
                            ].map(c => (
                                <div key={c.name} className="cert-card-bw">
                                    <div className="cert-icon-bw">{c.icon}</div>
                                    <div>
                                        <div className="cert-name-bw">{c.name}</div>
                                        <div className="cert-org-bw">{c.org}</div>
                                    </div>
                                </div>
                            ))}

                            {/* AWS Badge decoration
                            <div style={{
                                padding: '2rem', border: '1px dashed rgba(10,10,10,0.15)',
                                display: 'flex', flexDirection: 'column', gap: '0.5rem',
                                background: '#f8f8f8',
                            }}>
                                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.7rem', color: '#888', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>AWS Experience</div>
                                {['EC2', 'S3', 'RDS', 'IAM', 'CloudWatch'].map(s => (
                                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <span style={{ width: 20, height: 1, background: '#0a0a0a', display: 'inline-block' }} />
                                        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.78rem', color: '#555' }}>AWS {s}</span>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
