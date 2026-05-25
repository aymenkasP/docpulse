'use client'

import React from 'react'

interface SectionHeaderProps {
    title: string
    description: string
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
        <div className="mb-6">
            <h2 className="font-headline-md text-[20px] text-primary uppercase tracking-tight mb-1">{title}</h2>
            <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">{description}</p>
        </div>
    )
}

interface SettingRowProps {
    label: string
    description?: string
    children: React.ReactNode
}

export function SettingRow({ label, description, children }: SettingRowProps) {
    return (
        <div className="flex items-start justify-between gap-6 py-4 border-b border-outline-variant/10 last:border-b-0">
            <div className="flex-1 min-w-0">
                <p className="font-label-mono text-[13px] text-on-surface uppercase tracking-wide">{label}</p>
                {description && (
                    <p className="font-body-md text-[13px] text-on-surface-variant mt-1">{description}</p>
                )}
            </div>
            <div className="flex-shrink-0">{children}</div>
        </div>
    )
}