"use client";

import Image from 'next/image'

interface HeaderProps {
  title?: string;
  subtitle?: string;
  logo?: string;
  navigation?: {
    label: string;
    href: string;
  }[];
}

export function Header({ title, subtitle, logo, navigation }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-6">
      {/* Logo/Title Section */}
      <div className="flex items-center gap-4">
        {logo && (
          <div className="relative w-[32px] h-[32px] flex items-center justify-center">
            <Image 
              src={logo}
              alt="Logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
              style={{
                maxWidth: '32px',
                maxHeight: '32px'
              }}
            />
          </div>
        )}
        <div>
          {title && (
            <h1 className="text-xl font-bold text-white">{title}</h1>
          )}
          {subtitle && (
            <p className="text-sm text-gray-400">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Navigation */}
      {navigation && navigation.length > 0 && (
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
} 