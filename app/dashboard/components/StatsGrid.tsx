import React from 'react'
import {
    MessageSquareText,
    CheckCircle2,
    AlertTriangle,
    FileText,
    TrendingUp,
} from 'lucide-react'

const stats = [
    { label: 'Total Feedback', value: '1,284', change: '+12.5%', up: true, icon: MessageSquareText },
    { label: 'Open Issues', value: '37', change: '-8.2%', up: false, icon: AlertTriangle },
    { label: 'Resolved', value: '1,102', change: '+18.3%', up: true, icon: CheckCircle2 },
    { label: 'Active Docs', value: '64', change: '+3.1%', up: true, icon: FileText },
]

export default function StatsGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-gutter">
            {stats.map((stat) => (
                <div key={stat.label} className="dev-card group hover:border-primary-fixed/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 bg-primary-fixed/10 border border-primary-fixed/20 flex items-center justify-center">
                            <stat.icon size={18} className="text-primary-fixed" />
                        </div>
                        <span className={`font-label-mono text-label-mono flex items-center gap-1 ${stat.up ? 'text-primary-fixed' : 'text-error'}`}>
                            <TrendingUp size={12} className={stat.up ? '' : 'rotate-180'} />
                            {stat.change}
                        </span>
                    </div>
                    <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="font-headline-lg text-headline-lg text-primary">{stat.value}</p>
                </div>
            ))}
        </div>
    )
}
