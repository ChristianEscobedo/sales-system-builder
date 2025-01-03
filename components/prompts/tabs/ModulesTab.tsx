"use client";

import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import type { PromptData } from "@/types/prompt";

interface ModulesTabProps {
  data: PromptData;
  onChange: Dispatch<SetStateAction<PromptData>>;
}

export function ModulesTab({ data, onChange }: ModulesTabProps) {
  const addModule = () => {
    onChange(prev => ({
      ...prev,
      modules: [...prev.modules, ""]
    }));
  };

  const updateModule = (index: number, value: string) => {
    onChange(prev => ({
      ...prev,
      modules: prev.modules.map((m, i) => i === index ? value : m)
    }));
  };

  const removeModule = (index: number) => {
    onChange(prev => ({
      ...prev,
      modules: prev.modules.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-4">
      {data.modules.map((module, index) => (
        <div key={index} className="flex gap-2">
          <Input
            value={module}
            onChange={(e) => updateModule(index, e.target.value)}
            className="bg-white/10 border-purple-500/30 text-white"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeModule(index)}
            className="text-red-400 hover:text-red-300"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      ))}
      <Button
        variant="ghost"
        onClick={addModule}
        className="text-purple-400 hover:text-purple-300"
      >
        <Plus size={16} className="mr-2" />
        Add Module
      </Button>
    </div>
  );
} 