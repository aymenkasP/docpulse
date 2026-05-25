import React from 'react'

export default function KeyInsights() {
    return (
        <div className="dev-card">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Key Insights</h3>
            <div className="space-y-3">
                <div className="p-3 bg-primary-fixed/5 border border-primary-fixed/20">
                    <p className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-widest text-[10px]">TRENDING UP</p>
                    <p className="font-body-md text-on-surface mt-1">Documentation feedback increased 28% after the latest API update.</p>
                </div>
                <div className="p-3 bg-secondary-container/10 border border-outline-variant/20">
                    <p className="font-label-mono text-label-mono text-secondary-fixed-dim uppercase tracking-widest text-[10px]">INSIGHT</p>
                    <p className="font-body-md text-on-surface mt-1">Tutorials account for 18% of feedback but have the highest satisfaction rate.</p>
                </div>
            </div>
        </div>
    )
}
