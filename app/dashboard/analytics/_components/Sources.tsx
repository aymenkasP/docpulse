'use client'

import React from 'react'
import { PieChart } from 'lucide-react'

interface Source {
    name: string
    value: number
    color: string
}

const sources: Source[] = [
    { name: 'Documentation', value: 45, color: 'bg-primary-fixed' },
    { name: 'API Reference', value: 28, color: 'bg-secondary-fixed' },
    { name: 'Tutorials', value: 18, color: 'bg-tertiary' },
    { name: 'Blog', value: 9, color: 'bg-tertiary-fixed' },
]

export default function Sources() {
    return (
        <div className="dev-card">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md text-primary">Top Sources</h3>
                <PieChart size={20} className="text-primary-fixed" />
            </div>
            <div className="space-y-3">
                {sources.map((source) => (
                    <div key={source.name}>
                        <div className="flex items-center justify-between mb-1">
                            <span className="font-body-md text-on-surface">{source.name}</span>
                            <span className="font-label-mono text-[10px] text-on-surface-variant">{source.value}%</span>
                        </div>
                        <div className="h-2 bg-surface-container overflow-hidden">
                            <div className={`h-full ${source.color}`} style={{ width: `${source.value}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}