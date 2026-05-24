import { AlertCircle, BookOpen, ExternalLink, FileEdit, GitFork, Hourglass, Search } from 'lucide-react'
import React from 'react'

export default function HowWorksSection() {
    return (
        <section id="how-it-works" className="section-dark py-section-gap border-t border-outline-variant/20">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
                <h2 data-aos="fade-up" className="font-display-lg text-display-lg uppercase leading-none text-primary mb-16 text-center">
                    From "This is broken" to <span className="text-primary-fixed">Fixed—in 3 seconds flat.</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Column 1: The Old Way */}
                    <div data-aos="fade-right" data-aos-delay="150" className="dev-card bg-surface-container-low/40 border-outline-variant/30 p-8 flex flex-col gap-6 chamfer-tl  grayscale">
                        <div className="flex justify-between items-start">
                            <h3 className="font-headline-md text-headline-md text-outline uppercase">The Old Way</h3>
                            <span className="font-label-mono text-[10px] text-outline px-2 py-1 border border-outline-variant/30 uppercase tracking-widest">The Friction Zone</span>
                        </div>
                        <ul className="flex-grow flex flex-col gap-4 font-body-lg text-on-surface-variant">
                            <li className="flex items-center gap-3"><BookOpen className="text-outline" size={24} /> Read docs</li>
                            <li className="flex items-center gap-3"><AlertCircle className="text-outline" size={24} /> Spot an error</li>
                            <li className="flex items-center gap-3"><ExternalLink className="text-outline" size={24} /> Open GitHub in a new tab</li>
                            <li className="flex items-center gap-3"><Search className="text-outline" size={24} /> Hunt for the right .mdx file</li>
                            <li className="flex items-center gap-3"><GitFork className="text-outline" size={24} /> Fork repo</li>
                            <li className="flex items-center gap-3"><FileEdit className="text-outline" size={24} /> Write PR</li>
                            <li className="flex items-center gap-3"><Hourglass className="text-outline" size={24} /> Wait.</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-outline-variant/20">
                            <p className="font-label-mono text-label-mono text-error uppercase tracking-tighter">
                                Result: 99% of users just close the tab and give up.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: The New Way */}
                    <div data-aos="fade-left" data-aos-delay="300" className="dev-card bg-surface-container-low border-primary-fixed p-8 flex flex-col gap-6 chamfer-tl ring-1 ring-primary-fixed/20 shadow-[0_0_40px_rgba(178,212,0,0.1)]">
                        <div className="flex justify-between items-start">
                            <h3 className="font-headline-md text-headline-md text-primary uppercase">The New Way</h3>
                            <span className="font-label-mono text-[10px] bg-primary-fixed text-on-primary-fixed px-2 py-1 uppercase font-bold tracking-widest">The Flow State</span>
                        </div>
                        <ul className="flex-grow flex flex-col gap-6 py-4">
                            <li className="flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary-fixed font-bold min-w-8">1</span>
                                <span className="font-headline-md text-2xl text-primary uppercase">Highlight the broken code</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary-fixed font-bold min-w-8">2</span>
                                <span className="font-headline-md text-2xl text-primary uppercase">Type a quick fix in the popup</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-primary-fixed/20 flex items-center justify-center text-primary-fixed font-bold min-w-8">3</span>
                                <span className="font-headline-md text-2xl text-primary-fixed uppercase italic">Done.</span>
                            </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-primary-fixed/30">
                            <p className="font-body-lg text-primary">
                                <strong className="text-primary-fixed">Result:</strong> Your docs get updated daily by the community, and it lands straight in your Linear backlog as an actionable task.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
