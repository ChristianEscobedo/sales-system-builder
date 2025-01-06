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
          description: "Complete done-for-you package with templates and resources",
          link: "https://stackblitz.com/edit/sb1-zqxkc1zz?file=.gitignore"
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
  },
  {
    id: "jww6ezEoOQQ",
    title: "Video 3. Over The Shoulder Sales System Build with Bolt",
    content: {
      title: "Over The Shoulder Sales System Build with Bolt",
      purpose: "Watch a complete, step-by-step walkthrough of building a sales system using Bolt, with real-time explanations and practical implementation tips.",
      introduction: {
        presenter: "Christian",
        overview: [
          "Live demonstration of building a complete sales system using Bolt",
          "Real-time problem-solving and implementation strategies",
          "Step-by-step guide to creating your own sales system",
          "Access project files: https://stackblitz.com/edit/sb1-zqxkc1zz?file=.gitignore"
        ]
      },
      keyObjectives: [
        "Learn how to build a complete sales system from scratch",
        "Master the practical implementation of Bolt's features",
        "Understand the entire system building workflow"
      ],
      tools: [
        {
          name: "Project Files",
          description: "Complete source code and project files for the sales system build",
          link: "https://stackblitz.com/edit/sb1-zqxkc1zz?file=.gitignore"
        },
        {
          name: "Bolt.new",
          description: "Primary development platform for building sales systems",
          link: "http://bolt.new"
        },
        {
          name: "V0",
          description: "AI-powered development assistant",
          link: "https://v0.dev"
        },
        {
          name: "Sales System Templates",
          description: "Ready-to-use templates for faster development",
          link: "https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677bd299e40bf7ce408c0744"
        }
      ],
      features: [
        {
          title: "Complete System Build",
          description: "Watch the entire process of building a sales system from start to finish"
        },
        {
          title: "Real-world Application",
          description: "See how to apply the concepts in practical scenarios"
        },
        {
          title: "Implementation Tips",
          description: "Learn valuable shortcuts and best practices"
        }
      ],
      process: {
        title: "Build Process Overview",
        steps: [
          {
            name: "System Setup",
            details: [
              "Initial configuration and setup",
              "Component organization",
              "Template customization"
            ]
          },
          {
            name: "Feature Implementation",
            details: [
              "Building core functionalities",
              "Integrating key components",
              "Testing and validation"
            ]
          },
          {
            name: "Optimization",
            details: [
              "Performance improvements",
              "User experience enhancements",
              "Final system review"
            ]
          }
        ]
      },
      community: {
        description: "Join our community for more build tutorials and resources:",
        benefits: [
          "Access to additional tutorials and guides",
          "Community support for your builds",
          "Regular updates on new features"
        ],
        joinLink: "https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677bd299e40bf7ce408c0744"
      },
      nextSteps: [
        "Follow along with the build process",
        "Join the community for support",
        "Start building your own systems"
      ],
      conclusion: "This practical demonstration shows you exactly how to build a professional sales system using Bolt, giving you the confidence to create your own systems efficiently and effectively."
    }
  },
  {
    id: "SHm9WH1BQ00",
    title: "Video 4. Advanced Sales System Features",
    content: {
      title: "Advanced Sales System Features and Implementation",
      purpose: "Learn advanced features and implementation techniques for building professional sales systems, including customization options and optimization strategies.",
      introduction: {
        presenter: "Christian",
        overview: [
          "Deep dive into advanced sales system features",
          "Custom implementation techniques for professional results",
          "Optimization strategies for better conversion"
        ]
      },
      keyObjectives: [
        "Master advanced sales system features",
        "Learn professional implementation techniques",
        "Understand optimization and customization options"
      ],
      tools: [
        {
          name: "Bolt.new",
          description: "Advanced features and customization options",
          link: "http://bolt.new"
        },
        {
          name: "Sales System Templates",
          description: "Professional templates and components",
          link: "https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677bd299e40bf7ce408c0744"
        },
        {
          name: "Integration Tools",
          description: "Tools for connecting your sales system components",
          link: "https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677bd299e40bf7ce408c0744"
        }
      ],
      features: [
        {
          title: "Advanced Customization",
          description: "Deep dive into customizing your sales system for optimal results"
        },
        {
          title: "Professional Integration",
          description: "Learn how to integrate advanced features seamlessly"
        },
        {
          title: "Optimization Techniques",
          description: "Master strategies for optimizing your sales system"
        }
      ],
      process: {
        title: "Advanced Implementation Process",
        steps: [
          {
            name: "Advanced Setup",
            details: [
              "Configure advanced features and settings",
              "Set up professional integrations",
              "Implement custom functionality"
            ]
          },
          {
            name: "System Integration",
            details: [
              "Connect all system components",
              "Ensure seamless data flow",
              "Test advanced features"
            ]
          },
          {
            name: "Professional Optimization",
            details: [
              "Optimize for conversion",
              "Enhance user experience",
              "Implement tracking and analytics"
            ]
          }
        ]
      },
      community: {
        description: "Join our community for advanced tutorials and professional resources:",
        benefits: [
          "Access to advanced implementation guides",
          "Professional support and feedback",
          "Regular updates on new features and techniques"
        ],
        joinLink: "https://learn.masss.ai/communities/groups/micro-saas-systems/home?invite=677bd299e40bf7ce408c0744"
      },
      nextSteps: [
        "Implement advanced features in your system",
        "Optimize your sales funnel",
        "Join the community for professional support"
      ],
      conclusion: "Master the advanced features and professional implementation techniques to create high-converting sales systems that deliver exceptional results."
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
          <TabsList className="grid w-full grid-cols-4 mb-8 gap-4 p-1 bg-white/5 backdrop-blur-sm rounded-xl">
            {VIDEOS.map((video) => (
              <TabsTrigger 
                key={video.id} 
                value={video.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 
                  data-[state=active]:text-white text-gray-400 rounded-lg
                  text-xs sm:text-sm md:text-base px-3 py-3 
                  whitespace-normal h-auto min-h-[50px] 
                  flex items-center justify-center text-center
                  transition-all duration-200
                  hover:text-white hover:bg-white/5"
              >
                {video.title.includes('.') 
                  ? `Video ${video.title.split('.')[0]}`
                  : video.title}
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