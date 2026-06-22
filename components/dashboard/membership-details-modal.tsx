import React from "react";
import { X, Check, ChevronDown } from "lucide-react";

interface MembershipDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MembershipDetailsModal({ isOpen, onClose }: MembershipDetailsModalProps) {
  if (!isOpen) return null;

  const benefits = [
    {
      title: "Document Library Access",
      description: "Full access to 500+ H&S templates."
    },
    {
      title: "Priority Support",
      description: "Direct line to our H&S compliance specialists."
    },
    {
      title: "RAMS Builder Usage",
      description: "Unlimited Risk Assessments and Method Statements."
    },
    {
      title: "Priority Support",
      description: "Direct line to our H&S compliance specialists."
    }
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

        <h2 className="text-xl font-bold text-[#001137]">Membership Summary</h2>

        <div className="flex flex-col gap-8">
          
          <div className="bg-[#F3F5F8] border border-[#E3E6EC] rounded-lg p-6 flex flex-col gap-2">
            <h3 className="font-bold text-sm text-[#5A6886] mb-2">Current Plan Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#5A6886]">Plan Name</span>
                <span className="font-medium text-sm text-[#132651]">Comply Pro</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#5A6886]">Renewal Date</span>
                <span className="font-medium text-sm text-[#132651]">28 June 2026</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#5A6886]">Billing Cycle</span>
                <span className="font-medium text-sm text-[#132651]">Monthly</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#5A6886]">Status</span>
                <div className="bg-[#00BC7D] text-white px-2 py-0.5 rounded-md text-xs w-fit">
                  Active
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#132651]">Default Category</label>
              <div className="flex items-center justify-between border border-[#E3E6EC] rounded-md px-4 py-3">
                <span className="text-sm text-[#132651]">RAMS</span>
                <ChevronDown className="w-4 h-4 text-[#132651]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-[#132651] mb-2">Plan Benefits</h3>
            <div className="flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 bg-[#E0E7FF] p-0.5 rounded text-[#4F46E5]">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#132651]">{benefit.title}</span>
                    <span className="text-xs text-[#5A6886]">{benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="flex items-center gap-3 mt-2">
          <button 
            onClick={onClose}
            className="border border-[#132651] text-[#132651] font-bold text-xs px-4 py-2.5 rounded-md hover:bg-gray-50 transition-colors"
          >
            Compare Plans
          </button>
          <button 
            onClick={onClose}
            className="bg-[#132651] text-white font-bold text-xs px-4 py-2.5 rounded-md hover:bg-[#132651]/90 transition-colors"
          >
            Manage Subscription
          </button>
        </div>
      </div>
    </div>
  );
}
