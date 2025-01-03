"use client";

interface MainContentProps {
  title?: string;
  description?: string;
  features?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}

export function MainContent({ title, description, features }: MainContentProps) {
  return (
    <div className="space-y-8">
      {/* Main Title Section */}
      {(title || description) && (
        <div className="text-center space-y-4">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          )}
          {description && (
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      )}

      {/* Features Grid */}
      {features && features.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6">
              {feature.icon && (
                <div className="mb-4">{feature.icon}</div>
              )}
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 