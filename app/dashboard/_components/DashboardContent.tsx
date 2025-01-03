"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dashboardStylePresets } from "@/lib/constants/style-presets";
import { 
  LayoutTemplate, 
  Mail, 
  Video, 
  Presentation, 
  BookOpen,
  ArrowRight,
  Library,
  Star,
  Clock,
  Calendar,
  Settings
} from "lucide-react";

const builders = [
  {
    title: "Optin & Sales Page",
    subtitle: "Landing Page Builder",
    description: "Create high-converting landing pages with our drag & drop builder.",
    icon: <LayoutTemplate className="w-6 h-6 text-purple-400" />,
    link: "/template"
  },
  {
    title: "Email Sequence",
    subtitle: "Email Builder",
    description: "Build powerful email sequences that convert subscribers into customers.",
    icon: <Mail className="w-6 h-6 text-purple-400" />,
    link: "/template-email"
  },
  {
    title: "High-Ticket Emails",
    subtitle: "Email Builder",
    description: "Create email sequences for high-ticket offers and webinars.",
    icon: <Mail className="w-6 h-6 text-purple-400" />,
    link: "/template-email-high-ticket-ascension"
  },
  {
    title: "Mini Course",
    subtitle: "Course Builder",
    description: "Build engaging mini-courses with videos, quizzes, and resources.",
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    link: "/template-mini-course-builder"
  },
  {
    title: "Webinar Slides",
    subtitle: "Presentation Builder",
    description: "Create compelling webinar presentations that convert.",
    icon: <Presentation className="w-6 h-6 text-purple-400" />,
    link: "/template-webinar-builder"
  },
  {
    title: "Video Sales Letter",
    subtitle: "VSL Builder",
    description: "Build high-converting video sales letters and presentations.",
    icon: <Video className="w-6 h-6 text-purple-400" />,
    link: "/template-video"
  }
];

const templates = [
  {
    title: "High-Ticket Sales Funnel",
    description: "Complete funnel template for selling premium offers.",
    category: "Sales Funnel"
  },
  {
    title: "Webinar Registration",
    description: "Convert visitors into webinar attendees.",
    category: "Landing Page"
  },
  {
    title: "Mini Course Launch",
    description: "Launch your digital course with this proven template.",
    category: "Course Launch"
  },
  {
    title: "VSL Funnel",
    description: "Video-based sales funnel for digital products.",
    category: "Sales Funnel"
  },
  {
    title: "Lead Magnet Funnel",
    description: "Grow your email list with valuable free content.",
    category: "Lead Generation"
  },
  {
    title: "Strategy Call Funnel",
    description: "Book more high-ticket strategy calls.",
    category: "Sales Funnel"
  }
];

const library = [
  {
    title: "Agency Growth Funnel",
    description: "High-converting funnel for agency services.",
    lastModified: "2 days ago",
    icon: <LayoutTemplate className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Course Launch Emails",
    description: "14-day launch sequence for digital course.",
    lastModified: "1 week ago",
    icon: <Mail className="w-6 h-6 text-purple-400" />
  },
  {
    title: "AI Marketing Course",
    description: "5-module course on AI marketing strategies.",
    lastModified: "2 weeks ago",
    icon: <BookOpen className="w-6 h-6 text-purple-400" />
  }
];

