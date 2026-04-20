import React, { useState, useEffect } from "react";

export default function TypeWriter({ strings }) {
    const [display, setDisplay] = useState('');
    const [idx, setIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = strings[idx];
        const speed = deleting ? 50 : 100;
        const t = setTimeout(() => {
            if (!deleting) {
                if (charIdx < current.length) setCharIdx(c => c + 1), setDisplay(current.slice(0, charIdx + 1));
                else setTimeout(() => setDeleting(true), 1800);
            } else {
                if (charIdx > 0) setCharIdx(c => c - 1), setDisplay(current.slice(0, charIdx - 1));
                else { setDeleting(false); setIdx(i => (i + 1) % strings.length); }
            }
        }, speed);
        return () => clearTimeout(t);
    }, [charIdx, deleting, idx]);

    return <span className="cyan">{display}<span className="cursor">|</span></span>;
}
