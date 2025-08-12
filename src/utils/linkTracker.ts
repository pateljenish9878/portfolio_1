export const trackLinkClick = async (projectTitle: string, linkType: 'GitHub' | 'Live Demo', linkUrl: string) => {
  try {
    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectTitle,
        linkType,
        linkUrl,
      }),
    })

    const result = await response.json()
    
    if (!result.success) {
      console.error('Failed to send email notification:', result.message)
    }
  } catch (error) {
    console.error('Error tracking link click:', error)
  }
} 