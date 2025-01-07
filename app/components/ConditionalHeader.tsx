'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export function ConditionalHeader() {
  const pathname = usePathname()
  const showHeaderContent = pathname === '/sales-system-prompts'

  if (!showHeaderContent) return null

  return (
    <>
      <div className="container relative">
        <Link href="/" className="mx-auto flex w-fit items-center space-x-2 pt-4">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold">Your Logo Text</span>
        </Link>
      </div>
      <div className="container relative">
        <h1 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold">
          Your Headline Text
        </h1>
      </div>
    </>
  )
} 