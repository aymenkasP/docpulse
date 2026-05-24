import { AlertTriangle } from 'lucide-react'
import React from 'react'

export default function ProblemSection() {
    return (
        <section className="section-light py-section-gap">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
                <div data-aos="fade-right" data-aos-delay="100" className="md:col-span-5 order-2 md:order-1">
                    <img src="/problem.jpeg" alt="Hero" className='w-full h-full object-cover' />
                </div>
                <div data-aos="fade-left" data-aos-delay="200" className="md:col-span-7 order-1 md:order-2 flex flex-col items-start gap-6 lg:pl-12">
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
