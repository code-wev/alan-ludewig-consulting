"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import { UploadLogoModal } from "./upload-logo-modal";

export function WelcomeBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full p-6 bg-gradient-to-r from-[#132651] to-[#5A6886] rounded-xl items-center justify-between gap-6">
        <div className="flex flex-col items-start gap-1 max-w-2xl text-white">
          <h1 className="font-bold text-2xl md:text-[28px] leading-tight text-white font-sans">
            Welcome back, Alan
          </h1>
          <p className="text-lg text-[#F7F8FA] font-sans">
            Manage your health & safety documents, create RAMS, access training, and book support services from one place.
          </p>
        </div>

        <div 
          className="flex bg-white rounded-lg p-4 items-center w-[292px] shrink-0 shadow-sm shadow-black/10 relative cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="bg-[#F3F5F8] p-3 rounded-md flex items-center justify-center">
            <Upload className="w-6 h-6 text-[#132651]" />
          </div>
          <div className="ml-4 flex flex-col">
            <span className="font-bold text-sm text-[#132651]">Add your company logo</span>
            <span className="text-[10px] text-[#5A6886]">to generated documents</span>
          </div>
        </div>
      </div>

      <UploadLogoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
