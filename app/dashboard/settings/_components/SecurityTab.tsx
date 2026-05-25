'use client'

import React from 'react'
import SectionHeader from './SectionHeader'
import Toggle from './Toggle'
import { SettingRow } from './SectionHeader'
import { ChevronDown } from 'lucide-react'

interface SecurityTabProps {
    twoFactor: boolean
    sessionTimeout: string
    onToggle: {
        twoFactor: () => void
    }
    onChange: {
        sessionTimeout: (v: string) => void
    }
}

export default function SecurityTab({ twoFactor, sessionTimeout, onToggle, onChange }: SecurityTabProps) {
    return (
        <div>
            <SectionHeader title="Security" description="// protect your account" />

            <div className="bg-surface-container-low border border-outline-variant/20 p-6 space-y-0">
                <SettingRow label="Two-Factor Authentication" description="Add an extra layer of security with 2FA via authenticator app">
                    <Toggle enabled={twoFactor} onToggle={onToggle.twoFactor} />
                </SettingRow>
                <SettingRow label="Session Timeout" description="Automatically sign out after period of inactivity">
                    <div className="relative">
                        <select
                            value={sessionTimeout}
                            onChange={(e) => onChange.sessionTimeout(e.target.value)}
                            className="appearance-none bg-surface-container border border-outline-variant/30 px-4 py-2.5 pr-10 font-label-mono text-[13px] text-on-surface focus:outline-none focus:border-primary-fixed/50 transition-colors cursor-pointer w-40"
                        >
                            <option value="15">15 minutes</option>
                            <option value="30">30 minutes</option>
                            <option value="60">1 hour</option>
                            <option value="480">8 hours</option>
                            <option value="never">Never</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                    </div>
                </SettingRow>
                <SettingRow label="Password" description="Last changed 45 days ago">
                    <button className="dev-btn-secondary !py-2 !px-4 font-label-mono text-label-mono">
                        Change
                    </button>
                </SettingRow>

                <div className="pt-6 mt-4 border-t border-outline-variant/10">
                    <h3 className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Active Sessions</h3>
                    <div className="space-y-3">
                        {[
                            { device: 'Chrome · macOS', location: 'San Francisco, US', time: 'Current session', current: true },
                            { device: 'Firefox · Ubuntu', location: 'San Francisco, US', time: '2 days ago', current: false },
                            { device: 'Safari · iOS', location: 'San Francisco, US', time: '5 days ago', current: false },
                        ].map((session, i) => (
                            <div key={i} className="flex items-center justify-between py-3 px-4 bg-surface-container border border-outline-variant/20">
                                <div>
                                    <p className="font-label-mono text-[12px] text-on-surface flex items-center gap-2">
                                        {session.device}
                                        {session.current && (
                                            <span className="font-label-mono text-[9px] uppercase px-1.5 py-0.5 border bg-secondary/10 text-secondary border-secondary/20">
                                                Current
                                            </span>
                                        )}
                                    </p>
                                    <p className="font-label-mono text-[10px] text-on-surface-variant mt-0.5">
                                        {session.location} · {session.time}
                                    </p>
                                </div>
                                {!session.current && (
                                    <button className="font-label-mono text-[10px] text-error uppercase tracking-widest hover:underline">
                                        Revoke
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}