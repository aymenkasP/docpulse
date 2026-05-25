'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, Filter, ExternalLink } from 'lucide-react'
import { useSidebar } from './SidebarContext'

interface DashboardTopBarProps {
    title: string
    subtitle: string
    actions?: React.ReactNode
}

export default function DashboardTopBar({ title, subtitle, actions }: DashboardTopBarProps) {
    const { toggle } = useSidebar()

    return (
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-outline-variant/20">
            <div className="flex items-center justify-between px-margin-mobile md:px-8 py-4">
                <div className="flex items-center gap-4">
                    <button className="lg:hidden text-on-surface-variant" onClick={toggle}>
                        <Menu size={20} />
                    </button>
                    <div>
                        <h1 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">{title}</h1>
                        <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">{subtitle}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {actions || (
                        <>
                            <button className="dev-btn-secondary !py-2 !px-4 font-label-mono text-label-mono hidden sm:inline-flex">
                                <Filter size={14} className="mr-2" />
                                Filter
                            </button>
                            <Link href="/docs" className="dev-btn-primary !py-2 !px-4 font-label-mono text-label-mono">
                                <ExternalLink size={14} className="mr-2" />
                                View Docs
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
