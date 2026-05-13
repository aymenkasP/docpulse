import { Terminal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-surface-container-lowest border-t border-outline-variant py-gutter">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center w-full gap-4 relative z-10">
                {/* Brand & Copyright */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="#" className="font-headline-md text-primary italic tracking-tighter flex items-center gap-2">
                        <Terminal className="text-primary-fixed" size={24} />
                        DocPulse
                    </Link>
                    <p className="text-primary-fixed-dim font-label-mono text-[10px] tracking-widest uppercase">
                        © {new Date().getFullYear()} DOCPULSE TERMINAL. ALL RIGHTS RESERVED.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-6">
                    <Link href="#" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed hover:underline decoration-primary-fixed uppercase tracking-widest">Documentation</Link>
                    <Link href="#" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed hover:underline decoration-primary-fixed uppercase tracking-widest">Privacy</Link>
                    <Link href="#" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed hover:underline decoration-primary-fixed uppercase tracking-widest">Terms</Link>
                    <Link href="#" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed hover:underline decoration-primary-fixed uppercase tracking-widest">Changelog</Link>
                </div>
            </div>
        </footer>
    )
}
