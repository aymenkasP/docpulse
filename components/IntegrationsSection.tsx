import { Code, Code2, MessageSquare, Bell, Kanban } from 'lucide-react'
import React from 'react'

export default function IntegrationsSection() {
    return (
        <section id="integrations" className="section-dark py-section-gap border-t border-outline-variant/20">
            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
                <h2 data-aos="fade-up" className="font-display-lg text-display-lg uppercase leading-none text-primary mb-6">
                    Plays well with others
                </h2>
                <p data-aos="fade-up" data-aos-delay="100" className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">Drop the script tag into any site, or use our official React, Vue, and vanilla JS packages.</p>
                <div className="flex flex-wrap justify-center gap-12 opacity-70">
                    <div data-aos="zoom-in" data-aos-delay="0" className="font-headline-md text-headline-md text-on-surface-variant uppercase flex items-center gap-2"><Code2 className="text-primary-fixed" size={32} /> GitHub</div>
                    <div data-aos="zoom-in" data-aos-delay="100" className="font-headline-md text-headline-md text-on-surface-variant uppercase flex items-center gap-2"><Code className="text-primary-fixed" size={32} /> GitLab</div>
                    <div data-aos="zoom-in" data-aos-delay="200" className="font-headline-md text-headline-md text-on-surface-variant uppercase flex items-center gap-2"><MessageSquare className="text-primary-fixed" size={32} /> Slack</div>
                    <div data-aos="zoom-in" data-aos-delay="300" className="font-headline-md text-headline-md text-on-surface-variant uppercase flex items-center gap-2"><Bell className="text-primary-fixed" size={32} /> Discord</div>
                    <div data-aos="zoom-in" data-aos-delay="400" className="font-headline-md text-headline-md text-on-surface-variant uppercase flex items-center gap-2"><Kanban className="text-primary-fixed" size={32} /> Linear</div>
                </div>
            </div>
        </section>
    )
}
