import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-bw">
            <div className="footer-left">
                <div className="footer-logo">Shivashankar J</div>
                <div style={{ marginTop: 6 }}>Software Developer · Java Developer · Full Stack Developer · Vellore, India</div>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="www.linkedin.com/in/shiv-jk" target="_blank" rel="noreferrer" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={e => e.target.style.color = '#0a0a0a'}
                    onMouseOut={e => e.target.style.color = '#888'}
                >LinkedIn ↗</a>
                <a href="mailto:shivashankarjv14@gmail.com" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={e => e.target.style.color = '#0a0a0a'}
                    onMouseOut={e => e.target.style.color = '#888'}
                >Email ↗</a>
            </div>
            <div className="footer-right">
                <div>Built with React</div>
                <div style={{ marginTop: 4 }}>© {new Date().getFullYear()} Shivashankar J</div>
            </div>
        </footer>
    );
}
