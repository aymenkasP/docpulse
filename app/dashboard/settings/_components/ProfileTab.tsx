'use client'

import React from 'react'
import SectionHeader from './SectionHeader'
import { Select, inputClass } from './FormElements'
import { ChevronDown } from 'lucide-react'

interface ProfileTabProps {
    displayName: string
    email: string
    orgName: string
    role: string
    onChange: {
        displayName: (v: string) => void
        email: (v: string) => void
        orgName: (v: string) => void
        role: (v: string) => void
    }
}

export default function ProfileTab({ displayName, email, orgName, role, onChange }: ProfileTabProps) {
    return (
        <div>
            <SectionHeader title="Profile" description="// your account information" />

            <div className="bg-surface-container-low border border-outline-variant/20 p-6 space-y-5">
                <div className="flex items-center gap-4 pb-5 border-b border-outline-variant/10">
                    <div className="w-16 h-16 bg-primary-fixed/20 border border-primary-fixed/30 flex items-center justify-center font-headline-md text-[24px] text-primary-fixed">
                        JD
                    </div>
                    <div>
                        <p className="font-label-mono text-label-mono text-on-surface uppercase">{displayName}</p>
                        <p className="font-label-mono text-[10px] text-on-surface-variant mt-0.5">{role} · {orgName}</p>
                        <button className="font-label-mono text-[10px] text-primary-fixed uppercase tracking-widest mt-2 hover:underline">
                            Change Avatar
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2">Display Name</label>
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => onChange.displayName(e.target.value)}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => onChange.email(e.target.value)}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2">Organization</label>
                        <input
                            type="text"
                            value={orgName}
                            onChange={(e) => onChange.orgName(e.target.value)}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2">Role</label>
                        <div className="relative">
                            <select
                                value={role}
                                onChange={(e) => onChange.role(e.target.value)}
                                className="appearance-none bg-surface-container border border-outline-variant/30 px-4 py-2.5 pr-10 font-label-mono text-[13px] text-on-surface focus:outline-none focus:border-primary-fixed/50 transition-colors cursor-pointer w-full"
                            >
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="Viewer">Viewer</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}