'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Terminal,
    BarChart3,
    Settings,
    LayoutDashboard,
    Inbox,
    GitBranch,
    Users,
    X,
    LogOut,
} from 'lucide-react'

const sidebarLinks = [
    { label: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Inbox', icon: Inbox, href: '/dashboard/inbox', badge: 37 },
    { label: 'Analytics', icon: BarChart3, href: '/dashboard/analytics' },
    { label: 'Integrations', icon: GitBranch, href: '/dashboard/integrations' },
    { label: 'Team', icon: Users, href: '/dashboard/team' },
    { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
]

interface DashboardSidebarProps {
    open: boolean
    onClose: () => void
}

export default function DashboardSidebar({ open, onClose }: DashboardSidebarProps) {
    const pathname = usePathname()

    return (
        <>
            {/* Mobile sidebar overlay */}
            {open && (
                <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onClose} />
            )}

            <aside className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-surface-container-low border-r border-outline-variant/20 flex flex-col transition-transform duration-200 ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/20">
                    <Link href="/" className="font-headline-md text-headline-md italic tracking-tighter text-primary flex items-center gap-2 group">
                        <Terminal className="text-primary-fixed group-hover:text-primary transition-colors" size={24} />
                        DocPulse
                    </Link>
                    <button className="lg:hidden text-on-surface-variant" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-3 py-4 space-y-1">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.href

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={onClose}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 font-label-mono text-label-mono uppercase tracking-widest transition-colors ${
                                    isActive
                                        ? 'bg-primary-fixed/10 text-primary-fixed border-l-2 border-primary-fixed'
                                        : 'text-on-surface-variant hover:text-primary-fixed hover:bg-primary-fixed/5 border-l-2 border-transparent'
                                }`}
                            >
                                <link.icon size={16} />
                                {link.label}
                                {link.badge && (
                                    <span className="ml-auto bg-error/20 text-error font-label-mono text-[10px] px-2 py-0.5 rounded-none">
                                        {link.badge}
                                    </span>
                                )}
                            </Link>
                        )
                    })}
                </nav>

                <div className="px-3 py-4 border-t border-outline-variant/20">
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div className="w-8 h-8 bg-primary-fixed/20 border border-primary-fixed/30 flex items-center justify-center font-label-mono text-primary-fixed text-xs">
                            JD
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-label-mono text-label-mono text-on-surface truncate">JOHN DOE</p>
                            <p className="font-label-mono text-[10px] text-on-surface-variant truncate">john@acme.dev</p>
                        </div>
                        <LogOut size={14} className="text-on-surface-variant hover:text-error cursor-pointer transition-colors" />
                    </div>
                </div>
            </aside>
        </>
    )
}
