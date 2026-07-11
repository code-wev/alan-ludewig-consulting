import React from "react";
import { 
  X, User, Building2, Handshake, 
  Siren, Phone, Search, ListFilter, Asterisk, Pencil, Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface EmergencyContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEditContact?: () => void;
}

export function EmergencyContactsModal({ isOpen, onClose, onEditContact }: EmergencyContactsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/20 backdrop-blur-sm">
      <div 
        className="w-[1100px] max-w-full max-h-[90vh] bg-white rounded-[12px] shadow-lg border border-[#e3e6ec] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-bold text-brand-primary">Emergency Contacts</h2>
            <p className="text-[14px] text-brand-secondary mt-1">
              Maintain up-to-date emergency, site, contractor and client contact details for the RAMS document.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-secondary hover:text-brand-primary transition-colors mt-1"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 flex flex-col gap-8 overflow-y-auto flex-1 no-scrollbar">
          
          {/* Section 1: Priority Contacts */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <span className="font-black text-[18px] text-[#0f172a]">!</span>
              <h3 className="text-[16px] font-bold text-brand-primary">Priority Contacts</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              {/* Card 1 */}
              <div className="flex flex-col gap-4 p-4 rounded-[8px] border border-[#1e3a8a] bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider">SITE EMERGENCY</span>
                  <User className="size-4 text-[#1e3a8a]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[16px] font-bold text-[#1e293b]">James Wilson</span>
                  <span className="text-[14px] text-brand-secondary">Site Project Manager</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="size-4 text-[#1e3a8a]" />
                  <span className="text-[14px] text-[#1e293b] font-medium">+44 7700 900 123</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col gap-4 p-4 rounded-[8px] border border-[#1e3a8a] bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider">PRINCIPAL CONTRACTOR</span>
                  <Building2 className="size-4 text-[#1e3a8a]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[16px] font-bold text-[#1e293b]">Apex Construction</span>
                  <span className="text-[14px] text-brand-secondary">Head Office Dispatch</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="size-4 text-[#1e3a8a]" />
                  <span className="text-[14px] text-[#1e293b] font-medium">020 8123 4567</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col gap-4 p-4 rounded-[8px] border border-[#1e3a8a] bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider">CLIENT CONTACT</span>
                  <Handshake className="size-4 text-[#1e3a8a]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[16px] font-bold text-[#1e293b]">Sarah Jennings</span>
                  <span className="text-[14px] text-brand-secondary">Facilities Director</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="size-4 text-[#1e3a8a]" />
                  <span className="text-[14px] text-[#1e293b] font-medium">+44 7700 900 789</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col gap-4 p-4 rounded-[8px] border border-[#ef4444] bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#ef4444] uppercase tracking-wider">EMERGENCY SERVICES</span>
                  <Siren className="size-4 text-[#ef4444]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[16px] font-bold text-[#1e293b]">St. Mary&apos;s A&E</span>
                  <span className="text-[14px] text-brand-secondary">Nearest Hospital (2.4 miles)</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Asterisk className="size-4 text-[#ef4444]" />
                  <span className="text-[14px] font-bold text-[#ef4444]">999 / 111</span>
                </div>
              </div>
              
            </div>
          </div>

          {/* Section 2: Contact Directory */}
          <div className="flex flex-col rounded-[12px] bg-[#f8fafc] border border-[#e2e8f0] p-6 mt-4 gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-bold text-brand-primary">Contact Directory</h3>
              
              <div className="flex items-center gap-4">
                <div className="relative w-[280px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-brand-secondary" />
                  <input 
                    type="text" 
                    placeholder="Search contacts..."
                    className="w-full h-[36px] pl-9 pr-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-brand-primary bg-white focus:outline-none focus:border-brand-primary placeholder:text-brand-secondary/60"
                  />
                </div>
                <Button variant="outline" className="h-[36px] px-4 rounded-[6px] border-[#e3e6ec] text-brand-primary text-[13px] font-bold bg-white hover:bg-slate-50 flex items-center gap-2">
                  <ListFilter className="size-4" />
                  Filters
                </Button>
              </div>
            </div>
            
            <div className="w-full bg-white rounded-[8px] border border-[#e3e6ec] overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#dbeafe] text-[#1e3a8a] text-[12px] font-bold">
                  <tr>
                    <th className="py-3 px-4 w-[50px] text-center font-bold">
                      <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                    </th>
                    <th className="py-3 px-4 font-bold whitespace-nowrap">Contact Name</th>
                    <th className="py-3 px-4 font-bold whitespace-nowrap">Role</th>
                    <th className="py-3 px-4 font-bold whitespace-nowrap">Organisation</th>
                    <th className="py-3 px-4 font-bold whitespace-nowrap">Phone (Primary)</th>
                    <th className="py-3 px-4 font-bold whitespace-nowrap">Contact Type</th>
                    <th className="py-3 px-4 font-bold whitespace-nowrap">Primary</th>
                    <th className="py-3 px-4 font-bold text-center whitespace-nowrap">Action</th>
                  </tr>
                </thead>
                <tbody className="text-[13px] text-brand-primary">
                  {/* Row 1 */}
                  <tr className="border-t border-[#e3e6ec] hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center align-middle">
                      <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <div className="flex flex-col min-w-[150px]">
                        <span className="font-bold text-[#1e293b]">Robert Fletcher</span>
                        <span className="text-[12px] text-brand-secondary">r.fletcher@apex.com</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-brand-secondary align-middle min-w-[120px]">Site Supervisor</td>
                    <td className="py-4 px-4 text-brand-secondary align-middle min-w-[140px]">Apex Construction</td>
                    <td className="py-4 px-4 text-brand-secondary align-middle min-w-[140px]">+44 7700 900 445</td>
                    <td className="py-4 px-4 align-middle min-w-[120px]">
                      <span className="inline-flex items-center px-2 py-1 rounded-[4px] bg-[#1e293b] text-white text-[11px] font-bold truncate max-w-full">
                        Supervisor
                      </span>
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <Switch />
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <div className="flex items-center justify-center gap-3">
                        <button 
                          onClick={() => onEditContact && onEditContact()}
                          className="text-[#22c55e] hover:text-[#16a34a] transition-colors"
                        >
                          <Pencil className="size-[16px]" />
                        </button>
                        <button className="text-red-500 hover:text-red-600 transition-colors">
                          <Trash2 className="size-[16px]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-t border-[#e3e6ec] hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center align-middle">
                      <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <div className="flex flex-col min-w-[150px]">
                        <span className="font-bold text-[#1e293b]">Amanda Clarke</span>
                        <span className="text-[12px] text-brand-secondary">a.clarke@safetyfirst.co.uk</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-brand-secondary align-middle min-w-[120px]">First Aider</td>
                    <td className="py-4 px-4 text-brand-secondary align-middle min-w-[140px]">Safety First Ltd</td>
                    <td className="py-4 px-4 text-brand-secondary align-middle min-w-[140px]">+44 7700 900 445</td>
                    <td className="py-4 px-4 align-middle min-w-[120px]">
                      <span className="inline-flex items-center px-2 py-1 rounded-[4px] bg-[#10b981] text-white text-[11px] font-bold truncate max-w-full">
                        First Aider
                      </span>
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <Switch defaultChecked />
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <div className="flex items-center justify-center gap-3">
                        <button 
                          onClick={() => onEditContact && onEditContact()}
                          className="text-[#22c55e] hover:text-[#16a34a] transition-colors"
                        >
                          <Pencil className="size-[16px]" />
                        </button>
                        <button className="text-red-500 hover:text-red-600 transition-colors">
                          <Trash2 className="size-[16px]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-t border-[#e3e6ec] hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center align-middle">
                      <input type="checkbox" className="rounded-[4px] border-[#c4cce0] text-brand-primary focus:ring-brand-primary" />
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <div className="flex flex-col min-w-[150px]">
                        <span className="font-bold text-[#1e293b]">Local Utility Board</span>
                        <span className="text-[12px] text-brand-secondary">emergency@gasnetwork.com</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-brand-secondary align-middle min-w-[120px]">Gas Emergency Line</td>
                    <td className="py-4 px-4 text-brand-secondary align-middle min-w-[140px]">National Grid</td>
                    <td className="py-4 px-4 text-brand-secondary align-middle min-w-[140px]">+44 7700 900 445</td>
                    <td className="py-4 px-4 align-middle min-w-[120px]">
                      <span className="inline-flex items-center px-2 py-1 rounded-[4px] bg-[#fef08a] text-[#854d0e] text-[11px] font-bold truncate max-w-full">
                        Utility
                      </span>
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <Switch />
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <div className="flex items-center justify-center gap-3">
                        <button 
                          onClick={() => onEditContact && onEditContact()}
                          className="text-[#22c55e] hover:text-[#16a34a] transition-colors"
                        >
                          <Pencil className="size-[16px]" />
                        </button>
                        <button className="text-red-500 hover:text-red-600 transition-colors">
                          <Trash2 className="size-[16px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="text-[13px] font-bold text-brand-primary hover:text-brand-secondary transition-colors w-full text-center mt-2">
              View All 12 Contacts
            </button>
          </div>
          
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 py-5 border-t border-[#e3e6ec] bg-white rounded-b-[12px]">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
            >
              Save Draft
            </Button>
            <Button 
              className="h-[42px] px-6 rounded-[6px] bg-[#0d1b2a] text-white font-bold text-[14px] hover:bg-black"
            >
              Save & Close
            </Button>
          </div>
          
          <Button 
            variant="outline" 
            className="h-[42px] px-6 rounded-[6px] border-[#1e293b] text-[#1e293b] font-bold text-[14px] hover:bg-slate-50"
          >
            Add Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
