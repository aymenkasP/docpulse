import Link from 'next/link';
import { Terminal, Search, Menu, ChevronRight, Hash, Code2, Copy, ArrowRight } from 'lucide-react';

export default function DocsPage() {
    return (
        <div className="h-screen flex flex-col overflow-hidden bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed section-dark">
            <div className="technical-grid pointer-events-none fixed inset-0"></div>

            {/* TopNavBar */}
            <nav className="flex-shrink-0 bg-background border-b border-outline-variant/20 relative z-20">
                <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 mx-auto max-w-7xl relative z-10">
                    <Link href="/" className="font-headline-md text-headline-md italic tracking-tighter text-primary flex items-center gap-2 group">
                        <Terminal className="text-primary-fixed group-hover:text-primary transition-colors" size={32} />
                        <span className="hidden sm:inline">DocPulse</span>
                    </Link>

                    <div className="flex-grow max-w-md mx-8 hidden md:block">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant" size={16} />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary-fixed focus:outline-none focus:ring-1 focus:ring-primary-fixed py-2 pl-10 pr-4 font-label-mono text-[12px] placeholder:text-outline-variant rounded-none transition-all text-on-surface"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                                <kbd className="font-label-mono border border-outline-variant/50 px-1.5 py-0.5 text-[10px] text-outline-variant">⌘</kbd>
                                <kbd className="font-label-mono border border-outline-variant/50 px-1.5 py-0.5 text-[10px] text-outline-variant">K</kbd>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex gap-6 font-label-mono text-label-mono uppercase tracking-widest">
                            <Link href="/docs" className="text-primary-fixed border-b border-primary-fixed pb-1">Docs</Link>
                            <Link href="/pricing" className="text-on-surface-variant hover:text-primary-fixed transition-colors">Pricing</Link>
                        </div>
                        <Link href="/signup" className="dev-btn-secondary hidden sm:flex font-label-mono text-label-mono text-[10px] py-2 px-4 shadow-[2px_2px_0_theme(colors.outline)] hover:shadow-[2px_2px_0_theme(colors.primary-fixed)] bg-background">
                            Dashboard
                        </Link>
                        <button className="md:hidden text-primary hover:text-primary-fixed transition-colors">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="flex-grow flex w-full max-w-7xl mx-auto relative z-10 bg-background/50 backdrop-blur-md border-x border-outline-variant/10 shadow-2xl overflow-hidden">
                {/* Sidebar Navigation */}
                <aside className="w-64 flex-shrink-0 border-r border-outline-variant/20 hidden md:block py-10 pr-6 pl-margin-mobile lg:pl-10 overflow-y-auto">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-label-mono text-[10px] uppercase tracking-widest text-outline">Getting Started</h4>
                            <div className="flex flex-col border-l border-outline-variant/30 ml-2">
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-primary-fixed border-l-2 border-primary-fixed -ml-[1px] bg-primary-fixed/5 font-bold">Introduction</Link>
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:-ml-[1px] hover:border-l border-primary-fixed transition-all">Quick Start</Link>
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:-ml-[1px] hover:border-l border-primary-fixed transition-all">Configuration</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-label-mono text-[10px] uppercase tracking-widest text-outline">Integrations</h4>
                            <div className="flex flex-col border-l border-outline-variant/30 ml-2">
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:-ml-[1px] hover:border-l border-primary-fixed transition-all">React / Next.js</Link>
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:-ml-[1px] hover:border-l border-primary-fixed transition-all">Vue / Nuxt</Link>
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:-ml-[1px] hover:border-l border-primary-fixed transition-all">Vanilla JS</Link>
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:-ml-[1px] hover:border-l border-primary-fixed transition-all">Docusaurus</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-label-mono text-[10px] uppercase tracking-widest text-outline">API Reference</h4>
                            <div className="flex flex-col border-l border-outline-variant/30 ml-2">
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:-ml-[1px] hover:border-l border-primary-fixed transition-all">&lt;DocPulse /&gt;</Link>
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:-ml-[1px] hover:border-l border-primary-fixed transition-all">Webhooks</Link>
                                <Link href="#" className="pl-4 py-1.5 font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed hover:-ml-[1px] hover:border-l border-primary-fixed transition-all">REST API</Link>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-grow max-w-5xl py-12 px-margin-mobile lg:px-16 animate-fade-in-down w-full overflow-y-auto bg-background  [&::-webkit-scrollbar]:w-2
             [&::-webkit-scrollbar-track]:bg-[#2c2c2c]
            [&::-webkit-scrollbar-thumb]:bg-[#6b6b6b]
            [&::-webkit-scrollbar-thumb]:rounded-full">
                    <div className="inline-flex items-center gap-2 text-primary-fixed font-label-mono text-[10px] uppercase tracking-widest mb-4">
                        Getting Started <ChevronRight size={12} /> Introduction
                    </div>

                    <div className="flex items-start justify-between gap-4 mb-6">
                        <h1 className="font-headline-md text-5xl md:text-6xl uppercase tracking-tight text-primary">Quick Start</h1>
                        <a href="https://github.com/docpulse" target="_blank" rel="noopener noreferrer" className="hidden sm:flex text-outline hover:text-primary-fixed transition-colors mt-2" title="View Source on GitHub">
                            <Code2 size={24} />
                        </a>
                    </div>
                    <p className="font-body-lg text-on-surface-variant mb-12 text-lg md:text-xl border-l-2 border-primary-fixed/50 pl-4 py-1">
                        Install DocPulse in your documentation site in less than two minutes. Turn your passive readers into active contributors with a drop-in component.
                    </p>

                    <div className="w-full border-t border-outline-variant/20 mb-12"></div>

                    <section className="mb-14">
                        <h2 className="font-headline-md text-3xl md:text-4xl uppercase tracking-tight mb-6 flex items-center gap-3 group text-primary">
                            <Hash size={28} className="text-outline-variant group-hover:text-primary-fixed transition-colors" />
                            1. Installation
                        </h2>
                        <p className="font-body-md text-on-surface-variant mb-6 text-base md:text-lg">
                            Install the package via your preferred package manager. We recommend npm or pnpm for Next.js projects.
                        </p>
                        <div className="group relative bg-surface-container border border-outline-variant/30 chamfer-tl shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[6px_6px_0_rgba(0,0,0,0.8)] hover:-translate-y-1">
                            <div className="flex items-center justify-between border-b border-outline-variant/30 bg-surface-container-high px-4 py-2">
                                <span className="font-label-mono text-[10px] uppercase tracking-widest text-outline">Terminal</span>
                                <button className="text-outline hover:text-primary-fixed transition-colors cursor-pointer" title="Copy code">
                                    <Copy size={14} />
                                </button>
                            </div>
                            <div className="p-5 overflow-x-auto">
                                <code className="font-label-mono text-sm text-primary">npm install @docpulse/react</code>
                            </div>
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="font-headline-md text-3xl md:text-4xl uppercase tracking-tight mb-6 flex items-center gap-3 group text-primary">
                            <Hash size={28} className="text-outline-variant group-hover:text-primary-fixed transition-colors" />
                            2. Add to your Layout
                        </h2>
                        <p className="font-body-md text-on-surface-variant mb-6 text-base md:text-lg">
                            Import the widget and place it inside your root layout or application shell. It will automatically inject a floating feedback button on every page.
                        </p>

                        <div className="group relative bg-surface-container border border-outline-variant/30 chamfer-tl shadow-[4px_4px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[6px_6px_0_rgba(0,0,0,0.8)] hover:-translate-y-1">
                            <div className="flex items-center justify-between border-b border-outline-variant/30 bg-surface-container-high px-4 py-2">
                                <span className="font-label-mono text-[10px] uppercase tracking-widest text-outline">app/layout.tsx</span>
                                <button className="text-outline hover:text-primary-fixed transition-colors cursor-pointer" title="Copy code">
                                    <Copy size={14} />
                                </button>
                            </div>
                            <div className="p-6 overflow-x-auto font-label-mono text-[13px] md:text-sm leading-relaxed whitespace-pre bg-surface-container-low text-on-surface">
                                <span className="text-primary-fixed">import</span> {'{ DocPulse }'} <span className="text-primary-fixed">from</span> '@docpulse/react';
                                <br />
                                <span className="text-primary-fixed">export default function</span> RootLayout({'{ children }'}: {'{'} children: React.ReactNode {'}'}) {'{'}
                                <br />
                                {'  '}<span className="text-primary-fixed">return</span> (
                                <br />
                                {'    '}&lt;html lang="en"&gt;
                                <br />
                                {'      '}&lt;body&gt;
                                <br />
                                {'        '}{'{children}'}
                                <br />
                                {'        '}&lt;DocPulse
                                <br />
                                {'          projectId'}="<span className="text-primary-fixed-dim">prj_YOUR_PROJECT_ID</span>"
                                <br />
                                {'          theme'}="<span className="text-primary-fixed-dim">dark</span>"
                                <br />
                                {'        '} /&gt;
                                <br />
                                {'      '}&lt;/body&gt;
                                <br />
                                {'    '}&lt;/html&gt;
                                <br />
                                {'  '});
                                <br />
                                {'}'}
                            </div>
                        </div>

                        <div className="mt-8 bg-surface-container-low border border-outline-variant p-5 flex gap-4 items-start shadow-[2px_2px_0_rgba(178,212,0,0.2)] transition-all duration-300 hover:shadow-[4px_4px_0_rgba(178,212,0,0.3)] hover:-translate-y-0.5">
                            <div className="bg-primary-fixed/20 text-primary-fixed p-1 rounded-sm mt-0.5 flex-shrink-0">
                                <Code2 size={16} />
                            </div>
                            <div>
                                <h5 className="font-headline-md text-xl uppercase mb-2 text-primary">Where do I find my Project ID?</h5>
                                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                                    You can locate your Project ID in the <Link href="/signup" className="text-primary-fixed hover:bg-primary-fixed/10 px-1 -mx-1 transition-colors underline decoration-primary-fixed underline-offset-4">Dashboard Settings</Link> under "Integration Keys". Ensure you keep this key safe.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-14">
                        <h2 className="font-headline-md text-3xl md:text-4xl uppercase tracking-tight mb-6 flex items-center gap-3 group text-primary">
                            <Hash size={28} className="text-outline-variant group-hover:text-primary-fixed transition-colors" />
                            3. Configure Webhooks
                        </h2>
                        <p className="font-body-md text-on-surface-variant mb-6 text-base md:text-lg">
                            To send feedback directly to Slack, Discord, or Linear, set up a webhook in your project dashboard. No server code required.
                        </p>
                        <Link href="#" className="dev-btn-secondary inline-flex items-center gap-3 py-3 px-6 shadow-[2px_2px_0_theme(colors.outline)] hover:shadow-[2px_2px_0_theme(colors.primary-fixed)]">
                            Setup Integrations
                            <ArrowRight size={16} />
                        </Link>
                    </section>

                    <div className="w-full border-t border-outline-variant/20 mb-10 pt-10 mt-16">
                        {/* Pagination */}
                        <div className="flex justify-between items-center w-full">
                            <div></div>
                            <Link href="#" className="group dev-card bg-surface-container-lowest hover:bg-surface-container-low p-6 border border-outline-variant/30 flex flex-col items-end w-full sm:w-64 transition-all chamfer-tl">
                                <span className="font-label-mono text-[10px] uppercase tracking-widest text-outline mb-2">Next up</span>
                                <span className="font-headline-md text-2xl text-primary flex items-center gap-2 group-hover:text-primary-fixed transition-colors">
                                    React Wrapper
                                    <ChevronRight size={24} className="text-primary-fixed group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
