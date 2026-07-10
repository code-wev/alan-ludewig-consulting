import React from "react";
import { X, CheckCircle2, Eye, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificatePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  record: any; // We can type this better, but any for mock data is okay right now.
}

export function CertificatePreviewModal({
  isOpen,
  onClose,
  record,
}: CertificatePreviewModalProps) {
  if (!isOpen || !record) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-preview-title"
        className="no-scrollbar max-h-[95vh] w-full max-w-[1150px] overflow-y-auto rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white p-6 shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-8 h-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-6 items-center justify-center rounded-full bg-brand-primary text-white">
                {/* Custom badge icon resembling the figma, using a generic star or award like icon */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h2
                id="certificate-preview-title"
                className="text-[20px] font-bold text-brand-primary"
              >
                Training Certificate
              </h2>
              <div className="flex items-center gap-1.5 rounded-[12px] border border-[#bbf7d0] bg-[#f0fdf4] px-2.5 py-1">
                <CheckCircle2 className="size-3.5 text-[#15803d]" />
                <span className="text-[12px] text-[#15803d]">Valid</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-[#f3f5f8] hover:text-brand-primary"
              aria-label="Close certificate preview"
            >
              <X className="size-4.5" />
            </button>
          </div>

          {/* Split Layout Content */}
          <div className="flex flex-col xl:flex-row overflow-hidden rounded-[12px] border border-[#e3e6ec] min-h-[700px]">
            {/* Left: Certificate Preview (approx 70%) */}
            <div className="flex items-center justify-center bg-[#f3f5f8] p-8 xl:w-[738px] xl:border-r xl:border-[#e3e6ec]">
              {/* Actual Certificate Document styling */}
              <div className="relative flex w-full max-w-[650px] flex-col items-center rounded-[12px] border border-[#e3e6ec] bg-white p-12 shadow-[0px_4px_10px_rgba(0,17,55,0.08)]">
                {/* Inner decorative borders */}
                <div className="pointer-events-none absolute inset-4 rounded-[6px] border border-[#e3e6ec]" />
                <div className="pointer-events-none absolute inset-6 rounded-[6px] border-2 border-[#e3e6ec]" />
                
                {/* Certificate Header */}
                <div className="flex w-full items-start justify-between pb-12 z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[20px] font-bold text-brand-primary">AL Consulting</span>
                    <span className="text-[12px] text-brand-secondary">Safety portal</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[12px] text-brand-secondary">Certificate #</span>
                    <span className="text-[14px] font-bold text-brand-primary">ALC-2024-8842-X</span>
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="flex w-full flex-col items-center justify-center z-10 flex-1">
                  <h3 className="mb-6 text-[28px] font-bold text-brand-primary text-center">
                    CERTIFICATE OF COMPLETION
                  </h3>
                  <p className="mb-4 text-[16px] text-brand-secondary">
                    This is to certify that
                  </p>
                  <div className="mb-4 border-b-2 border-[#e3e6ec] pb-2">
                    <h4 className="text-[40px] font-bold text-brand-primary">
                      Sarah Jenkins
                    </h4>
                  </div>
                  <p className="mb-6 text-[16px] text-brand-secondary text-center">
                    has successfully completed the comprehensive training course
                  </p>
                  <div className="rounded-[6px] border border-[#e3e6ec] bg-[#f3f5f8] px-6 py-3 mb-12">
                    <span className="text-[20px] font-bold text-brand-primary text-center">
                      Advanced Site Safety & Risk Assessment Protocol
                    </span>
                  </div>

                  {/* Certificate Footer / Signatures */}
                  <div className="flex w-full items-end justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex size-[80px] items-center justify-center border border-[#c5c6d0] bg-white p-1">
                        {/* Placeholder QR */}
                        <div className="size-full bg-gray-200">
                           {/* Add a dotted pattern to simulate QR code */}
                           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="qr-dots" width="4" height="4" patternUnits="userSpaceOnUse">
                                <rect width="2" height="2" fill="#5a6886" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#qr-dots)" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[12px] text-brand-primary">VERIFY AUTHENTICITY</span>
                        <p className="text-[10px] text-brand-secondary leading-tight">
                          Scan to verify this digital<br/>
                          record on the AL<br/>
                          Consulting Safety Portal.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center w-[192px]">
                      <div className="h-[48px] w-full flex items-center justify-center pb-2 opacity-50">
                        {/* Fake signature graphic */}
                        <svg viewBox="0 0 100 30" className="w-[100px] h-full" fill="none" stroke="#132651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10,20 C15,10 25,5 30,15 C35,25 45,30 50,20 C55,10 65,5 70,15 C75,25 85,30 90,20" />
                        </svg>
                      </div>
                      <div className="border-t border-[#001137] pt-2 w-full flex flex-col items-center">
                        <span className="text-[14px] font-bold text-brand-primary">Alan Ludewig</span>
                        <span className="text-[10px] text-brand-secondary uppercase text-center mt-1">Managing Director, AL Consulting</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Very Bottom Dates */}
                <div className="flex w-full items-end justify-between mt-12 z-10">
                   <div className="flex flex-col gap-1">
                      <span className="text-[12px] text-brand-secondary">Completion Date</span>
                      <span className="text-[14px] font-bold text-brand-primary">October 24, 2023</span>
                   </div>
                   <div className="flex flex-col items-end gap-1">
                      <span className="text-[12px] text-brand-secondary">Valid Until</span>
                      <span className="text-[14px] font-bold text-brand-primary">October 23, 2025</span>
                   </div>
                </div>

              </div>
            </div>

            {/* Right: Details Panel (approx 30%) */}
            <div className="flex flex-1 flex-col gap-8 bg-white p-8">
              
              <div className="flex flex-col gap-6">
                <h3 className="text-[16px] font-bold text-brand-primary">Credential Details</h3>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] text-brand-secondary">Learner Name</span>
                    <span className="text-[14px] text-brand-primary">Sarah Jenkins</span>
                    <span className="text-[12px] text-brand-secondary">ID: 88-1204</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] text-brand-secondary">Reference Number</span>
                    <span className="text-[14px] text-brand-primary">ALC-2024-8842-X</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[12px] text-brand-secondary">Completed</span>
                      <span className="text-[14px] text-brand-primary">24 Oct 2023</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[12px] text-brand-secondary">Expires</span>
                      <span className="text-[14px] text-brand-primary">23 Oct 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] font-bold text-brand-primary">Assessment Score</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <div className="h-2 flex-1 rounded-full bg-[#e5e7eb] overflow-hidden">
                      <div className="h-full bg-brand-primary" style={{ width: "94%" }} />
                    </div>
                    <span className="text-[14px] font-bold text-brand-primary">94%</span>
                  </div>
                  <span className="text-[12px] text-[#15803d]">Exceeds standard requirements</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] font-bold text-brand-primary">Metadata</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-brand-secondary">Course ID</span>
                    <span className="text-[12px] text-brand-primary text-right">SA-RSS-02</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-brand-secondary">Total Duration</span>
                    <span className="text-[12px] text-brand-primary text-right">6.5 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-brand-secondary">Accreditation</span>
                    <span className="text-[12px] text-brand-primary text-right">HSE Standard v4.0</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-auto pt-8">
                <Button className="h-10 w-full rounded-[6px] bg-brand-primary text-[14px] font-bold text-white hover:bg-[#0d1b3a]">
                  Download PDF
                </Button>
                <Button variant="outline" className="h-10 w-full rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50 flex items-center justify-center gap-2">
                  <Eye className="size-4" />
                  View Course
                </Button>
                <Button variant="outline" className="h-10 w-full rounded-[6px] border-[#e3e6ec] bg-white text-[14px] font-bold text-brand-primary hover:bg-gray-50 flex items-center justify-center gap-2">
                  <Send className="size-4" />
                  Share Credential
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
