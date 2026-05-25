'use client'

import React from 'react'
import DashboardTopBar from './_components/DashboardTopBar'
import StatsGrid from './_components/StatsGrid'
import WeeklyActivity from './_components/WeeklyActivity'
import HotPages from './_components/HotPages'
import RecentFeedback from './_components/RecentFeedback'
import QuickActions from './_components/QuickActions'
import IntegrationStatus from './_components/IntegrationStatus'

export default function DashboardPage() {
    return (
        <>
            <DashboardTopBar
                title="Dashboard"
                subtitle="// overview — last 30 days"
            />

            <div className="px-margin-mobile md:px-8 py-8 space-y-8">
                <StatsGrid />

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
                    <WeeklyActivity />
                    <HotPages />
                </div>

                <RecentFeedback />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <QuickActions />
                    <IntegrationStatus />
                </div>
            </div>
        </>
    )
}
