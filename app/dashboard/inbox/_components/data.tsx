import React from 'react'
import { AlertTriangle, ThumbsUp, Eye, Clock } from 'lucide-react'

export interface FeedbackItem {
    id: string
    page: string
    type: 'Bug Report' | 'Suggestion' | 'Confusion' | 'Outdated'
    snippet: string
    severity: 'high' | 'medium' | 'low'
    time: string
    votes: number
    status: 'open' | 'in-progress' | 'resolved'
    author: string
    highlight?: string
}

export type FilterTab = 'all' | 'open' | 'in-progress' | 'resolved'

export const allFeedback: FeedbackItem[] = [
    { id: 'FB-1284', page: '/docs/auth/oauth2-setup', type: 'Bug Report', snippet: 'The code snippet in Step 3 throws a TypeError when using Node 20+', severity: 'high', time: '12m ago', votes: 8, status: 'open', author: 'sarah.dev', highlight: 'const token = await client.getToken()' },
    { id: 'FB-1283', page: '/docs/api/rate-limiting', type: 'Suggestion', snippet: 'Would be helpful to include rate limit headers in the response example', severity: 'medium', time: '34m ago', votes: 5, status: 'open', author: 'mike.chen' },
    { id: 'FB-1282', page: '/docs/getting-started/install', type: 'Confusion', snippet: 'Unclear whether to use npm or yarn — both are mentioned but steps differ', severity: 'medium', time: '1h ago', votes: 12, status: 'in-progress', author: 'alex.kumar', highlight: 'npm install docpulse OR yarn add docpulse' },
    { id: 'FB-1281', page: '/docs/webhooks/events', type: 'Bug Report', snippet: 'Missing `payment.refunded` event type from the table', severity: 'high', time: '2h ago', votes: 3, status: 'open', author: 'jenna.w' },
    { id: 'FB-1280', page: '/docs/sdks/python', type: 'Outdated', snippet: 'This example uses deprecated `client.connect()` — should be `client.init()`', severity: 'low', time: '3h ago', votes: 6, status: 'resolved', author: 'dev_tom', highlight: 'client.connect(api_key)' },
    { id: 'FB-1279', page: '/docs/auth/api-keys', type: 'Confusion', snippet: 'Not clear if API keys are scoped per-project or per-organization', severity: 'medium', time: '4h ago', votes: 9, status: 'open', author: 'nina.ops' },
    { id: 'FB-1278', page: '/docs/deploy/vercel', type: 'Bug Report', snippet: 'Environment variable name changed from DOCPULSE_KEY to DP_API_KEY but docs still reference old name', severity: 'high', time: '5h ago', votes: 15, status: 'in-progress', author: 'chris.b', highlight: 'DOCPULSE_KEY=your_key_here' },
    { id: 'FB-1277', page: '/docs/api/pagination', type: 'Suggestion', snippet: 'A cursor-based pagination example would be more useful than offset-based for large datasets', severity: 'low', time: '6h ago', votes: 4, status: 'open', author: 'pat.dev' },
    { id: 'FB-1276', page: '/docs/getting-started/quickstart', type: 'Outdated', snippet: 'Screenshot shows old dashboard UI — the "Create Project" button has moved to the top nav', severity: 'low', time: '8h ago', votes: 2, status: 'open', author: 'ravi.s' },
    { id: 'FB-1275', page: '/docs/webhooks/security', type: 'Bug Report', snippet: 'The HMAC verification code example is missing the timestamp check, making it vulnerable to replay attacks', severity: 'high', time: '12h ago', votes: 21, status: 'in-progress', author: 'sec_lead', highlight: 'const isValid = verifySignature(payload, signature)' },
]

export const severityColor: Record<string, string> = {
    high: 'bg-error/20 text-error border-error/30',
    medium: 'bg-primary-fixed/15 text-primary-fixed border-primary-fixed/30',
    low: 'bg-secondary/20 text-secondary border-secondary/30',
}

export const statusColor: Record<string, string> = {
    'open': 'bg-error/10 text-error border-error/20',
    'in-progress': 'bg-primary-fixed/10 text-primary-fixed border-primary-fixed/20',
    'resolved': 'bg-secondary/10 text-secondary border-secondary/20',
}

export const typeIcon: Record<string, React.ReactNode> = {
    'Bug Report': <AlertTriangle size={14} className="text-error" />,
    'Suggestion': <ThumbsUp size={14} className="text-primary-fixed" />,
    'Confusion': <Eye size={14} className="text-on-surface-variant" />,
    'Outdated': <Clock size={14} className="text-outline" />,
}
