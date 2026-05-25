import React from 'react'
import {
    X,
    ExternalLink,
    ArrowUpRight,
    GitBranch,
    CornerUpRight,
    Tag,
    CheckCircle2,
    Archive,
    MessageSquareText,
} from 'lucide-react'
import { FeedbackItem, severityColor, statusColor, typeIcon } from './data'

interface FeedbackDetailProps {
    selectedItem: FeedbackItem | null
    setSelectedItem: (item: FeedbackItem | null) => void
}

export default function FeedbackDetail({ selectedItem, setSelectedItem }: FeedbackDetailProps) {
    return (
        <div className={`flex-1 flex flex-col overflow-hidden ${selectedItem ? 'flex' : 'hidden lg:flex'}`}>
            {selectedItem ? (
                <>
                    {/* Detail Header */}
                    <div className="px-6 py-4 border-b border-outline-variant/20 flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="font-label-mono text-label-mono text-primary-fixed">{selectedItem.id}</span>
                                <span className={`font-label-mono text-[10px] uppercase px-2 py-0.5 border ${severityColor[selectedItem.severity]}`}>
                                    {selectedItem.severity}
                                </span>
                                <span className={`font-label-mono text-[10px] uppercase px-2 py-0.5 border ${statusColor[selectedItem.status]}`}>
                                    {selectedItem.status}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 font-label-mono text-[11px] text-on-surface-variant">
                                {typeIcon[selectedItem.type]}
                                <span className="uppercase">{selectedItem.type}</span>
                                <span className="text-outline">•</span>
                                <span>by @{selectedItem.author}</span>
                                <span className="text-outline">•</span>
                                <span>{selectedItem.time}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="lg:hidden text-on-surface-variant hover:text-primary-fixed transition-colors p-1"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Detail Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                        {/* Page Reference */}
                        <div className="flex items-center gap-2 p-3 bg-surface-container border border-outline-variant/20">
                            <ExternalLink size={14} className="text-on-surface-variant flex-shrink-0" />
                            <span className="font-label-mono text-[11px] text-primary-fixed truncate">{selectedItem.page}</span>
                        </div>

                        {/* Feedback Content */}
                        <div>
                            <h3 className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-3">Feedback</h3>
                            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">{selectedItem.snippet}</p>
                        </div>

                        {/* Highlighted Text */}
                        {selectedItem.highlight && (
                            <div>
                                <h3 className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-3">Highlighted Text</h3>
                                <div className="bg-surface-container-lowest border border-outline-variant/30 p-4">
                                    <code className="font-label-mono text-[13px] text-error">{selectedItem.highlight}</code>
                                </div>
                            </div>
                        )}

                        {/* Votes */}
                        <div>
                            <h3 className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-3">Community</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 px-3 py-2 border border-outline-variant/20">
                                    <ArrowUpRight size={14} className="text-primary-fixed" />
                                    <span className="font-headline-md text-[20px] text-primary">{selectedItem.votes}</span>
                                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">votes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detail Actions */}
                    <div className="px-6 py-4 border-t border-outline-variant/20 flex items-center gap-3 flex-wrap">
                        <button className="dev-btn-primary !py-2 !px-4 font-label-mono text-label-mono">
                            <GitBranch size={14} className="mr-2" />
                            Create Issue
                        </button>
                        <button className="dev-btn-secondary !py-2 !px-4 font-label-mono text-label-mono">
                            <CornerUpRight size={14} className="mr-2" />
                            Assign
                        </button>
                        <button className="dev-btn-secondary !py-2 !px-4 font-label-mono text-label-mono">
                            <Tag size={14} className="mr-2" />
                            Label
                        </button>
                        <button className="dev-btn-secondary !py-2 !px-4 font-label-mono text-label-mono">
                            <CheckCircle2 size={14} className="mr-2" />
                            Resolve
                        </button>
                        <button className="ml-auto dev-btn-secondary !py-2 !px-4 font-label-mono text-label-mono text-outline hover:!text-on-surface-variant">
                            <Archive size={14} className="mr-2" />
                            Archive
                        </button>
                    </div>
                </>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-on-surface-variant">
                    <MessageSquareText size={48} className="opacity-20 mb-4" />
                    <p className="font-headline-md text-[20px] text-primary uppercase mb-2">Select Feedback</p>
                    <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">{"// choose an item from the list"}</p>
                </div>
            )}
        </div>
    )
}