export function DashboardContent() {
  const [selectedTab, setSelectedTab] = useState("builders");

  return (
    <main className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-blue-500/3" />
      
      {/* Content */}
      <div className="relative">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Sales System Builder
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create high-converting sales funnels, email sequences, courses, and webinars with our AI-powered builders.
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="builders" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto">
            <TabsTrigger value="builders">Page Builders</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="library">My Library</TabsTrigger>
          </TabsList>

          {/* Page Builders */}
          <TabsContent value="builders" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {builders.map((builder) => (
                <Card key={builder.title} className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      {builder.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{builder.title}</h3>
                      <p className="text-sm text-gray-400">{builder.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{builder.description}</p>
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <a href={builder.link}>
                      Open Builder
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Templates */}
          <TabsContent value="templates" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card key={template.title} className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-colors group">
                  <div className="aspect-video bg-black/40 rounded-lg mb-4 overflow-hidden">
                    {/* Template Preview */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                      <Star className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{template.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{template.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    Use Template
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Global Settings */}
          <TabsContent value="settings" className="max-w-3xl mx-auto">
            <Card className="bg-white/5 border-white/10 p-8">
              <h2 className="text-2xl font-semibold text-white mb-8">Global Settings</h2>
              
              {/* Brand Settings */}
              <div className="space-y-6 mb-12">
                <h3 className="text-lg font-medium text-white">Brand Settings</h3>
                <div className="grid gap-6">
                  <div>
                    <Label className="text-white">Brand Name</Label>
                    <Input
                      placeholder="Your Brand Name"
                      className="bg-white/10 border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Support Email</Label>
                    <Input
                      type="email"
                      placeholder="support@yourbrand.com"
                      className="bg-white/10 border-purple-500/30 text-white"
                    />
                  </div>
                </div>
              </div>
              
              {/* Style Settings */}
              <div className="space-y-6 mb-12">
                <h3 className="text-lg font-medium text-white">Global Style Settings</h3>
                
                {/* Style Presets */}
                <div className="space-y-4">
                  <Label className="text-white">Style Preset</Label>
                  <RadioGroup defaultValue="modern" className="grid grid-cols-2 gap-4">
                    {dashboardStylePresets.map((preset) => (
                      <div key={preset.name} className="relative">
                        <RadioGroupItem
                          value={preset.id}
                          id={preset.id}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={preset.id}
                          className="flex flex-col gap-2 rounded-lg border-2 border-white/10 p-4 hover:bg-white/5 peer-data-[state=checked]:border-purple-500 cursor-pointer"
                        >
                          <span className="font-semibold text-white">{preset.name}</span>
                          <div className="flex gap-2">
                            {preset.colors.map((color, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          {preset.gradient && (
                            <div 
                              className="w-full h-4 rounded-full mt-2"
                              style={{
                                background: `linear-gradient(to right, ${preset.gradient.from}, ${preset.gradient.to})`
                              }}
                            />
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Color Settings */}
                <div className="grid gap-6">
                  <div>
                    <Label className="text-white mb-4">Primary Colors</Label>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded border border-white/10 bg-purple-600" />
                      <Input
                        type="color"
                        defaultValue="#9333EA"
                        className="w-10 h-10"
                      />
                      <Input
                        defaultValue="#9333EA"
                        className="flex-1 bg-white/10 border-purple-500/30 text-white font-mono"
                      />
                    </div>
                  </div>
                  
                  {/* Accent Colors */}
                  <div>
                    <Label className="text-white mb-4">Accent Colors</Label>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded border border-white/10 bg-blue-600" />
                      <Input
                        type="color"
                        defaultValue="#2563EB"
                        className="w-10 h-10"
                      />
                      <Input
                        defaultValue="#2563EB"
                        className="flex-1 bg-white/10 border-purple-500/30 text-white font-mono"
                      />
                    </div>
                  </div>
                  
                  {/* Hover States */}
                  <div>
                    <Label className="text-white mb-4">Hover States</Label>
                    <div className="grid gap-4">
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded border border-white/10 bg-purple-500" />
                        <Input
                          type="color"
                          defaultValue="#8B5CF6"
                          className="w-10 h-10"
                        />
                        <Input
                          defaultValue="#8B5CF6"
                          className="flex-1 bg-white/10 border-purple-500/30 text-white font-mono"
                          placeholder="Hover Background"
                        />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded border border-white/10 bg-purple-400" />
                        <Input
                          type="color"
                          defaultValue="#A78BFA"
                          className="w-10 h-10"
                        />
                        <Input
                          defaultValue="#A78BFA"
                          className="flex-1 bg-white/10 border-purple-500/30 text-white font-mono"
                          placeholder="Hover Text"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Gradient Settings */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label className="text-white">Gradient Colors</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="grid gap-4">
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded border border-white/10 bg-purple-600" />
                        <Input
                          type="color"
                          defaultValue="#9333EA"
                          className="w-10 h-10"
                        />
                        <Input
                          defaultValue="#9333EA"
                          className="flex-1 bg-white/10 border-purple-500/30 text-white font-mono"
                          placeholder="Gradient Start"
                        />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded border border-white/10 bg-blue-600" />
                        <Input
                          type="color"
                          defaultValue="#2563EB"
                          className="w-10 h-10"
                        />
                        <Input
                          defaultValue="#2563EB"
                          className="flex-1 bg-white/10 border-purple-500/30 text-white font-mono"
                          placeholder="Gradient End"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-white">Font Family</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger className="bg-white/10 border-purple-500/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="poppins">Poppins</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              {/* Default Content */}
              <div className="space-y-6 mb-12">
                <h3 className="text-lg font-medium text-white">Default Content</h3>
                <div className="grid gap-6">
                  <div>
                    <Label className="text-white">Company Description</Label>
                    <Textarea
                      placeholder="Brief description of your company..."
                      className="bg-white/10 border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Default Call-to-Action</Label>
                    <Input
                      placeholder="e.g., Get Started Now"
                      className="bg-white/10 border-purple-500/30 text-white"
                    />
                  </div>
                </div>
              </div>
              
              {/* Save Button */}
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Save Global Settings
              </Button>
            </Card>
          </TabsContent>

          {/* Library */}
          <TabsContent value="library" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {library.map((item) => (
                <Card key={item.title} className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock size={12} />
                        <span>{item.lastModified}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 hover:bg-purple-500/10 hover:text-purple-400"
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 hover:bg-blue-500/10 hover:text-blue-400"
                    >
                      Preview
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </div>
    </main>
  );
}

