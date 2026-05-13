import { AlertTriangle } from 'lucide-react'
import React from 'react'

export default function ProblemSection() {
    return (
        <section className="section-light py-section-gap">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
                <div className="md:col-span-5 order-2 md:order-1">
                    <div className="w-full aspect-square bg-[#1a1c19] border-2 border-[#1a1c19] p-8 flex flex-col justify-between chamfer-tl relative group">
                        <div className="absolute top-4 right-4 flex gap-2">
                            <AlertTriangle className="text-[#f4efe6] opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                        </div>
                        <div className="font-headline-lg text-headline-lg text-[#f4efe6] uppercase leading-none opacity-20">ERR_404</div>
                        <div className="space-y-4 text-left">
                            <div className="inline-block bg-[#ffb4ab] text-[#690005] font-label-mono text-[10px] uppercase tracking-widest px-2 py-1 font-bold">
                                High Friction
                            </div>
                            <h3 className="font-headline-md text-headline-md text-[#f4efe6] uppercase leading-tight">Users leave instead of reporting</h3>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-7 order-1 md:order-2 flex flex-col items-start gap-6 lg:pl-12">
                    <h2 className="font-display-lg text-display-lg uppercase leading-none tracking-tighter text-[#1a1c19]">
                        Your docs are out of date.
                    </h2>
                    <div className="h-1 w-24 bg-[#b2d400]"></div>
                    <h3 className="font-headline-md text-headline-md text-[#1a1c19]/80 uppercase leading-tight">
                        Your users just don't have the time to tell you.
                    </h3>
                    <p className="font-body-lg text-body-lg text-[#2f312e] max-w-2xl mt-4">
                        Developers constantly spot outdated API endpoints, typos, and broken code blocks in your documentation. But jumping into a repo, finding the right markdown file, and submitting a PR is too much work. So they leave, and the next user hits the exact same roadblock.
                    </p>
                </div>
            </div>
        </section>
    )
}
