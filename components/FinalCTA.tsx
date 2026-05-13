import { Rocket } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FinalCTA() {
    return (
        <section className="section-dark py-section-gap border-t border-outline-variant/20 relative overflow-hidden">
            <div className="technical-grid"></div>
            <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
                <h2 className="font-display-lg text-display-lg uppercase leading-none text-primary mb-6">
                    Stop losing developers to <span className="text-primary-fixed">bad docs</span>.
                </h2>
                <p className="font-body-lg text-on-surface-variant mb-10 text-xl">
                    Install DocPulse in 2 minutes and start turning frustrated users into contributors.
                </p>
                <Link href="#signup" className="dev-btn-primary text-lg px-8 py-4">
                    Get Your Embed Code Now
                    <Rocket className="ml-2" size={24} />
                </Link>
            </div>
        </section>
    )
}
