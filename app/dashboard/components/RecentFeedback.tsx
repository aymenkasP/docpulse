import React from 'react'
import Link from 'next/link'
import {
    AlertTriangle,
    ThumbsUp,
    Eye,
    Clock,
    ArrowUpRight,
    ArrowRight,
} from 'lucide-react'

const recentFeedback = [
    { id: 'FB-1284', page: '/docs/auth/oauth2-setup', type: 'Bug Report', snippet: 'The code snippet in Step 3 throws a TypeError when using Node 20+', severity: 'high', time: '12m ago', votes: 8 },
    { id: 'FB-1283', page: '/docs/api/rate-limiting', type: 'Suggestion', snippet: 'Would be helpful to include rate limit headers in the response example', severity: 'medium', time: '34m ago', votes: 5 },
    { id: 'FB-1282', page: '/docs/getting-started/install', type: 'Confusion', snippet: 'Unclear whether to use npm or yarn — both are mentioned but steps differ', severity: 'medium', time: '1h ago', votes: 12 },
    { id: 'FB-1281', page: '/docs/webhooks/events', type: 'Bug Report', snippet: 'Missing `payment.refunded` event type from the table', severity: 'high', time: '2h ago', votes: 3 },
    { id: 'FB-1280', page: '/docs/sdks/python', type: 'Outdated', snippet: 'This example uses deprecated `client.connect()` — should be `client.init()`', severity: 'low', time: '3h ago', votes: 6 },
]

const severityColor: Record<string, string> = {
    high: 'bg-error/20 text-error border-error/30',
    medium: 'bg-primary-fixed/15 text-primary-fixed border-primary-fixed/30',
    low: 'bg-secondary/20 text-secondary border-secondary/30',
}

const typeIcon: Record<string, React.ReactNode> = {
    'Bug Report': <AlertTriangle size={14} />,
    'Suggestion': <ThumbsUp size={14} />,
    'Confusion': <Eye size={14} />,
    'Outdated': <Clock size={14} />,
}

export default function RecentFeedback() {
    return (
        <div className="dev-card !p-0 overflow-hidden">
            <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/20">
                <div>
                    <h3 className="font-headline-md text-[24px] text-primary uppercase">Recent Feedback</h3>
                    <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mt-1">{"// latest submissions from your docs"}</p>
                </div>
                <Link href="/dashboard/inbox" className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1">
                    View All <ArrowRight size={12} />
                </Link>
            </div>

            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-3 bg-surface-container/50 border-b border-outline-variant/20">
                <span className="col-span-1 font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">ID</span>
                <span className="col-span-2 font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Page</span>
                <span className="col-span-1 font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Type</span>
                <span className="col-span-5 font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Feedback</span>
                <span className="col-span-1 font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Severity</span>
                <span className="col-span-1 font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Votes</span>
                <span className="col-span-1 font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Time</span>
            </div>

            {/* Table Rows */}
            {recentFeedback.map((fb) => (
                <div key={fb.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-8 py-4 border-b border-outline-variant/10 hover:bg-surface-container/30 transition-colors cursor-pointer group">
                    <span className="col-span-1 font-label-mono text-label-mono text-primary-fixed">{fb.id}</span>
                    <span className="col-span-2 font-label-mono text-[11px] text-on-surface-variant truncate">{fb.page}</span>
                    <span className="col-span-1">
                        <span className="inline-flex items-center gap-1 font-label-mono text-[10px] text-on-surface-variant uppercase">
                            {typeIcon[fb.type]}
                            <span className="hidden lg:inline">{fb.type}</span>
                        </span>
                    </span>
                    <span className="col-span-5 font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors line-clamp-1">{fb.snippet}</span>
                    <span className="col-span-1">
                        <span className={`inline-block font-label-mono text-[10px] uppercase px-2 py-0.5 border ${severityColor[fb.severity]}`}>
                            {fb.severity}
                        </span>
                    </span>
                    <span className="col-span-1 font-label-mono text-label-mono text-on-surface-variant flex items-center gap-1">
                        <ArrowUpRight size={10} className="text-primary-fixed" />
                        {fb.votes}
                    </span>
                    <span className="col-span-1 font-label-mono text-[10px] text-outline">{fb.time}</span>
                </div>
            ))}
        </div>
    )
}
