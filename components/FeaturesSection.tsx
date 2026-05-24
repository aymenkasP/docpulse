import { ArrowLeftRight, HeartCrack, LineChart } from 'lucide-react'
import React from 'react'

export default function FeaturesSection() {
    return (
        <section id="features" className="section-light py-section-gap">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
                <div data-aos="fade-up" className="flex flex-col items-center text-center mb-16">
                    <h2 className="font-display-lg text-display-lg uppercase leading-none tracking-tighter text-[#1a1c19] max-w-4xl">Stop playing middleman between Discord and Engineering.</h2>
                    <p className="font-body-lg text-[#2f312e] mt-6 max-w-2xl">Turn vague community complaints into actionable, context-rich engineering tickets—automatically.</p>
                    <div className="h-1 w-24 bg-[#b2d400] mt-8"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {/* Point 1 */}
                    <div data-aos="zoom-in" data-aos-delay="0" className="p-8 border-2 border-[#1a1c19] chamfer-tl bg-white flex flex-col">
                        <HeartCrack className="text-4xl mb-4 text-[#1a1c19]" size={40} />
                        <h3 className="font-headline-md text-headline-md text-[#1a1c19] uppercase mb-4">The Pain: The Discord Black Hole</h3>
                        <p className="font-body-md text-[#2f312e]">Right now, your community's frustration is scattered across Slack threads, X replies, and Discord channels. "The auth page is confusing." "This code snippet throws an error." You spend hours tracking down the exact page, reproducing the error, and translating it into an issue ticket that engineering might finally look at next sprint.</p>
                    </div>
                    {/* Point 2 */}
                    <div data-aos="zoom-in" data-aos-delay="150" className="p-8 border-2 border-[#1a1c19] chamfer-tl bg-white flex flex-col">
                        <ArrowLeftRight className="text-4xl mb-4 text-[#1a1c19]" size={40} />
                        <h3 className="font-headline-md text-headline-md text-[#1a1c19] uppercase mb-4">The Shift: Passive Readers to Active Contributors</h3>
                        <p className="font-body-md text-[#2f312e]">Empower your community to fix things exactly where they break. By removing the massive friction of creating a formal pull request, you turn your silent majority of readers into active micro-contributors. They get to help the community without breaking their flow, and you foster a culture of shared ownership over the developer experience.</p>
                    </div>
                    {/* Point 3 */}
                    <div data-aos="zoom-in" data-aos-delay="300" className="p-8 border-2 border-[#1a1c19] chamfer-tl bg-white flex flex-col">
                        <LineChart className="text-4xl mb-4 text-[#1a1c19]" size={40} />
                        <h3 className="font-headline-md text-headline-md text-[#1a1c19] uppercase mb-4">The Superpower: Data-Driven Empathy</h3>
                        <p className="font-body-md text-[#2f312e]">Stop arguing with product managers about whether a feature is poorly documented. Our widget gives you hard data. When a specific paragraph gets highlighted for feedback ten times in a week, you have the exact metrics, screenshots, and user context you need to prove exactly where the developer journey is hitting a wall.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
