import Link from 'next/link';
import { Terminal, ArrowLeft, Code2 } from 'lucide-react';

export default function Signup() {
    return (
        <div className="min-h-screen flex flex-col section-dark">
            <div className="technical-grid"></div>

            {/* Navigation */}
            <nav className=" w-full px-margin-mobile md:px-margin-desktop py-6">
                <Link href="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary-fixed transition-colors font-label-mono tracking-widest text-[10px] uppercase group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Return to Index
                </Link>
            </nav>

            {/* Form Container */}
            <div className="relative  flex-grow flex items-center justify-center p-4 ">
                <div className="w-full max-w-md dev-card chamfer-tl animate-slide-in-up">

                    <div className="flex flex-col gap-2 mb-8">
                        <div className="inline-flex items-center gap-2 text-primary">
                            <Terminal className="text-primary-fixed" size={32} />
                            <span className="font-headline-md text-3xl italic tracking-tighter">DocPulse</span>
                        </div>
                        <h1 className="font-headline-md text-2xl uppercase mt-4 text-on-surface">Initialize Workspace</h1>
                        <p className="font-body-md text-on-surface-variant">Create an account to start turning stale docs into living code.</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <button className="dev-btn-secondary w-full justify-center flex items-center gap-3 bg-surface-container-low/50">
                            <Code2 size={18} />
                            Continue with GitHub
                        </button>

                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-outline-variant/30"></div>
                            <span className="flex-shrink-0 px-4 font-label-mono text-[10px] text-outline uppercase tracking-widest">Or use email</span>
                            <div className="flex-grow border-t border-outline-variant/30"></div>
                        </div>

                        <form className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-surface-container-lowest border border-outline-variant/50 p-3 font-body-md text-on-surface focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all rounded-none placeholder:text-outline-variant"
                                    placeholder="dev@company.com"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="bg-surface-container-lowest border border-outline-variant/50 p-3 font-body-md text-on-surface focus:outline-none focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all rounded-none placeholder:text-outline-variant"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <button type="submit" className="dev-btn-primary w-full mt-4">
                                Initialize Account
                            </button>
                        </form>
                    </div>

                    <div className="border-t border-outline-variant/30 pt-6 mt-8 text-center">
                        <p className="font-body-md text-on-surface-variant text-sm">
                            Already have an account? <Link href="#" className="text-primary-fixed hover:underline decoration-primary-fixed underline-offset-4">Log in</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
