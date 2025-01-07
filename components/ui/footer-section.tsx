"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

interface SubscribeFormData {
  name: string;
  email: string;
}

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SubscribeFormData>()

  const onSubmit = async (data: SubscribeFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/FnedsjhvL9EqG9Eyjhep/webhook-trigger/9dfb581e-4d45-4c94-a293-265a0152cdf5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success("Thanks for subscribing!");
        reset(); // Clear the form
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false)
    }
  }

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <a
            href="https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677bd299e40bf7ce408c0744"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-xl">Get the Full System</span>
            <span className="text-sm opacity-90 mt-1">
              Get Email, Webinar, Upsell, Course Templates & More
            </span>
          </a>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Your name"
                  {...register("name", { required: true })}
                  className="backdrop-blur-sm"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">Name is required</p>
                )}
              </div>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                  })}
                  className="pr-12 backdrop-blur-sm"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.type === 'required' 
                      ? 'Email is required' 
                      : 'Please enter a valid email'}
                  </p>
                )}
              </div>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="https://www.facebook.com/groups/thecoachingportal" className="block transition-colors hover:text-primary">
                Free Community
              </a>
              <a href="https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677bd299e40bf7ce408c0744" className="block transition-colors hover:text-primary">
                More Templates and Resources
              </a>
              <a href="https://calendly.com/quantumshiftcoaching/mass-rapid-research-session" className="block transition-colors hover:text-primary">
                Book A Call For Custom SaaS
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Open Full Access to Sales Builder (Coming Soon)
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open('https://www.facebook.com/ChristianRayEscobedo', '_blank')}>
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open('https://x.com/christianrais77', '_blank')}>
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open('https://www.instagram.com/christianrais/', '_blank')}>
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open('https://www.linkedin.com/in/christian-ray-escobedo-1717a551/', '_blank')}>
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Micro SaaS Systems. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo } 