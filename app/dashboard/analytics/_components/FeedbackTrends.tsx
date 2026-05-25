'use client'

import React from 'react'
import { BarChart3 } from 'lucide-react'

const chartData = [
    { day: 'Mon', feedback: 65, resolved: 45 },
    { day: 'Tue', feedback: 78, resolved: 52 },
    { day: 'Wed', feedback: 52, resolved: 38 },
    { day: 'Thu', feedback: 91, resolved: 67 },
    { day: 'Fri', feedback: 83, resolved: 61 },
    { day: 'Sat', feedback: 42, resolved: 35 },
    { day: 'Sun', feedback: 38, resolved: 30 },
]

export default function FeedbackTrends() {
    return (
        <div className="dev-card xl:col-span-2">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md text-primary">Feedback Trends</h3>
                <BarChart3 size={20} className="text-primary-fixed" />
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-4">
                {chartData.map((item) => (
                    <div key={item.day} className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-full flex flex-col items-center gap-1">
                            <div className="w-full bg-secondary-fixed/20 rounded-t" style={{ height: `${item.feedback * 0.6}px` }} />
                            <div className="w-full bg-primary-fixed/30 rounded-t" style={{ height: `${item.resolved * 0.6}px` }} />
                        </div>
                        <span className="font-label-mono text-[10px] text-on-surface-variant">{item.day}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-outline-variant/20">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary-fixed/30" />
                    <span className="font-label-mono text-[10px] text-on-surface-variant">Resolved</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary-fixed/20" />
                    <span className="font-label-mono text-[10px] text-on-surface-variant">Feedback</span>
                </div>
            </div>
        </div>
    )
}