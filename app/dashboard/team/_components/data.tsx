import { Shield } from 'lucide-react'

export interface TeamMember {
    id: string
    name: string
    email: string
    role: 'Owner' | 'Admin' | 'Member'
    status: 'active' | 'invited'
    avatar?: string
}

export const teamMembers: TeamMember[] = [
    { id: '1', name: 'John Doe', email: 'john@acme.dev', role: 'Owner', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@acme.dev', role: 'Admin', status: 'active' },
    { id: '3', name: 'Alex Chen', email: 'alex@acme.dev', role: 'Member', status: 'active' },
    { id: '4', name: 'Sarah Williams', email: 'sarah@acme.dev', role: 'Member', status: 'invited' },
]

export const roleConfig = {
    Owner: { color: 'text-primary-fixed', bg: 'bg-primary-fixed/10', border: 'border-primary-fixed/30' },
    Admin: { color: 'text-secondary-fixed-dim', bg: 'bg-secondary-fixed-dim/10', border: 'border-secondary-fixed-dim/30' },
    Member: { color: 'text-tertiary-fixed-dim', bg: 'bg-tertiary-fixed-dim/10', border: 'border-tertiary-fixed-dim/30' },
}
