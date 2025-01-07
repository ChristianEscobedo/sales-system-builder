'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function ConditionalHeader() {
  const pathname = usePathname()
  const showHeaderContent = pathname === '/sales-system-prompts'

  if (!showHeaderContent) return null

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8">
        <div className="text-center">
          <img 
            src="/MicroSaaS-Logo-Build.png"
            alt="MicroSaaS Logo"
            className="mx-auto mb-8 h-[100px] w-auto"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build A Complete Custom 
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
              {' '}$1k - $8k{' '}
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
              Sales Funnel System
            </span>
            {' '}in Record Time
          </h1>
        </div>
      </div>
    </>
  )
} 