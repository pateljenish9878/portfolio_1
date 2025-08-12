'use client'

import { trackLinkClick } from '@/utils/linkTracker'

export default function TestEmail() {
  const handleTestClick = () => {
    trackLinkClick('Test Project', 'GitHub', 'https://github.com/test')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
    </div>
  )
} 