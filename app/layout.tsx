import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Footer } from "@/components/ui/footer-section.demo";
import { Toaster } from "sonner";
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your App',
  description: 'Your app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex flex-col items-center py-8 space-y-6">
          <Image
            src="/MicroSaaS-Logo-BUild.png"
            alt="MicroSaaS Builder Logo"
            width={200}
            height={60}
            className="h-auto w-auto"
            priority
          />
          
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
        
        <AuthProvider>
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </AuthProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}