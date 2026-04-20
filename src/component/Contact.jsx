import React, { useState } from 'react';
import useFadeUp from '../hooks/useFadeUp';

export default function Contact() {
    const s6 = useFadeUp();
    const [form, setForm] = useState({ name: '', email: '', msg: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: '', email: '', msg: '' });
    };

    return (
        <section id="contact" className="section section-alt">
            <div className="fade-up" ref={s6}>
                <div className="sec-eyebrow">Contact</div>
                <h2 className="sec-title-large">Let's <span className="sec-title-outline">Connect</span></h2>
                <div className="sec-line" />

                <div className="contact-grid">
                    {/* Left: Info */}
                    <div className="contact-info">
                        <p>
                            I'm currently open to full-time roles in Software Development and Cloud Engineering.
                            If you have an exciting opportunity or just want to chat tech, drop me a message.
                        </p>

                        {[
                            { icon: '✉', label: 'Email', val: 'shivashankarjv14@gmail.com' },
                            { icon: '☎', label: 'Phone', val: '+91 94878 75202' },
                            { icon: '⊙', label: 'Location', val: 'Vellore, India' },
                        ].map(c => (
                            <div key={c.label} className="contact-item">
                                <div className="c-icon">{c.icon}</div>
                                <div>
                                    <div className="c-label">{c.label}</div>
                                    <div className="c-value">{c.val}</div>
                                </div>
                            </div>
                        ))}

                        <div className="social-row">
                            <a href="www.linkedin.com/in/shiv-jk" target="_blank" rel="noreferrer" className="social-pill">LinkedIn ↗</a>
                            <a href="mailto:shivashankarjv14@gmail.com" className="social-pill">Email ↗</a>
                            <a href="#" className="social-pill">GitHub ↗</a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form className="contact-form-bw" onSubmit={handleSubmit}>
                        <input
                            className="input-bw"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                        />
                        <input
                            className="input-bw"
                            placeholder="Email Address"
                            type="email"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                        />
                        <textarea
                            className="input-bw textarea-bw"
                            placeholder="Your message..."
                            value={form.msg}
                            onChange={e => setForm({ ...form, msg: e.target.value })}
                        />
                        <button className="send-btn" type="submit">
                            {sent ? 'Message Sent ✓' : 'Send Message →'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
