import React from 'react'
import { ChevronRight } from 'lucide-react'

const actions = [
    { label: 'Generate Embed Code', desc: 'Get the widget snippet for your docs' },
    { label: 'Configure Routing Rules', desc: 'Set up auto-assignment for feedback' },
    { label: 'Export Report', desc: 'Download CSV of all feedback data' },
    { label: 'Invite Team Member', desc: 'Add collaborators to your workspace' },
]

export default function QuickActions() {
    return (
        <div className="dev-card">
            <h3 className="font-headline-md text-[24px] text-primary uppercase mb-1">Quick Actions</h3>
            <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-6">{"// common tasks"}</p>
            <div className="space-y-3">
                {actions.map((action) => (
                    <button key={action.label} className="w-full flex items-center justify-between p-3 border border-outline-variant/30 hover:border-primary-fixed/50 hover:bg-primary-fixed/5 transition-all group/action text-left">
                        <div>
                            <p className="font-label-mono text-label-mono text-on-surface uppercase tracking-widest group-hover/action:text-primary-fixed transition-colors">{action.label}</p>
                            <p className="font-body-md text-[13px] text-on-surface-variant mt-0.5">{action.desc}</p>
                        </div>
                        <ChevronRight size={14} className="text-on-surface-variant group-hover/action:text-primary-fixed transition-colors flex-shrink-0" />
                    </button>
                ))}
            </div>
        </div>
    )
}
