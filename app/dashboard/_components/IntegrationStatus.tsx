import React from 'react'
import { GitBranch } from 'lucide-react'

const integrations = [
    { name: 'GitHub', status: 'Connected', repo: 'acme/docs', active: true },
    { name: 'Slack', status: 'Connected', repo: '#doc-feedback', active: true },
    { name: 'Linear', status: 'Not Connected', repo: '—', active: false },
    { name: 'Jira', status: 'Not Connected', repo: '—', active: false },
]

export default function IntegrationStatus() {
    return (
        <div className="dev-card">
            <h3 className="font-headline-md text-[24px] text-primary uppercase mb-1">Integrations</h3>
            <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-6">{"// connected services"}</p>
            <div className="space-y-4">
                {integrations.map((integration) => (
                    <div key={integration.name} className="flex items-center justify-between py-3 border-b border-outline-variant/20 last:border-0">
                        <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 ${integration.active ? 'bg-primary-fixed animate-pulse' : 'bg-outline'}`} />
                            <div>
                                <p className="font-label-mono text-label-mono text-on-surface uppercase tracking-widest">{integration.name}</p>
                                <p className="font-label-mono text-[10px] text-on-surface-variant">{integration.repo}</p>
                            </div>
                        </div>
                        <span className={`font-label-mono text-[10px] uppercase px-2 py-0.5 border ${
                            integration.active
                                ? 'border-primary-fixed/30 text-primary-fixed bg-primary-fixed/10'
                                : 'border-outline-variant/30 text-outline'
                        }`}>
                            {integration.status}
                        </span>
                    </div>
                ))}
            </div>
            <button className="w-full mt-4 dev-btn-secondary !py-2 font-label-mono text-label-mono">
                <GitBranch size={14} className="mr-2" />
                Manage Integrations
            </button>
        </div>
    )
}
