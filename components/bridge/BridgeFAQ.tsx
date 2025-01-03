"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface BridgeFAQProps {
  productName: string;
  faqs: FAQ[];
}

export function BridgeFAQ({ productName, faqs }: BridgeFAQProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Common Questions About {productName}
        </h3>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-white hover:text-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}