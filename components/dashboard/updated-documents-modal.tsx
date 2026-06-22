import React from "react";
import { X, FileText, Eye, Download } from "lucide-react";

interface UpdatedDocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpdatedDocumentsModal({ isOpen, onClose }: UpdatedDocumentsModalProps) {
  if (!isOpen) return null;

  const documents = [
    {
      title: "Fire Safety Procedure",
      type: "PDF",
      lastUpdated: "13 May 2026",
      badgeText: "New",
      badgeColor: "bg-[#132651]",
    },
    {
      title: "Manual Handling Policy",
      type: "PDF",
      lastUpdated: "13 May 2026",
      badgeText: "Updated",
      badgeColor: "bg-[#00BC7D]",
    },
    {
      title: "RAMS Template - Working at Height",
      type: "ZIP",
      lastUpdated: "13 May 2026",
      badgeText: "Updated",
      badgeColor: "bg-[#00BC7D]",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-6 flex flex-col gap-6 relative my-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-[#5A6886]" />
        </button>

        <h2 className="text-xl font-bold text-[#001137]">Updated Documents</h2>

        <div className="flex flex-col gap-4">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row p-4 border border-[#D0D4DC] rounded-xl justify-between items-start md:items-center gap-4"
            >
              <div className="flex items-center gap-4 relative w-full md:w-auto">
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-[#132651]" />
                </div>
                <div className="flex flex-col h-[49px] justify-between py-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-base text-[#132651] line-clamp-1">{doc.title}</h3>
                    <div className={`${doc.badgeColor} text-white px-2.5 py-0.5 rounded-md text-xs whitespace-nowrap`}>
                      {doc.badgeText}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#5A6886]">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>Last updated: {doc.lastUpdated}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 self-end md:self-auto">
                <button className="flex items-center justify-center w-[34px] h-[34px] md:w-auto md:px-4 md:h-[34px] border border-[#132651] rounded-md hover:bg-gray-50 transition-colors">
                  <Eye className="w-4 h-4 text-[#132651] md:mr-2" />
                  <span className="hidden md:inline font-bold text-xs text-[#132651]">View</span>
                </button>
                <button className="flex items-center justify-center w-[34px] h-[34px] md:w-auto md:px-4 md:h-[34px] bg-[#132651] rounded-md hover:bg-[#132651]/90 transition-colors">
                  <Download className="w-4 h-4 text-white md:mr-2" />
                  <span className="hidden md:inline font-bold text-xs text-white">Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-2">
          <button 
            onClick={onClose}
            className="bg-[#132651] text-white font-bold text-xs px-4 py-2.5 rounded-md hover:bg-[#132651]/90 transition-colors"
          >
            Go to Document Library
          </button>
        </div>
      </div>
    </div>
  );
}
