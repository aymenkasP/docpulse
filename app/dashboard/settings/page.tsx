'use client'

import React, { useState } from 'react'
import { User, Bell, Key, Shield, Globe, Save } from 'lucide-react'
import DashboardTopBar from '../components/DashboardTopBar'
import ProfileTab from './_components/ProfileTab'
import NotificationsTab from './_components/NotificationsTab'
import APIKeysTab from './_components/APIKeysTab'
import SecurityTab from './_components/SecurityTab'
import GeneralTab from './_components/GeneralTab'

type SettingsTab = 'profile' | 'notifications' | 'api-keys' | 'security' | 'general'

const tabs: { label: string; value: SettingsTab; icon: React.ElementType }[] = [
    { label: 'Profile', value: 'profile', icon: User },
    { label: 'Notifications', value: 'notifications', icon: Bell },
    { label: 'API Keys', value: 'api-keys', icon: Key },
    { label: 'Security', value: 'security', icon: Shield },
    { label: 'General', value: 'general', icon: Globe },
]

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<SettingsTab>('profile')

    // Profile state
    const [displayName, setDisplayName] = useState('John Doe')
    const [email, setEmail] = useState('john@acme.dev')
    const [orgName, setOrgName] = useState('Acme Corp')
    const [role, setRole] = useState('Admin')

    // Notification state
    const [emailNotifs, setEmailNotifs] = useState(true)
    const [feedbackAlerts, setFeedbackAlerts] = useState(true)
    const [weeklyDigest, setWeeklyDigest] = useState(false)
    const [slackNotifs, setSlackNotifs] = useState(true)
    const [criticalOnly, setCriticalOnly] = useState(false)

    // API Keys state
    const [showKey, setShowKey] = useState(false)
    const [copied, setCopied] = useState(false)
    const apiKey = 'dp_live_k8x2mN4pQ7rW1vZ3bF6j'

    // Security state
    const [twoFactor, setTwoFactor] = useState(false)
    const [sessionTimeout, setSessionTimeout] = useState('30')

    // General state
    const [timezone, setTimezone] = useState('UTC')
    const [dateFormat, setDateFormat] = useState('relative')
    const [theme, setTheme] = useState('dark')
    const [language, setLanguage] = useState('en')

    const handleCopyKey = () => {
        navigator.clipboard.writeText(apiKey)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <DashboardTopBar
                title="Settings"
                subtitle="// manage your workspace"
                actions={
                    <button className="dev-btn-primary !py-2 !px-4 font-label-mono text-label-mono">
                        <Save size={14} className="mr-2" />
                        Save Changes
                    </button>
                }
            />

            <div className="px-margin-mobile md:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Tabs */}
                    <nav className="lg:w-56 flex-shrink-0">
                        <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.value
                                return (
                                    <button
                                        key={tab.value}
                                        onClick={() => setActiveTab(tab.value)}
                                        className={`flex items-center gap-3 px-3 py-2.5 font-label-mono text-label-mono uppercase tracking-widest transition-colors whitespace-nowrap ${isActive
                                                ? 'bg-primary-fixed/10 text-primary-fixed border-l-2 border-primary-fixed'
                                                : 'text-on-surface-variant hover:text-primary-fixed hover:bg-primary-fixed/5 border-l-2 border-transparent'
                                            }`}
                                    >
                                        <tab.icon size={14} />
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </div>
                    </nav>

                    {/* Content Area */}
                    <div className="flex-1 min-w-0 max-w-3xl">
                        {activeTab === 'profile' && (
                            <ProfileTab
                                displayName={displayName}
                                email={email}
                                orgName={orgName}
                                role={role}
                                onChange={{
                                    displayName: setDisplayName,
                                    email: setEmail,
                                    orgName: setOrgName,
                                    role: setRole,
                                }}
                            />
                        )}

                        {activeTab === 'notifications' && (
                            <NotificationsTab
                                emailNotifs={emailNotifs}
                                feedbackAlerts={feedbackAlerts}
                                weeklyDigest={weeklyDigest}
                                slackNotifs={slackNotifs}
                                criticalOnly={criticalOnly}
                                onToggle={{
                                    emailNotifs: () => setEmailNotifs(!emailNotifs),
                                    feedbackAlerts: () => setFeedbackAlerts(!feedbackAlerts),
                                    weeklyDigest: () => setWeeklyDigest(!weeklyDigest),
                                    slackNotifs: () => setSlackNotifs(!slackNotifs),
                                    criticalOnly: () => setCriticalOnly(!criticalOnly),
                                }}
                            />
                        )}

                        {activeTab === 'api-keys' && (
                            <APIKeysTab
                                showKey={showKey}
                                copied={copied}
                                apiKey={apiKey}
                                onToggleShow={() => setShowKey(!showKey)}
                                onCopy={handleCopyKey}
                            />
                        )}

                        {activeTab === 'security' && (
                            <SecurityTab
                                twoFactor={twoFactor}
                                sessionTimeout={sessionTimeout}
                                onToggle={{
                                    twoFactor: () => setTwoFactor(!twoFactor),
                                }}
                                onChange={{
                                    sessionTimeout: setSessionTimeout,
                                }}
                            />
                        )}

                        {activeTab === 'general' && (
                            <GeneralTab
                                timezone={timezone}
                                dateFormat={dateFormat}
                                theme={theme}
                                language={language}
                                onChange={{
                                    timezone: setTimezone,
                                    dateFormat: setDateFormat,
                                    theme: setTheme,
                                    language: setLanguage,
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}