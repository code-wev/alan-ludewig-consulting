import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Recycle, Hand, BriefcaseMedical, FireExtinguisher,
  MapPin, Users, Hospital, ChevronDown, FileText,
  Pencil, Map
} from "lucide-react";
import Image from "next/image";
import { WasteEnvironmentModal } from "./waste-environment-modal";
import { HoldPointsModal } from "./hold-points-modal";
import { FirstAidArrangementsModal } from "./first-aid-arrangements-modal";
import { FireArrangementsModal } from "./fire-arrangements-modal";
import { SiteSpecificArrangementsModal } from "./site-specific-arrangements-modal";
import { EmergencyContactsModal } from "./emergency-contacts-modal";
import { SitePlanModal } from "./site-plan-modal";
import { NearestHospitalModal } from "./nearest-hospital-modal";
import { EmergencyMapHubModal } from "./emergency-map-hub-modal";

interface EnvEmergencyStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function EnvEmergencyStep({ onPrevious, onNext }: EnvEmergencyStepProps) {
  const [isWasteModalOpen, setIsWasteModalOpen] = useState(false);
  const [isHoldPointsModalOpen, setIsHoldPointsModalOpen] = useState(false);
  const [isFirstAidModalOpen, setIsFirstAidModalOpen] = useState(false);
  const [isFireModalOpen, setIsFireModalOpen] = useState(false);
  const [isSiteSpecificModalOpen, setIsSiteSpecificModalOpen] = useState(false);
  const [isEmergencyContactsModalOpen, setIsEmergencyContactsModalOpen] = useState(false);
  const [isSitePlanModalOpen, setIsSitePlanModalOpen] = useState(false);
  const [isNearestHospitalModalOpen, setIsNearestHospitalModalOpen] = useState(false);
  const [isMapHubModalOpen, setIsMapHubModalOpen] = useState(false);

  const cards = [
    {
      icon: <Recycle className="size-5 text-[#1e3a8a]" />,
      title: "Waste & Environment",
      description: "Disposal methods, spill containment, and environmental protection measures.",
      hasDropdown: true,
    },
    {
      icon: <Hand className="size-5 text-[#1e3a8a]" />,
      title: "Hold Points",
      description: "Specific stages where work must stop for inspection or formal approval.",
      hasDropdown: false,
    },
    {
      icon: <BriefcaseMedical className="size-5 text-[#1e3a8a]" />,
      title: "First Aid Arrangements",
      description: "Location of kits, designated first aiders, and medical equipment access.",
      hasDropdown: true,
    },
    {
      icon: <FireExtinguisher className="size-5 text-[#1e3a8a]" />,
      title: "Fire Arrangements",
      description: "Evacuation routes, assembly points, and firefighting equipment locations.",
      hasDropdown: true,
    },
    {
      icon: <MapPin className="size-5 text-[#1e3a8a]" />,
      title: "Site Specific Arrangements",
      description: "Unique site hazards, access restrictions, or specialized welfare facilities.",
      hasDropdown: true,
    },
    {
      icon: <Users className="size-5 text-[#1e3a8a]" />,
      title: "Emergency Contacts",
      description: "Critical Personnel, client representatives, and emergency services numbers.",
      hasDropdown: false,
    },
    {
      icon: <Hospital className="size-5 text-[#1e3a8a]" />,
      title: "Nearest Hospital / A&E",
      description: "Directions to the nearest emergency medical facility with trauma support.",
      hasDropdown: false,
    },
  ];

