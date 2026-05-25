'use client'

import React from 'react'

export default function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
    return (
        <button
            onClick={onToggle}
            className={`relative w-10 h-5 transition-colors border ${
                enabled
                    ? 'bg-primary-fixed/20 border-primary-fixed/50'
                    : 'bg-surface-container border-outline-variant/40'
            }`}
        >
            <span
                className={`absolute top-0.5 w-3.5 h-3.5 transition-all ${
                    enabled
                        ? 'left-[22px] bg-primary-fixed'
                        : 'left-0.5 bg-outline'
                }`}
            />
        </button>
    )
}