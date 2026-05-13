import { ArrowRight, PlayCircle, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <section className="section-dark py-section-gap relative flex-grow flex items-center">
            <div className="technical-grid"></div>
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center w-full">
                <div className="lg:col-span-7 flex flex-col items-start gap-8">
                    <div className="inline-flex items-center gap-2 bg-primary-fixed/10 border border-primary-fixed/30 px-3 py-1 rounded-none font-label-mono text-label-mono text-primary-fixed uppercase tracking-widest">
                        <span className="w-2 h-2 bg-primary-fixed animate-pulse"></span>
                        NEW: GitHub Integration
                    </div>

                    <h1 className="font-display-lg text-display-lg text-primary uppercase leading-none">
                        Turn Stale Documentation into <span className="text-primary-fixed opacity-90">Living Code</span>
                    </h1>

                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-outline-variant/50 pl-4 py-2">
                        The drop-in feedback widget that lets your users highlight, report, and suggest fixes for confusing technical docs in seconds—without the friction of opening a pull request.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                        <Link href="#signup" className="dev-btn-primary">
                            Get Your Embed Code — It's Free
                            <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <Link href="#demo" className="dev-btn-secondary">
                            <PlayCircle className="mr-2" size={20} />
                            See a Live Demo
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-outline-variant/30 w-full">
                        <p className="font-label-mono text-label-mono text-outline uppercase tracking-widest mb-4">Works seamlessly with:</p>
                        <div className="flex flex-wrap gap-6 text-on-surface-variant opacity-70 font-label-mono text-label-mono">
                            <span>// Docusaurus</span>
                            <span>// Nextra</span>
                            <span>// Mintlify</span>
                            <span>// Custom Next.js</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
                    {/* Abstract Hero Graphic inspired by the DevTool aesthetic */}
                    <div className="relative w-full aspect-[4/5] bg-surface-container border border-outline-variant/30 chamfer-tl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-8 bg-surface-container-high border-b border-outline-variant/30 flex items-center px-4 gap-2">
                            <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                            <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                            <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                            <div className="ml-auto font-label-mono text-[10px] text-outline tracking-widest">preview_widget.tsx</div>
                        </div>
                        <div className="p-6 pt-12 h-full flex flex-col gap-4 font-label-mono text-sm text-on-surface-variant">
                            <div className="text-outline">1 &nbsp; <span className="text-primary-fixed">import</span> {'{ DocPulse }'} <span className="text-primary-fixed">from</span> '@docpulse/react';</div>
                            <div className="text-outline">2</div>
                            <div className="text-outline">3 &nbsp; <span className="text-primary-fixed">export default function</span> Layout({'{ children }'}) {'{'}</div>
                            <div className="text-outline">4 &nbsp; &nbsp; <span className="text-primary-fixed">return</span> (</div>
                            <div className="text-outline">5 &nbsp; &nbsp; &nbsp; &lt;div className="docs-container"&gt;</div>
                            <div className="text-outline">6 &nbsp; &nbsp; &nbsp; &nbsp; {'{children}'}</div>
                            <div className="text-outline">7 &nbsp; &nbsp; &nbsp; &nbsp; &lt;DocPulse </div>
                            <div className="text-outline">8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; projectId="prj_123" </div>
                            <div className="text-outline">9 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; theme="dark" </div>
                            <div className="text-outline">10 &nbsp; &nbsp; &nbsp; &nbsp;/&gt;</div>
                            <div className="text-outline">11 &nbsp; &nbsp; &nbsp;&lt;/div&gt;</div>
                            <div className="text-outline">12 &nbsp; &nbsp;);</div>
                            <div className="text-outline">13 &nbsp;{'}'}</div>

                            {/* Simulated active widget overlay */}
                            <div className="absolute bottom-8 right-8 w-64 bg-background border border-primary-fixed shadow-2xl z-20">
                                <div className="bg-primary-fixed text-on-primary-fixed text-xs font-bold px-3 py-2 uppercase tracking-widest flex justify-between items-center">
                                    Suggestion
                                    <X size={14} className="cursor-pointer" />
                                </div>
                                <div className="p-4 flex flex-col gap-3">
                                    <div className="bg-surface-variant/50 border-l-2 border-primary-fixed px-2 py-1 text-xs font-mono text-outline">
                                        "const api_key = req.body;"
                                    </div>
                                    <div className="text-xs text-on-surface">This should probably be req.headers.authorization, right?</div>
                                    <div className="flex justify-end gap-2 mt-2">
                                        <button className="bg-primary-fixed text-on-primary-fixed px-3 py-1 text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-primary-fixed-dim transition-colors">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
