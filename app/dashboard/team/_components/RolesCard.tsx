import React from 'react'

export default function RolesCard() {
    return (
        <div className="dev-card">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Roles & Permissions</h3>
            <div className="space-y-3">
                <div>
                    <p className="font-label-mono text-label-mono text-primary-fixed">Owner</p>
                    <p className="font-body-md text-on-surface-variant mt-1">Full access to all settings, billing, and team management.</p>
                </div>
                <div>
                    <p className="font-label-mono text-label-mono text-secondary-fixed-dim">Admin</p>
                    <p className="font-body-md text-on-surface-variant mt-1">Can manage integrations, feedback, and team members except owners.</p>
                </div>
                <div>
                    <p className="font-label-mono text-label-mono text-tertiary-fixed-dim">Member</p>
                    <p className="font-body-md text-on-surface-variant mt-1">Can view and respond to feedback, limited settings access.</p>
                </div>
            </div>
        </div>
    )
}
