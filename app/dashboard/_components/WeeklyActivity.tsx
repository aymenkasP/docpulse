import React from 'react'
import { MoreVertical } from 'lucide-react'

const weeklyData = [
    { day: 'Mon', count: 24 },
    { day: 'Tue', count: 18 },
    { day: 'Wed', count: 32 },
    { day: 'Thu', count: 27 },
    { day: 'Fri', count: 41 },
    { day: 'Sat', count: 15 },
    { day: 'Sun', count: 11 },
]

export default function WeeklyActivity() {
    const maxCount = Math.max(...weeklyData.map(d => d.count))

    return (
        <div className="xl:col-span-2 dev-card">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-headline-md text-[24px] text-primary uppercase">Weekly Activity</h3>
                    <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mt-1">{"// feedback volume by day"}</p>
                </div>
                <button className="text-on-surface-variant hover:text-primary-fixed transition-colors">
                    <MoreVertical size={18} />
                </button>
            </div>
            <div className="flex items-end gap-3 h-48">
                {weeklyData.map((d) => (
                    <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                        <span className="font-label-mono text-[10px] text-on-surface-variant">{d.count}</span>
                        <div className="w-full relative group/bar">
                            <div
                                className="w-full bg-primary-fixed/20 border border-primary-fixed/30 hover:bg-primary-fixed/40 transition-all cursor-pointer"
                                style={{ height: `${(d.count / maxCount) * 140}px` }}
                            />
                        </div>
                        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">{d.day}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
