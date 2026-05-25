'use client'

import React, { useState } from 'react'
import DashboardTopBar from '../_components/DashboardTopBar'
import InviteMemberModal from '../_components/InviteMemberModal'
import { Plus } from 'lucide-react'
import TeamTable from './_components/TeamTable'
import RolesCard from './_components/RolesCard'
import PendingInvites from './_components/PendingInvites'

export default function TeamPage() {
    const [inviteModalOpen, setInviteModalOpen] = useState(false)

    return (
        <>
            <DashboardTopBar
                title="Team"
                subtitle="// manage your teammates"
                actions={
                    <button
                        className="dev-btn-primary !py-2 !px-4 font-label-mono text-label-mono"
                        onClick={() => setInviteModalOpen(true)}
                    >
                        <Plus size={14} className="mr-2" />
                        Invite Member
                    </button>
                }
            />
            <InviteMemberModal open={inviteModalOpen} onClose={() => setInviteModalOpen(false)} />

            <div className="px-margin-mobile md:px-8 py-8 space-y-8">
                <div>
                    <h2 className="font-headline-md text-headline-md text-primary mb-2">Team Members</h2>
                    <p className="font-body-md text-on-surface-variant">Invite and manage your team members.</p>
                </div>

                <TeamTable />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    <RolesCard />
                    <PendingInvites />
                </div>
            </div>
        </>
    )
}