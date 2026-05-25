import React from 'react'

export default function IntegrationSettings() {
    return (
        <div className="dev-card">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Integration Settings</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-outline-variant/20">
                    <div>
                        <p className="font-body-md text-on-surface">Auto-sync feedback</p>
                        <p className="font-body-md text-on-surface-variant text-[12px]">Automatically sync new feedback to connected services</p>
                    </div>
                    <label className="relative inline-flex h-6 w-11 items-center">
                        <input type="checkbox" defaultChecked className="peer sr-only" />
                        <span className="w-11 h-6 bg-surface-container peer-checked:bg-primary-fixed/30 rounded-full transition-colors" />
                        <span className="w-5 h-5 bg-primary-fixed border border-primary-fixed/50 absolute left-0.5 top-0.5 rounded-full transition-transform peer-checked:translate-x-5" />
                    </label>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-outline-variant/20">
                    <div>
                        <p className="font-body-md text-on-surface">Create tickets for negative feedback</p>
                        <p className="font-body-md text-on-surface-variant text-[12px]">Automatically create issues for feedback with negative sentiment</p>
                    </div>
                    <label className="relative inline-flex h-6 w-11 items-center">
                        <input type="checkbox" defaultChecked className="peer sr-only" />
                        <span className="w-11 h-6 bg-surface-container peer-checked:bg-primary-fixed/30 rounded-full transition-colors" />
                        <span className="w-5 h-5 bg-primary-fixed border border-primary-fixed/50 absolute left-0.5 top-0.5 rounded-full transition-transform peer-checked:translate-x-5" />
                    </label>
                </div>
                <div className="flex items-center justify-between py-3">
                    <div>
                        <p className="font-body-md text-on-surface">Send Slack notifications</p>
                        <p className="font-body-md text-on-surface-variant text-[12px]">Notify your team channel about new feedback</p>
                    </div>
                    <label className="relative inline-flex h-6 w-11 items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="w-11 h-6 bg-surface-container rounded-full transition-colors" />
                        <span className="w-5 h-5 bg-tertiary-fixed-dim border border-outline-variant absolute left-0.5 top-0.5 rounded-full transition-transform" />
                    </label>
                </div>
            </div>
        </div>
    )
}
