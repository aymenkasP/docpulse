import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function AvailableIntegrations() {
    return (
        <div className="dev-card dev-card-light">
            <h3 className="font-headline-md text-headline-md text-on-tertiary-container mb-4">Available Integrations</h3>
            <p className="font-body-md text-on-tertiary-container mb-4">Connect with your favorite tools to enhance your workflow.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['GitHub', 'GitLab', 'Jira', 'Linear', 'Slack', 'Discord', 'Notion', 'Confluence'].map((tool) => (
                    <button key={tool} className="p-3 border border-on-tertiary-container/20 hover:border-on-tertiary-container/40 transition-colors">
                        <ExternalLink size={16} className="mx-auto mb-2 text-on-tertiary-container" />
                        <span className="font-label-mono text-label-mono text-on-tertiary-container">{tool}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
