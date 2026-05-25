'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

export const inputClass = "w-full bg-surface-container border border-outline-variant/30 px-4 py-2.5 font-label-mono text-[13px] text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-fixed/50 transition-colors"

export const selectClass = "appearance-none bg-surface-container border border-outline-variant/30 px-4 py-2.5 pr-10 font-label-mono text-[13px] text-on-surface focus:outline-none focus:border-primary-fixed/50 transition-colors cursor-pointer"

interface SelectProps {
    value: string
    onChange: (value: string) => void
    options: { value: string; label: string }[]
    className?: string
}

export function Select({ value, onChange, options, className = '' }: SelectProps) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`${selectClass} ${className}`}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
        </div>
    )
}