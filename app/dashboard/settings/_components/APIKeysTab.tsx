'use client'

import React from 'react'
import SectionHeader from './SectionHeader'
import { Eye, EyeOff, Copy, Check, RefreshCw } from 'lucide-react'

interface APIKeysTabProps {
    showKey: boolean
    copied: boolean
    apiKey: string
    onToggleShow: () => void
    onCopy: () => void
}

export default function APIKeysTab({ showKey, copied, apiKey, onToggleShow, onCopy }: APIKeysTabProps) {
    return (
        <div>
            <SectionHeader title="API Keys" description="// manage your access tokens" />

            <div className="bg-surface-container-low border border-outline-variant/20 p-6 space-y-6">
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h3 className="font-label-mono text-[13px] text-on-surface uppercase tracking-wide">Production Key</h3>
                            <p className="font-label-mono text-[10px] text-on-surface-variant mt-0.5">Created 2024-11-03 · Last used 2h ago</p>
                        </div>
                        <span className="font-label-mono text-[9px] uppercase px-2 py-0.5 border bg-secondary/10 text-secondary border-secondary/20">
                            Active
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 bg-surface-container border border-outline-variant/30 px-4 py-2.5 font-label-mono text-[13px] text-on-surface-variant flex items-center justify-between">
                            <span>{showKey ? apiKey : '•'.repeat(28)}</span>
                            <button onClick={onToggleShow} className="text-on-surface-variant hover:text-primary-fixed transition-colors ml-3">
                                {showKey ? <EyeOff size={14} /> : <Eye size={14} />}
                            </button>
                        </div>
                        <button
                            onClick={onCopy}
                            className="dev-btn-secondary !py-2.5 !px-3 font-label-mono text-label-mono"
                        >
                            {copied ? <Check size={14} className="text-secondary" /> : <Copy size={14} />}
                        </button>
                    </div>
                </div>

                <div className="border-t border-outline-variant/10 pt-6">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h3 className="font-label-mono text-[13px] text-on-surface uppercase tracking-wide">Test Key</h3>
                            <p className="font-label-mono text-[10px] text-on-surface-variant mt-0.5">Created 2024-11-03 · Sandbox environment only</p>
                        </div>
                        <span className="font-label-mono text-[9px] uppercase px-2 py-0.5 border bg-primary-fixed/10 text-primary-fixed border-primary-fixed/20">
                            Test
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 bg-surface-container border border-outline-variant/30 px-4 py-2.5 font-label-mono text-[13px] text-on-surface-variant">
                            {'•'.repeat(28)}
                        </div>
                        <button className="dev-btn-secondary !py-2.5 !px-3 font-label-mono text-label-mono">
                            <Copy size={14} />
                        </button>
                    </div>
                </div>

                <div className="border-t border-outline-variant/10 pt-6 flex items-center gap-3">
                    <button className="dev-btn-secondary !py-2 !px-4 font-label-mono text-label-mono">
                        <RefreshCw size={14} className="mr-2" />
                        Regenerate Keys
                    </button>
                    <p className="font-label-mono text-[10px] text-on-surface-variant">
                        Regenerating will invalidate all existing keys.
                    </p>
                </div>
            </div>
        </div>
    )
}