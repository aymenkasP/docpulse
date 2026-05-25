'use client'

import React, { useState } from 'react'
import { X, Mail, AlertCircle } from 'lucide-react'

interface InviteMemberModalProps {
    open: boolean
    onClose: () => void
}

export default function InviteMemberModal({ open, onClose }: InviteMemberModalProps) {
    const [email, setEmail] = useState('')
    const [role, setRole] = useState<'Admin' | 'Member'>('Member')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle invite logic
        console.log('Inviting:', { email, role })
        onClose()
    }

    if (!open) return null

    return (
        <>
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
                <div className="dev-card w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-headline-md text-headline-md text-primary">Invite Member</h2>
                        <button onClick={onClose} className="text-on-surface-variant hover:text-primary-fixed transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="colleague@company.com"
                                    className="w-full pl-10 pr-4 py-2.5 bg-surface-container text-on-surface font-body-md border border-outline-variant/50 focus:border-primary-fixed outline-none transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-2">
                                Role
                            </label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-3 p-3 border border-outline-variant/30 cursor-pointer hover:border-primary-fixed/50 transition-colors">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="Admin"
                                        checked={role === 'Admin'}
                                        onChange={(e) => setRole(e.target.value as 'Admin' | 'Member')}
                                        className="w-4 h-4 text-primary-fixed bg-surface-container border-outline-variant/50 focus:ring-primary-fixed"
                                    />
                                    <div className="flex-1">
                                        <p className="font-label-mono text-label-mono text-secondary-fixed-dim">Admin</p>
                                        <p className="font-body-md text-on-surface-variant text-[12px]">Can manage integrations, feedback, and team members except owners.</p>
                                    </div>
                                </label>
                                <label className="flex items-center gap-3 p-3 border border-outline-variant/30 cursor-pointer hover:border-primary-fixed/50 transition-colors">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="Member"
                                        checked={role === 'Member'}
                                        onChange={(e) => setRole(e.target.value as 'Admin' | 'Member')}
                                        className="w-4 h-4 text-primary-fixed bg-surface-container border-outline-variant/50 focus:ring-primary-fixed"
                                    />
                                    <div className="flex-1">
                                        <p className="font-label-mono text-label-mono text-tertiary-fixed-dim">Member</p>
                                        <p className="font-body-md text-on-surface-variant text-[12px]">Can view and respond to feedback, limited settings access.</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 p-3 bg-tertiary-container/10 border border-outline-variant/20">
                            <AlertCircle size={14} className="text-tertiary-fixed-dim mt-0.5" />
                            <p className="font-body-md text-on-surface-variant text-[12px]">
                                An email invitation will be sent to the provided address. They will need to accept to join the team.
                            </p>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 dev-btn-secondary !py-2 font-label-mono text-label-mono"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 dev-btn-primary !py-2 font-label-mono text-label-mono"
                            >
                                Send Invite
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}