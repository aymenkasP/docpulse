import { Check } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function PricingSection() {
    return (
        <section id="pricing" className="section-light py-section-gap">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display-lg text-display-lg uppercase leading-none tracking-tighter text-[#1a1c19]">Simple Pricing</h2>
                    <p className="font-body-lg text-[#2f312e] mt-4">Start for free. Upgrade when you need more power.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Tier */}
                    <div className="border-2 border-[#1a1c19] p-8 flex flex-col chamfer-tl bg-white">
                        <h3 className="font-headline-md text-headline-md text-[#1a1c19] uppercase mb-2">Hobby</h3>
                        <div className="text-5xl font-headline-lg mb-6">$0<span className="text-lg text-[#636561] font-body-md text-body-md block inline">/mo</span></div>
                        <ul className="space-y-4 mb-8 flex-grow font-body-lg text-[#2f312e]">
                            <li className="flex items-center gap-2"><Check className="text-[#b2d400]" size={20} /> Up to 100 feedback submissions</li>
                            <li className="flex items-center gap-2"><Check className="text-[#b2d400]" size={20} /> Basic GitHub integration</li>
                            <li className="flex items-center gap-2"><Check className="text-[#b2d400]" size={20} /> Standard theming</li>
                        </ul>
                        <Link href="#signup" className="border-2 border-[#1a1c19] text-[#1a1c19] font-label-mono uppercase tracking-widest py-3 px-6 text-center hover:bg-[#1a1c19] hover:text-[#f4efe6] transition-colors font-bold">Start Free</Link>
                    </div>

                    {/* Pro Tier */}
                    <div className="border-2 border-[#b2d400] p-8 flex flex-col chamfer-tl bg-[#1a1c19] text-[#f4efe6] relative">
                        <div className="absolute top-0 right-0 bg-[#b2d400] text-[#1a1c19] font-label-mono text-xs uppercase px-3 py-1 font-bold">Most Popular</div>
                        <h3 className="font-headline-md text-headline-md uppercase mb-2">Pro</h3>
                        <div className="text-5xl font-headline-lg mb-6">$49<span className="text-lg opacity-70 font-body-md text-body-md block inline">/mo</span></div>
                        <ul className="space-y-4 mb-8 flex-grow font-body-lg">
                            <li className="flex items-center gap-2"><Check className="text-[#b2d400]" size={20} /> Unlimited feedback submissions</li>
                            <li className="flex items-center gap-2"><Check className="text-[#b2d400]" size={20} /> Advanced routing & sync</li>
                            <li className="flex items-center gap-2"><Check className="text-[#b2d400]" size={20} /> Custom branding & webhooks</li>
                            <li className="flex items-center gap-2"><Check className="text-[#b2d400]" size={20} /> Pulse Analytics dashboard</li>
                        </ul>
                        <Link href="#signup" className="bg-[#b2d400] text-[#1a1c19] font-label-mono uppercase tracking-widest py-3 px-6 text-center hover:bg-[#ccf221] transition-colors font-bold">Upgrade to Pro</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
