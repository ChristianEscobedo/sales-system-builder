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
          src="/src/assets/MicroSaaS-Logo-BUild.png"
          alt="MicroSaaS Builder Logo"
          className="h-9 w-auto"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center py-8 space-y-6">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-sm font-medium text-purple-400 backdrop-blur-sm">
            Custom Sales System Builder
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Build A Complete $1k - $8k
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Sales System in 1 Hour or Less
            </span>
          </h1>
        </div>
      </div>
    </>
  )
} 