'use client'

import React from 'react'
import { Calendar } from 'lucide-react'
import DashboardTopBar from '../components/DashboardTopBar'
import FeedbackTrends from './_components/FeedbackTrends'
import Sources from './_components/Sources'
import ResponseDistribution from './_components/ResponseDistribution'
import KeyInsights from './_components/KeyInsights'

const statsData = [
    { label: 'Total Feedback', value: '1,284', change: '+12.5%', up: true },
    { label: 'Resolution Rate', value: '86%', change: '+8.2%', up: true },
    { label: 'Avg Response Time', value: '2.4h', change: '-12%', up: false },
    { label: 'Active Users', value: '42', change: '+18%', up: true },
]

export default function AnalyticsPage() {
    return (
        <>
            <DashboardTopBar
                title="Analytics"
                subtitle="// insights — last 30 days"
                actions={
                    <button className="dev-btn-secondary !py-2 !px-4 font-label-mono text-label-mono">
                        <Calendar size={14} className="mr-2" />
                        Last 30 days
                    </button>
                }
            />

            <div className="px-margin-mobile md:px-8 py-8 space-y-8">


                <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
                    <FeedbackTrends />
                    <Sources />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <ResponseDistribution />
                    <KeyInsights />
                </div>
            </div>
        </>
    )
}