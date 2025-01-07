'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function ConditionalHeader() {
  const pathname = usePathname()
  const showHeaderContent = pathname === '/sales-system-prompts'

  if (!showHeaderContent) return null

  return (
    <>
      {/* Small logo at the top */}
      <div className="w-full flex justify-center py-4">
        <img 
          src="/MicroSaaS-Logo-Build.png"
          alt="MicroSaaS Logo" 
          className="mx-auto mb-8 h-[50px] w-[200px] object-contain"
        />
      </div>
      {/* Main content */}
      <div className="flex flex-col items-center py-8 space-y-6">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-sm font-medium text-purple-400 backdrop-blur-sm">
            Custom Sales System Builder
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Build A Complete 
            <span className="text-white">
              $1k - $8k
            </span> 
            Low Ticket to 
            <span className="text-white">
              High Ticket
            </span>
            <br />
            Sales System in 
            <span className="text-white">
              Record Time
            </span>
          </h1>
        </div>
      </div>
    </>
  )
} 