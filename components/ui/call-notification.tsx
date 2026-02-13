'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { Button } from './button'

export function CallNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Only run on client side
    if (typeof window === 'undefined') return
    
    // Check if notification was already shown in this session
    const notificationShown = sessionStorage.getItem('callNotificationShown')
    
    if (!notificationShown) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        sessionStorage.setItem('callNotificationShown', 'true')
      }, 30000) // 30 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isMounted || !isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 max-w-xs border border-gray-200 dark:border-gray-700">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Need help?</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Speak directly with our team</p>
            <div className="mt-2 flex space-x-2">
              <Button size="sm" className="text-xs h-8" asChild>
                <a href="tel:+1234567890">
                  Call Us
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs h-8"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
