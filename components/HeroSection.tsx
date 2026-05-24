import { ArrowRight, PlayCircle, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <section className="section-dark py-small-section-gap relative flex-grow flex items-center">
            <div className="technical-grid"></div>
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center w-full">
                <div className="lg:col-span-7 flex flex-col items-start gap-8">
                    <div data-aos="fade-down" data-aos-delay="0" className="inline-flex items-center gap-2 bg-primary-fixed/10 border border-primary-fixed/30 px-3 py-1 rounded-none font-label-mono text-label-mono text-primary-fixed uppercase tracking-widest">
                        <span className="w-2 h-2 bg-primary-fixed animate-pulse"></span>
                        NEW: GitHub Integration
                    </div>

                    <h1 data-aos="fade-up" data-aos-delay="100" className="font-display-lg text-display-lg text-primary uppercase leading-none">
                        Turn Stale Documentation into <span className="text-primary-fixed opacity-90">Living Code</span>
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="200" className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-outline-variant/50 pl-4 py-2">
                        The drop-in feedback widget that lets your users highlight, report, and suggest fixes for confusing technical docs in seconds—without the friction of opening a pull request.
                    </p>

                    <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                        <Link href="/signup" className="dev-btn-primary">
                            Get Your Embed Code — It's Free
                            <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <Link href="#demo" className="dev-btn-secondary">
                            <PlayCircle className="mr-2" size={20} />
                            See a Live Demo
                        </Link>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className="mt-1 border-t border-outline-variant/30 w-full">
                        <p className="font-label-mono text-label-mono text-outline uppercase tracking-widest mb-4">Works seamlessly with:</p>
                        <div className="flex flex-wrap gap-6 text-on-surface-variant opacity-70 font-label-mono text-label-mono">
                            <span>// Docusaurus</span>
                            <span>// Nextra</span>
                            <span>// Mintlify</span>
                            <span>// Custom Next.js</span>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="200" className="lg:col-span-5 mt-12 lg:mt-0 ">
                    <img src="/hero.png" alt="Hero" className='w-full h-full object-cover ' />
                </div>
            </div>
        </section>
    )
}
