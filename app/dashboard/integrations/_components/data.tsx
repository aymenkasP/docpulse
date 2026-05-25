import { CheckCircle2, AlertTriangle, Unplug } from 'lucide-react'

export interface Integration {
    id: string
    name: string
    description: string
    status: 'connected' | 'disconnected' | 'error'
    lastSync?: string
    icon?: string
}

export const integrations: Integration[] = [
    {
        id: '1',
        name: 'GitHub',
        description: 'Sync documentation with your code repositories',
        status: 'connected',
        lastSync: '2 hours ago',
    },
    {
        id: '2',
        name: 'Slack',
        description: 'Get real-time feedback notifications in your workspace',
        status: 'connected',
        lastSync: '5 minutes ago',
    },
    {
        id: '3',
        name: 'Jira',
        description: 'Create tickets from feedback automatically',
        status: 'error',
        lastSync: '1 day ago',
    },
    {
        id: '4',
        name: 'Notion',
        description: 'Sync documentation and feedback with Notion',
        status: 'disconnected',
    },
    {
        id: '5',
        name: 'Linear',
        description: 'Track feedback as issues in Linear',
        status: 'connected',
        lastSync: '30 minutes ago',
    },
]

export const statusConfig = {
    connected: { color: 'text-primary-fixed', bg: 'bg-primary-fixed/10', border: 'border-primary-fixed/30', icon: CheckCircle2 },
    disconnected: { color: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim/10', border: 'border-tertiary-fixed-dim/30', icon: Unplug },
    error: { color: 'text-error', bg: 'bg-error/10', border: 'border-error/30', icon: AlertTriangle },
}
