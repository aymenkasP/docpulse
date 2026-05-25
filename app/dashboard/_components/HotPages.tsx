import React from 'react'
import { Flame, TrendingUp, ChevronRight } from 'lucide-react'

const hotPages = [
    { path: '/docs/auth/oauth2-setup', feedbackCount: 47, trend: 'up' },
    { path: '/docs/getting-started/install', feedbackCount: 34, trend: 'up' },
    { path: '/docs/api/rate-limiting', feedbackCount: 28, trend: 'down' },
    { path: '/docs/webhooks/events', feedbackCount: 21, trend: 'up' },
    { path: '/docs/sdks/python', feedbackCount: 18, trend: 'down' },
]

export default function HotPages() {
    return (
        <div className="dev-card">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-headline-md text-[24px] text-primary uppercase flex items-center gap-2">
                        <Flame size={20} className="text-error" />
                        Hot Pages
                    </h3>
                    <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mt-1">{"// most flagged docs"}</p>
                </div>
            </div>
            <div className="space-y-3">
                {hotPages.map((page, i) => (
                    <div key={page.path} className="flex items-center gap-3 py-2 border-b border-outline-variant/20 last:border-0 group cursor-pointer">
                        <span className="font-label-mono text-label-mono text-on-surface-variant w-5">{String(i + 1).padStart(2, '0')}</span>
                        <div className="flex-1 min-w-0">
                            <p className="font-label-mono text-[11px] text-primary-fixed truncate group-hover:text-primary transition-colors">{page.path}</p>
                        </div>
                        <span className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-1">
                            {page.feedbackCount}
                            <TrendingUp size={10} className={page.trend === 'up' ? 'text-error' : 'text-primary-fixed rotate-180'} />
                        </span>
                    </div>
                ))}
            </div>
            <button className="w-full mt-4 py-2 font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest hover:text-primary-fixed transition-colors flex items-center justify-center gap-1 border-t border-outline-variant/20 pt-4">
                View All Pages
                <ChevronRight size={12} />
            </button>
        </div>
    )
}
