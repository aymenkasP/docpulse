import React from 'react'
import { RefreshCw } from 'lucide-react'
import { Integration, statusConfig } from './data'

export default function IntegrationCard({ integration }: { integration: Integration }) {
    const StatusIcon = statusConfig[integration.status].icon

    return (
        <div className="dev-card group hover:border-primary-fixed/50 transition-all">
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-surface-container border border-outline-variant/30 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-fixed/20 border border-primary-fixed/30 flex items-center justify-center">
                        <span className="font-label-mono text-[10px] text-primary-fixed">{integration.name[0]}</span>
                    </div>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 font-label-mono text-[10px] uppercase tracking-widest ${statusConfig[integration.status].bg} ${statusConfig[integration.status].color} border ${statusConfig[integration.status].border}`}>
                    <StatusIcon size={10} />
                    {integration.status}
                </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-1">{integration.name}</h3>
            <p className="font-body-md text-on-surface-variant mb-4">{integration.description}</p>
            {integration.lastSync && (
                <p className="font-label-mono text-[10px] text-on-surface-variant mb-4">Last sync: {integration.lastSync}</p>
            )}
            <div className="flex gap-2">
                <button className="flex-1 dev-btn-secondary !py-2 font-label-mono text-[10px]">
                    {integration.status === 'connected' ? 'Configure' : 'Connect'}
                </button>
                {integration.status === 'connected' && (
                    <button className="dev-btn-secondary !py-2 !px-3">
                        <RefreshCw size={12} />
                    </button>
                )}
            </div>
        </div>
    )
}
