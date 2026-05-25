'use client'

import React, { useState } from 'react'
import DashboardTopBar from '../_components/DashboardTopBar'
import { allFeedback, FilterTab, FeedbackItem } from './_components/data'
import FeedbackList from './_components/FeedbackList'
import FeedbackDetail from './_components/FeedbackDetail'

export default function InboxPage() {
    const [activeTab, setActiveTab] = useState<FilterTab>('all')
    const [selectedItem, setSelectedItem] = useState<FeedbackItem | null>(allFeedback[0])
    const [searchQuery, setSearchQuery] = useState('')

    const filteredFeedback = allFeedback.filter(fb => {
        if (activeTab !== 'all' && fb.status !== activeTab) return false
        if (searchQuery && !fb.snippet.toLowerCase().includes(searchQuery.toLowerCase()) && !fb.page.toLowerCase().includes(searchQuery.toLowerCase())) return false
        return true
    })

    const tabs: { label: string; value: FilterTab; count: number }[] = [
        { label: 'All', value: 'all', count: allFeedback.length },
        { label: 'Open', value: 'open', count: allFeedback.filter(f => f.status === 'open').length },
        { label: 'In Progress', value: 'in-progress', count: allFeedback.filter(f => f.status === 'in-progress').length },
        { label: 'Resolved', value: 'resolved', count: allFeedback.filter(f => f.status === 'resolved').length },
    ]

    return (
        <>
            <DashboardTopBar
                title="Inbox"
                subtitle="// all feedback submissions"
                actions={
                    <div className="flex items-center gap-3">
                        <span className="font-label-mono text-label-mono text-on-surface-variant hidden sm:inline">
                            {filteredFeedback.length} items
                        </span>
                    </div>
                }
            />

            <div className="flex flex-1 h-[calc(100vh-73px)] overflow-hidden">
                <FeedbackList
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabs={tabs}
                    filteredFeedback={filteredFeedback}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />
                <FeedbackDetail
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />
            </div>
        </>
    )
}
