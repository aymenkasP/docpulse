import React from 'react'
import { Search, ArrowUpRight, MessageSquareText } from 'lucide-react'
import { FeedbackItem, FilterTab, severityColor, statusColor, typeIcon } from './data'

interface FeedbackListProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    activeTab: FilterTab
    setActiveTab: (tab: FilterTab) => void
    tabs: { label: string; value: FilterTab; count: number }[]
    filteredFeedback: FeedbackItem[]
    selectedItem: FeedbackItem | null
    setSelectedItem: (item: FeedbackItem) => void
}

export default function FeedbackList({
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    tabs,
    filteredFeedback,
    selectedItem,
    setSelectedItem,
}: FeedbackListProps) {
    return (
        <div className={`w-full lg:w-[420px] xl:w-[480px] border-r border-outline-variant/20 flex flex-col overflow-hidden ${selectedItem ? 'hidden lg:flex' : 'flex'}`}>
            {/* Search & Filters */}
            <div className="px-4 py-3 border-b border-outline-variant/20 space-y-3">
                <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                    <input
                        type="text"
                        placeholder="Search feedback..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-surface-container border border-outline-variant/30 pl-9 pr-4 py-2 font-label-mono text-label-mono text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-fixed/50 transition-colors"
                    />
                </div>
                <div className="flex gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 font-label-mono text-[10px] uppercase tracking-widest transition-colors ${
                                activeTab === tab.value
                                    ? 'bg-primary-fixed/10 text-primary-fixed border border-primary-fixed/30'
                                    : 'text-on-surface-variant hover:text-primary-fixed border border-transparent hover:border-outline-variant/30'
                            }`}
                        >
                            {tab.label}
                            <span className="opacity-60">{tab.count}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Feedback Items */}
            <div className="flex-1 overflow-y-auto">
                {filteredFeedback.map((fb) => (
                    <button
                        key={fb.id}
                        onClick={() => setSelectedItem(fb)}
                        className={`w-full text-left px-4 py-4 border-b border-outline-variant/10 transition-colors hover:bg-surface-container/50 ${
                            selectedItem?.id === fb.id ? 'bg-surface-container/70 border-l-2 border-l-primary-fixed' : 'border-l-2 border-l-transparent'
                        }`}
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                                {typeIcon[fb.type]}
                                <span className="font-label-mono text-label-mono text-primary-fixed">{fb.id}</span>
                                <span className={`font-label-mono text-[9px] uppercase px-1.5 py-0.5 border ${severityColor[fb.severity]}`}>
                                    {fb.severity}
                                </span>
                            </div>
                            <span className="font-label-mono text-[10px] text-outline">{fb.time}</span>
                        </div>
                        <p className="font-body-md text-[14px] text-on-surface line-clamp-2 mb-2">{fb.snippet}</p>
                        <div className="flex items-center justify-between">
                            <span className="font-label-mono text-[10px] text-on-surface-variant truncate max-w-[200px]">{fb.page}</span>
                            <div className="flex items-center gap-2">
                                <span className="font-label-mono text-[10px] text-on-surface-variant flex items-center gap-1">
                                    <ArrowUpRight size={9} className="text-primary-fixed" />
                                    {fb.votes}
                                </span>
                                <span className={`font-label-mono text-[9px] uppercase px-1.5 py-0.5 border ${statusColor[fb.status]}`}>
                                    {fb.status}
                                </span>
                            </div>
                        </div>
                    </button>
                ))}

                {filteredFeedback.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 text-on-surface-variant">
                        <MessageSquareText size={32} className="opacity-30 mb-3" />
                        <p className="font-label-mono text-label-mono uppercase tracking-widest">No feedback found</p>
                    </div>
                )}
            </div>
        </div>
    )
}
