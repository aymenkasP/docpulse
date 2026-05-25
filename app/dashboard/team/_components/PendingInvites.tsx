import React from 'react'
import { Mail } from 'lucide-react'

export default function PendingInvites() {
    return (
        <div className="dev-card md:col-span-2">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Pending Invites</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-surface-container/50 border border-outline-variant/20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-tertiary-fixed-dim/10 border border-tertiary-fixed-dim/30 flex items-center justify-center">
                            <Mail size={14} className="text-tertiary-fixed-dim" />
                        </div>
                        <span className="font-body-md text-on-surface-variant">sarah@acme.dev</span>
                    </div>
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">sent 2d ago</span>
                </div>
            </div>
        </div>
    )
}
