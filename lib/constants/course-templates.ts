export const courseTemplates = {
  basic: {
    name: "Basic Course",
    description: "A simple course structure with essential elements",
    preview: "basic-template.png",
    sections: [
      { type: "title", content: { title: "Welcome to the Course" } },
      { type: "video", content: { title: "Introduction Video" } },
      { type: "summary", content: { title: "Course Overview" } },
      { type: "action", content: { buttonText: "Start Learning" } }
    ]
  },
  professional: {
    name: "Professional Training",
    description: "Comprehensive training with advanced features",
    preview: "pro-template.png",
    sections: [
      { type: "title", content: { title: "Professional Training Series" } },
      { type: "video", content: { title: "Welcome Message" } },
      { type: "checklist", content: { title: "Pre-Training Checklist" } },
      { type: "resources", content: { title: "Training Materials" } },
      { type: "quiz", content: { title: "Knowledge Check" } }
    ]
  },
  masterclass: {
    name: "Expert Masterclass",
    description: "High-end masterclass with premium features",
    preview: "masterclass-template.png",
    sections: [
      { type: "title", content: { title: "Masterclass Series" } },
      { type: "video", content: { title: "Expert Introduction" } },
      { type: "steps", content: { title: "Implementation Steps" } },
      { type: "resources", content: { title: "Advanced Resources" } },
      { type: "feedback", content: { title: "Success Tracking" } }
    ]
  }
};