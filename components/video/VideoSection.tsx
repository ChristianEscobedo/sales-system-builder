"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Video {
  id: string;
  title: string;
  content: {
    title: string;
    purpose: string;
    introduction: {
      presenter: string;
      overview: string[];
    };
    keyObjectives: string[];
    tools: Array<{
      name: string;
      description: string;
      link: string;
    }>;
    features: Array<{
      title: string;
      description: string;
    }>;
    process: {
      title: string;
      steps: Array<{
        name: string;
        details: string[];
      }>;
    };
    community: {
      description: string;
      benefits: string[];
      joinLink: string;
    };
    nextSteps: string[];
    conclusion: string;
  };
}

const VIDEOS: Video[] = [
  {
    id: "uUaevSAMeOU",
    title: "Video 1. The Tools and Examples Of Builds",
    content: {
      title: "Sales System Builder Video 1",
      purpose: "This document provides an overview of the Sales System Builder, including the tools, processes, and methodologies introduced in the first video of the series. The goal is to equip users with the knowledge to create high-quality micro SaaS products and sales systems efficiently.",
      introduction: {
        presenter: "Christian",
        overview: [
          "Introduction to tools and processes in the Sales System Builder.",
          "Aimed at simplifying complex development tasks using AI tools.",
          "Provides cost-effective and fast alternatives to traditional development."
        ]
      },
      keyObjectives: [
        "Understand the tools available for building systems.",
        "Navigate the basic workflows of the Sales System Builder.",
        "Explore use cases for creating custom SaaS products and sales systems."
      ],
      tools: [
        {
          name: "Bolt",
          description: "A UI/UX designer for building micro SaaS products.",
          link: "http://bolt.new"
        },
        {
          name: "V0",
          description: "A development platform for creating full-stack web applications",
          link: "https://v0.dev/chat/"
        },
        {
          name: "Lovable",
          description: "A platform for coding micro SaaS products with customizable functions.",
          link: "https://lovable.dev/"
        }
      ],
      features: [
        {
          title: "Cost-Effective Development",
          description: "Systems can be built for less than $10 or even for free, compared to traditional costs ranging from $1,000 to $30,000."
        },
        {
          title: "Time-Saving",
          description: "Avoids lengthy back-and-forth with development teams by leveraging AI-driven tools."
        },
        {
          title: "Customizable Outputs",
          description: "Enables creation of tailored sales systems, course areas, webinar sequences, and more."
        },
        {
          title: "Scalable Learning",
          description: "Access to community resources for learning advanced SaaS product development."
        }
      ],
      process: {
        title: "Process Overview",
        steps: [
          {
            name: "Prompt Customization",
            details: [
              "Fill out the provided prompt form to define system requirements.",
              "Customize the prompt in real-time based on inputs.",
              "Copy the completed prompt for use in development platforms."
            ]
          },
          {
            name: "Platform Workflow",
            details: [
              "Paste the customized prompt into tools like Bolt, V0, or Lovable.",
              "Run the process to build the desired system stack.",
              "Follow the step-by-step guide in subsequent videos to refine the system."
            ]
          },
          {
            name: "Output Integration",
            details: [
              "Use the completed system for personal or client projects.",
              "Integrate with client acquisition strategies for professional use."
            ]
          }
        ]
      },
      community: {
        description: "Join the Sales System Builder community for:",
        benefits: [
          "Access to tools and templates.",
          "Guidance on building custom SaaS products.",
          "Networking with like-minded professionals."
        ],
        joinLink: "https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677b0ad58c725c45c45f151b"
      },
      nextSteps: [
        "Proceed to Video 2 for a detailed tutorial on filling out the prompt form and initiating the system-building process.",
        "Join the community for additional resources and support."
      ],
      conclusion: "The Sales System Builder simplifies the creation of high-quality systems using innovative AI tools, making it accessible for both personal and professional use. Users are encouraged to leverage the tools and community to maximize their results."
    }
  },
  {
    id: "1miVu99587g",
    title: "Video 2. Understanding Sales Systems",
    content: {
      title: "Sales Systems Video 2",
      purpose: "This document provides an overview of the Sales Systems Builder process introduced in Video 2, focusing on filling out prompts, using UI/UX tools, and building effective opt-in pages and sales systems.",
      introduction: {
        presenter: "Christian",
        overview: [
          "Detailed walkthrough of the form for creating sales systems.",
          "Tips and tricks for UI/UX customization using tools like Bolt.new, V0, and Lovable.",
          "Guidance on building micro SaaS and integrating with sales strategies."
        ]
      },
      keyObjectives: [
        "Master the prompt structure for building sales systems.",
        "Leverage pre-built templates and components for UI/UX design.",
        "Develop a clear process for integrating SaaS and high-ticket sales strategies."
      ],
      tools: [
        {
          name: "Bolt.new",
          description: "Primary tool for building sales systems and UI/UX designs.",
          link: "http://bolt.new"
        },
        {
          name: "21st.dev",
          description: "Resource for pre-built components like buttons and templates.",
          link: "https://21st.dev/"
        },
        {
          name: "Magic UI",
          description: "Provides pre-built templates for various applications.",
          link: "https://magicui.design/"
        },
        {
          name: "BOLT DFY PACKAGE",
          description: "Coming soon...",
          link: "#"
        }
      ],
      features: [
        {
          title: "Process Overview",
          description: "Step-by-step guide to filling out prompts, building with tools, and refining your sales system."
        },
        {
          title: "Sales Strategy Integration",
          description: "Use SaaS as a low-ticket offer to ascend into high-ticket consulting or coaching."
        },
        {
          title: "Dual-Profit System",
          description: "Incorporate MRR (Monthly Recurring Revenue) and consulting for maximum results."
        },
        {
          title: "High-Value Resources",
          description: "Deliver quality content to nurture leads into clients effectively."
        }
      ],
      process: {
        title: "Process Overview",
        steps: [
          {
            name: "Filling Out the Prompt",
            details: [
              "Define system instructions, including colors, text, and UI components.",
              "Include copywriting frameworks tailored for SaaS and high-ticket consulting.",
              "Input details such as resource type, target audience, industry, and pricing."
            ]
          },
          {
            name: "Building with Tools",
            details: [
              "Use the completed prompt in tools like Bolt.new.",
              "Leverage dynamic variables for customizations.",
              "Fine-tune elements such as opt-in pages, headlines, and styles."
            ]
          },
          {
            name: "Refining and Testing",
            details: [
              "Ensure all copy and designs meet the desired standards.",
              "Fix any errors before proceeding to the next stages.",
              "Integrate additional features like email sequences and webinar slides as needed."
            ]
          }
        ]
      },
      community: {
        description: "Join our community for additional resources and guidance:",
        benefits: [
          "Access to exclusive templates and resources",
          "Regular updates and new features",
          "Community support and networking opportunities"
        ],
        joinLink: "https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677b115df5228de351fdde4b"
      },
      nextSteps: [
        "Complete the opt-in page and verify its functionality before moving forward.",
        "Proceed to building the bridge header and sales components.",
        "Join the community for additional resources and guidance."
      ],
      conclusion: "The Sales Systems Builder offers a modern, customizable approach to creating high-quality sales systems and SaaS applications. Users are encouraged to explore community resources and tools for further growth."
    }
  }
];

