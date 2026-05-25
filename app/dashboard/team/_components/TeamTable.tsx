import React from 'react'
import { Shield, MoreVertical } from 'lucide-react'
import { teamMembers, roleConfig } from './data'

export default function TeamTable() {
    return (
        <div className="dev-card">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-outline-variant/30">
                            <th className="text-left py-3 font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Name</th>
                            <th className="text-left py-3 font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Email</th>
                            <th className="text-left py-3 font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Role</th>
                            <th className="text-left py-3 font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Status</th>
                            <th className="w-16"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamMembers.map((member) => (
                            <tr key={member.id} className="border-b border-outline-variant/10 last:border-0 hover:bg-surface-container/30 transition-colors">
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary-fixed/10 border border-primary-fixed/20 flex items-center justify-center font-label-mono text-primary-fixed text-xs">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className="font-body-md text-primary">{member.name}</span>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <span className="font-body-md text-on-surface-variant">{member.email}</span>
                                </td>
                                <td className="py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 font-label-mono text-[10px] uppercase tracking-widest ${roleConfig[member.role].bg} ${roleConfig[member.role].color} border ${roleConfig[member.role].border}`}>
                                        {member.role === 'Owner' && <Shield size={12} />}
                                        {member.role}
                                    </span>
                                </td>
                                <td className="py-4">
                                    <span className={`font-label-mono text-[10px] uppercase tracking-widest ${
                                        member.status === 'active' ? 'text-primary-fixed' : 'text-tertiary-fixed-dim'
                                    }`}>
                                        {member.status}
                                    </span>
                                </td>
                                <td className="py-4">
                                    <button className="text-on-surface-variant hover:text-primary-fixed transition-colors">
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
