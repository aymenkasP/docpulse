'use client'

import React from 'react'
import DashboardTopBar from '../_components/DashboardTopBar'
import { Plus } from 'lucide-react'
import { integrations } from './_components/data'
import IntegrationCard from './_components/IntegrationCard'
import IntegrationSettings from './_components/IntegrationSettings'
import AvailableIntegrations from './_components/AvailableIntegrations'

export default function IntegrationsPage() {
    return (
        <>
            <DashboardTopBar
                title="Integrations"
                subtitle="// connect your tools"
                actions={
                    <button className="dev-btn-primary !py-2 !px-4 font-label-mono text-label-mono">
                        <Plus size={14} className="mr-2" />
                        Add Integration
                    </button>
                }
            />

            <div className="px-margin-mobile md:px-8 py-8 space-y-8">
                <div>
                    <h2 className="font-headline-md text-headline-md text-primary mb-2">Connected Integrations</h2>
                    <p className="font-body-md text-on-surface-variant">Manage your third-party service connections.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
                    {integrations.map((integration) => (
                        <IntegrationCard key={integration.id} integration={integration} />
                    ))}
                </div>

                <IntegrationSettings />

                <AvailableIntegrations />
            </div>
        </>
    )
}