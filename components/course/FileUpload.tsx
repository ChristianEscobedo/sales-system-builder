"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, X, FileText, Video } from "lucide-react";

interface FileUploadProps {
  accept: string;
  maxSize?: number;
  onUpload: (file: File) => void;
  type: "video" | "resource";
}

export function FileUpload({ accept, maxSize = 100 * 1024 * 1024, onUpload, type }: FileUploadProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.size > maxSize) {
      setError("File is too large. Maximum size is 100MB.");
      return;
    }

    setIsUploading(true);
    setError(null);

    // Simulate file upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        onUpload(file);
      }
    }, 500);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-colors
          ${isDragging ? "border-blue-500 bg-blue-500/10" : "border-gray-600 hover:border-blue-500/50"}
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-2">
          {type === "video" ? (
            <Video className="w-8 h-8 text-gray-400" />
          ) : (
            <FileText className="w-8 h-8 text-gray-400" />
          )}
          {isDragging ? (
            <p className="text-blue-400">Drop the file here</p>
          ) : (
            <>
              <p className="text-gray-300">
                Drag & drop your {type} here, or <span className="text-blue-400">browse</span>
              </p>
              <p className="text-sm text-gray-500">
                {type === "video" ? "MP4, WebM up to 100MB" : "PDF, DOC, XLSX up to 100MB"}
              </p>
            </>
          )}
        </div>
      </div>

      {isUploading && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Uploading...</span>
            <span className="text-gray-400">{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg flex items-center gap-2">
          <X size={16} />
          {error}
        </div>
      )}
    </div>
  );
}