  return (
    <div className="flex flex-col w-full text-brand-primary">
      
      {/* Grid of Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-sm">
            
            {/* Top Row: Icon & Badge */}
            <div className="flex items-start justify-between">
              <div className="flex items-center justify-center size-10 rounded-[8px] bg-[#eef2ff]">
                {card.icon}
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#fef2f2] rounded-full">
                <span className="size-1.5 rounded-full bg-[#ef4444]"></span>
                <span className="text-[11px] font-bold text-[#ef4444] uppercase tracking-wider">Required</span>
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-[16px] font-bold text-[#1e293b] mt-4">{card.title}</h3>
            <p className="text-[13px] text-brand-secondary mt-1 min-h-[40px]">
              {card.description}
            </p>
            
            {/* Optional Dropdown */}
            {card.hasDropdown ? (
              <div className="relative mt-4">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary pointer-events-none">
                  <FileText className="size-4" />
                </div>
                <select className="w-full h-10 pl-10 pr-10 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white appearance-none focus:outline-none focus:border-brand-primary">
                  <option>Select Standard Statement</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary pointer-events-none" />
              </div>
            ) : (
              <div className="h-14 mt-4"></div> /* Placeholder for alignment */
            )}
            
            {/* Footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#e3e6ec]">
              <div className="flex flex-col">
                <span className="text-[11px] text-brand-secondary">Records</span>
                <span className="text-[13px] font-bold text-brand-primary">0 Items</span>
              </div>
              <button 
                onClick={() => {
                  if (index === 0) setIsWasteModalOpen(true);
                  if (index === 1) setIsHoldPointsModalOpen(true);
                  if (index === 2) setIsFirstAidModalOpen(true);
                  if (index === 3) setIsFireModalOpen(true);
                  if (index === 4) setIsSiteSpecificModalOpen(true);
                  if (index === 5) setIsEmergencyContactsModalOpen(true);
                  if (index === 6) setIsNearestHospitalModalOpen(true);
                }}
                className="text-[#22c55e] hover:text-[#16a34a] transition-colors"
              >
                <Pencil className="size-[18px]" />
              </button>
            </div>
            
          </div>
        ))}
      </div>
      
      {/* Map Hub Banner */}
      <div className="w-full h-[180px] rounded-[12px] overflow-hidden relative mt-8 shadow-sm border border-[#e3e6ec]">
        <Image 
          src="/images/site-context.png" 
          alt="Map context" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1b2a]/95 via-[#0d1b2a]/60 to-transparent"></div>
        
        <div className="absolute inset-0 p-8 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="size-4" />
              <span className="text-[12px] font-bold tracking-wide">Site Context</span>
            </div>
            <h3 className="text-[20px] font-bold text-white mt-1">Integrated Emergency Mapping</h3>
            <p className="text-[14px] text-white/80 max-w-[400px]">
              Automatically plot emergency routes and nearest facilities based on site coordinates.
            </p>
          </div>
          
          <Button 
            onClick={() => setIsMapHubModalOpen(true)}
            className="bg-white text-[#1e293b] hover:bg-slate-100 font-bold text-[13px] h-[40px] px-4 rounded-[6px] flex items-center gap-2"
          >
            <Map className="size-4" />
            Open Map Hub
          </Button>
        </div>
      </div>
      
      {/* Navigation Footer */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#e3e6ec]">
        <Button 
          variant="outline" 
          className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
          onClick={onPrevious}
        >
          Save Draft
        </Button>
        <Button 
          className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
          onClick={onNext}
        >
          Next: Risk Assessment
        </Button>
      </div>
      
      <WasteEnvironmentModal 
        isOpen={isWasteModalOpen} 
        onClose={() => setIsWasteModalOpen(false)} 
      />

      <HoldPointsModal 
        isOpen={isHoldPointsModalOpen} 
        onClose={() => setIsHoldPointsModalOpen(false)} 
      />

      <FirstAidArrangementsModal 
        isOpen={isFirstAidModalOpen} 
        onClose={() => setIsFirstAidModalOpen(false)} 
      />

      <FireArrangementsModal 
        isOpen={isFireModalOpen} 
        onClose={() => setIsFireModalOpen(false)} 
      />

      <SiteSpecificArrangementsModal 
        isOpen={isSiteSpecificModalOpen} 
        onClose={() => setIsSiteSpecificModalOpen(false)} 
      />

      <EmergencyContactsModal 
        isOpen={isEmergencyContactsModalOpen} 
        onClose={() => setIsEmergencyContactsModalOpen(false)} 
        onEditContact={() => {
          setIsEmergencyContactsModalOpen(false);
          setIsSitePlanModalOpen(true);
        }}
      />

      <SitePlanModal 
        isOpen={isSitePlanModalOpen} 
        onClose={() => setIsSitePlanModalOpen(false)} 
      />

      <NearestHospitalModal 
        isOpen={isNearestHospitalModalOpen} 
        onClose={() => setIsNearestHospitalModalOpen(false)} 
      />

      <EmergencyMapHubModal
        isOpen={isMapHubModalOpen}
        onClose={() => setIsMapHubModalOpen(false)}
      />
      
    </div>
  );
}
