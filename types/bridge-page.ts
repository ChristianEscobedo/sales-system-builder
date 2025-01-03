// Add video section types to BridgePageConfig
export interface BridgePageConfig {
  // ... existing types ...
  video: {
    url: string;
    thumbnail: string;
    title: string;
    duration: string;
    previewDuration: string;
  };
  videoCta: {
    text: string;
    subtext: string;
  };
  // ... rest of existing types ...
}