export function VideoSection() {
  const [currentVideo, setCurrentVideo] = useState(VIDEOS[0]);

  return (
    <div className="mb-12 space-y-8">
      <div className="aspect-video w-full max-w-4xl mx-auto">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${currentVideo.id}`}
          title={currentVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-xl"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue={currentVideo.id} onValueChange={(value) => {
          const video = VIDEOS.find(v => v.id === value);
          if (video) setCurrentVideo(video);
        }}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            {VIDEOS.map((video) => (
              <TabsTrigger key={video.id} value={video.id}>
                {video.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {VIDEOS.map((video) => (
            <TabsContent key={video.id} value={video.id} className="mt-0">
              <ScrollArea className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-[600px]">
                <div className="space-y-6 pr-4">
                  <h1 className="text-3xl font-bold text-white">{video.content.title}</h1>
                  
                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-2">Purpose</h2>
                    <p className="text-gray-300">{video.content.purpose}</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-2">Introduction</h2>
                    <p className="text-gray-300 mb-2">
                      <strong>Presenter:</strong> {video.content.introduction.presenter}
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      {video.content.introduction.overview.map((item, index) => (
                        <li key={index} className="text-gray-300">{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-2">Tools</h2>
                    <div className="grid gap-4">
                      {video.content.tools.map((tool, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-4">
                          <h3 className="text-xl font-medium text-white mb-2">{tool.name}</h3>
                          <p className="text-gray-300 mb-2">{tool.description}</p>
                          <a 
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                          >
                            {tool.link}
                          </a>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677b115df5228de351fdde4b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                          />
                        </svg>
                        Join Our Community
                      </a>
                      <a
                        href="#" // Add your builder modules access link here
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                          />
                        </svg>
                        Get Access to Builders
                      </a>
                    </div>
                  </section>

                  {/* Add more sections for features, process, community, etc. */}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
} 