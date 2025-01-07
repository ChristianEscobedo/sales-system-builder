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
          <Image
            src="/MicroSaaS-Logo-BUild.png"
            alt="MicroSaaS Logo"
            width={200}
            height={200}
            priority
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build Your A Complete Custom $1k 
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Sales Funnel System in Record Time
            </span>
          </h1>
        </div>
      </div>
    </>
  )
} 