'use client'

import React from 'react'
import SectionHeader from './SectionHeader'
import { SettingRow } from './SectionHeader'
import { ChevronDown, AlertTriangle, Trash2 } from 'lucide-react'

interface GeneralTabProps {
    timezone: string
    dateFormat: string
    theme: string
    language: string
    onChange: {
        timezone: (v: string) => void
        dateFormat: (v: string) => void
        theme: (v: string) => void
        language: (v: string) => void
    }
}

export default function GeneralTab({ timezone, dateFormat, theme, language, onChange }: GeneralTabProps) {
    return (
        <div>
            <SectionHeader title="General" description="// workspace preferences" />

            <div className="bg-surface-container-low border border-outline-variant/20 p-6 space-y-0">
                <SettingRow label="Timezone" description="Used for scheduling digests and displaying timestamps">
                    <div className="relative">
                        <select
                            value={timezone}
                            onChange={(e) => onChange.timezone(e.target.value)}
                            className="appearance-none bg-surface-container border border-outline-variant/30 px-4 py-2.5 pr-10 font-label-mono text-[13px] text-on-surface focus:outline-none focus:border-primary-fixed/50 transition-colors cursor-pointer w-52"
                        >
                            <option value="UTC">UTC</option>
                            <option value="America/New_York">Eastern (ET)</option>
                            <option value="America/Chicago">Central (CT)</option>
                            <option value="America/Denver">Mountain (MT)</option>
                            <option value="America/Los_Angeles">Pacific (PT)</option>
                            <option value="Europe/London">London (GMT)</option>
                            <option value="Europe/Berlin">Berlin (CET)</option>
                            <option value="Asia/Tokyo">Tokyo (JST)</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                    </div>
                </SettingRow>
                <SettingRow label="Date Format" description="How timestamps are displayed throughout the app">
                    <div className="relative">
                        <select
                            value={dateFormat}
                            onChange={(e) => onChange.dateFormat(e.target.value)}
                            className="appearance-none bg-surface-container border border-outline-variant/30 px-4 py-2.5 pr-10 font-label-mono text-[13px] text-on-surface focus:outline-none focus:border-primary-fixed/50 transition-colors cursor-pointer w-52"
                        >
                            <option value="relative">Relative (2h ago)</option>
                            <option value="absolute">Absolute (Jan 15)</option>
                            <option value="iso">ISO 8601</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                    </div>
                </SettingRow>
                <SettingRow label="Theme" description="Interface appearance">
                    <div className="relative">
                        <select
                            value={theme}
                            onChange={(e) => onChange.theme(e.target.value)}
                            className="appearance-none bg-surface-container border border-outline-variant/30 px-4 py-2.5 pr-10 font-label-mono text-[13px] text-on-surface focus:outline-none focus:border-primary-fixed/50 transition-colors cursor-pointer w-52"
                        >
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                            <option value="system">System</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                    </div>
                </SettingRow>
                <SettingRow label="Language" description="Display language for the dashboard">
                    <div className="relative">
                        <select
                            value={language}
                            onChange={(e) => onChange.language(e.target.value)}
                            className="appearance-none bg-surface-container border border-outline-variant/30 px-4 py-2.5 pr-10 font-label-mono text-[13px] text-on-surface focus:outline-none focus:border-primary-fixed/50 transition-colors cursor-pointer w-52"
                        >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                            <option value="ja">日本語</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                    </div>
                </SettingRow>
            </div>

            <div className="mt-8">
                <h3 className="font-label-mono text-[10px] text-error uppercase tracking-widest mb-4 flex items-center gap-2">
                    <AlertTriangle size={12} />
                    Danger Zone
                </h3>
                <div className="border border-error/20 p-6">
                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <p className="font-label-mono text-[13px] text-on-surface uppercase tracking-wide">Delete Workspace</p>
                            <p className="font-body-md text-[13px] text-on-surface-variant mt-1">
                                Permanently remove this workspace and all associated data. This action cannot be undone.
                            </p>
                        </div>
                        <button className="flex-shrink-0 dev-btn-secondary !py-2 !px-4 font-label-mono text-label-mono !border-error/40 !text-error hover:!bg-error/10 hover:!border-error">
                            <Trash2 size={14} className="mr-2" />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}