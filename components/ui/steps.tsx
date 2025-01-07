'use client'

interface StepsProps {
  currentStep: number;
  steps: string[];
}

export function Steps({ currentStep, steps }: StepsProps) {
  return (
    <div className="flex items-center space-x-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`rounded-full w-8 h-8 flex items-center justify-center ${
              index <= currentStep
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-12 mx-2 ${
                index < currentStep ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
} 