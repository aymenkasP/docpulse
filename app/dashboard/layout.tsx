'use client'

import React from 'react'
import DashboardSidebar from './_components/DashboardSidebar'
import { SidebarProvider, useSidebar } from './_components/SidebarContext'

function DashboardShell({ children }: { children: React.ReactNode }) {
    const { open, setOpen } = useSidebar()

    return (
        <div className="min-h-screen bg-background text-on-background flex">
            <DashboardSidebar open={open} onClose={() => setOpen(false)} />

            <main className="flex-1 min-w-0">
                {children}
            </main>
        </div>
    )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <DashboardShell>{children}</DashboardShell>
        </SidebarProvider>
    )
}
