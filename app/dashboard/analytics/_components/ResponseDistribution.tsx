import React from 'react'

export default function ResponseDistribution() {
    return (
        <div className="dev-card">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Response Distribution</h3>
            <div className="space-y-4">
                {[
                    { label: 'Positive', value: 78, color: 'bg-primary-fixed' },
                    { label: 'Neutral', value: 15, color: 'bg-secondary-fixed-dim' },
                    { label: 'Negative', value: 7, color: 'bg-error' },
                ].map((item) => (
                    <div key={item.label}>
                        <div className="flex justify-between mb-1">
                            <span className="font-body-md text-on-surface">{item.label}</span>
                            <span className={`font-label-mono text-[10px] ${
                                item.label === 'Positive' ? 'text-primary-fixed' :
                                item.label === 'Neutral' ? 'text-secondary-fixed-dim' : 'text-error'
                            }`}>{item.value}%</span>
                        </div>
                        <div className="h-2 bg-surface-container overflow-hidden">
                            <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
