import { Menu, Terminal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function TopNavBar() {
    return (
        <nav className="bg-background border-b border-outline-variant/20 sticky top-0 z-50">
            <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 mx-auto max-w-7xl">
                {/* Brand */}
                <Link href="#" className="font-headline-md text-headline-md italic tracking-tighter text-primary flex items-center gap-2 group">
                    <Terminal className="text-primary-fixed group-hover:text-primary transition-colors" size={32} />
                    DocPulse
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#how-it-works" className="text-on-surface-variant font-label-mono text-label-mono uppercase tracking-widest hover:text-primary-fixed transition-colors duration-200">How it Works</Link>
                    <Link href="#features" className="text-on-surface-variant font-label-mono text-label-mono uppercase tracking-widest hover:text-primary-fixed transition-colors duration-200">Features</Link>
                    <Link href="#integrations" className="text-on-surface-variant font-label-mono text-label-mono uppercase tracking-widest hover:text-primary-fixed transition-colors duration-200">Integrations</Link>
                    <Link href="#pricing" className="text-on-surface-variant font-label-mono text-label-mono uppercase tracking-widest hover:text-primary-fixed transition-colors duration-200">Pricing</Link>
                </div>

                {/* Trailing Action */}
                <div className="flex items-center gap-4">
                    <Link href="#contact" className="dev-btn-secondary hidden sm:flex font-label-mono text-label-mono">
                        <Terminal className="mr-2" size={16} />
                        LET'S TALK
                    </Link>
                    <button className="md:hidden text-primary">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    )
}
