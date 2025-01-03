"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function OptinForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <Input
        type="text"
        placeholder="Your Name (Optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
      />
      <Input
        type="email"
        required
        placeholder="Your Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
      />
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
      >
        <span className="flex items-center gap-2">
          GET INSTANT ACCESS
          <ArrowRight size={18} />
        </span>
      </Button>
    </form>
  );
}