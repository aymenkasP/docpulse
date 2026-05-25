'use client'

import React from 'react'
import SectionHeader from './SectionHeader'
import Toggle from './Toggle'
import { SettingRow } from './SectionHeader'

interface NotificationsTabProps {
    emailNotifs: boolean
    feedbackAlerts: boolean
    weeklyDigest: boolean
    slackNotifs: boolean
    criticalOnly: boolean
    onToggle: {
        emailNotifs: () => void
        feedbackAlerts: () => void
        weeklyDigest: () => void
        slackNotifs: () => void
        criticalOnly: () => void
    }
}

export default function NotificationsTab({
    emailNotifs,
    feedbackAlerts,
    weeklyDigest,
    slackNotifs,
    criticalOnly,
    onToggle
}: NotificationsTabProps) {
    return (
        <div>
            <SectionHeader title="Notifications" description="// how you want to be alerted" />

            <div className="bg-surface-container-low border border-outline-variant/20 p-6">
                <h3 className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Email</h3>
                <SettingRow label="Email Notifications" description="Receive updates about feedback activity via email">
                    <Toggle enabled={emailNotifs} onToggle={onToggle.emailNotifs} />
                </SettingRow>
                <SettingRow label="New Feedback Alerts" description="Get notified instantly when new feedback is submitted">
                    <Toggle enabled={feedbackAlerts} onToggle={onToggle.feedbackAlerts} />
                </SettingRow>
                <SettingRow label="Weekly Digest" description="Summary of all feedback activity sent every Monday">
                    <Toggle enabled={weeklyDigest} onToggle={onToggle.weeklyDigest} />
                </SettingRow>

                <div className="mt-8">
                    <h3 className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Integrations</h3>
                    <SettingRow label="Slack Notifications" description="Push alerts to your connected Slack channel">
                        <Toggle enabled={slackNotifs} onToggle={onToggle.slackNotifs} />
                    </SettingRow>
                    <SettingRow label="Critical Only" description="Only notify for high-severity feedback items">
                        <Toggle enabled={criticalOnly} onToggle={onToggle.criticalOnly} />
                    </SettingRow>
                </div>
            </div>
        </div>
    )
}