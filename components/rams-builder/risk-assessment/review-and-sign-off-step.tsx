import React from 'react';
import {
  Check,
  Edit2,
  ChevronDown,
  FileText,
  AlertTriangle,
  Grid,
  Shield,
  Image as ImageIcon,
  Info,
  CheckSquare,
  Square,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviewAndSignOffStepProps {
  onSubmitForReview: () => void;
}

export function ReviewAndSignOffStep({ onSubmitForReview }: ReviewAndSignOffStepProps) {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-12 gap-6 items-start'>
      {/* Left Column */}
      <div className='xl:col-span-8 flex flex-col gap-6'>
        {/* Assessment Readiness */}
        <div className='bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'>
          <div className='flex items-center justify-between mb-5'>
            <h3 className='text-[16px] font-bold text-[#132651]'>Assessment Readiness</h3>
            <span className='px-3 py-1 bg-[#eef4ff] text-[#3b82f6] text-[11px] font-bold rounded-full'>
              All field complete
            </span>
          </div>
          <div className='flex flex-wrap gap-3'>
            <div className='flex items-center gap-1.5 px-3 py-1.5 bg-[#ecfdf5] border border-[#a7f3d0] rounded-[6px] text-[#10b981] text-[12px] font-bold'>
              <Check className='size-3.5' strokeWidth={3} /> Details
            </div>
            <div className='flex items-center gap-1.5 px-3 py-1.5 bg-[#ecfdf5] border border-[#a7f3d0] rounded-[6px] text-[#10b981] text-[12px] font-bold'>
              <Check className='size-3.5' strokeWidth={3} /> Hazards
            </div>
            <div className='flex items-center gap-1.5 px-3 py-1.5 bg-[#ecfdf5] border border-[#a7f3d0] rounded-[6px] text-[#10b981] text-[12px] font-bold'>
              <Check className='size-3.5' strokeWidth={3} /> Matrix
            </div>
            <div className='flex items-center gap-1.5 px-3 py-1.5 bg-[#ecfdf5] border border-[#a7f3d0] rounded-[6px] text-[#10b981] text-[12px] font-bold'>
              <Check className='size-3.5' strokeWidth={3} /> Controls
            </div>
            <div className='flex items-center gap-1.5 px-3 py-1.5 bg-[#ecfdf5] border border-[#a7f3d0] rounded-[6px] text-[#10b981] text-[12px] font-bold'>
              <Check className='size-3.5' strokeWidth={3} /> Images
            </div>
            <div className='flex items-center gap-1.5 px-3 py-1.5 bg-[#f1f5f9] border border-[#e2e8f0] rounded-[6px] text-[#64748b] text-[12px] font-bold ml-auto'>
              Sign-Off (Pending)
            </div>
          </div>
        </div>

        {/* Review Assessment Content */}
        <div className='bg-white rounded-[12px] border border-[#e3e6ec] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden'>
          <div className='px-6 py-5 border-b border-[#e3e6ec]'>
            <h3 className='text-[16px] font-bold text-[#132651]'>Review Assessment Content</h3>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center justify-between p-5 border-b border-[#e3e6ec] hover:bg-[#f9fafc]'>
              <div className='flex items-start gap-4'>
                <FileText className='size-5 text-[#5a6886] mt-0.5' />
                <div>
                  <p className='text-[14px] font-bold text-[#132651]'>Details</p>
                  <p className='text-[12px] text-[#5a6886] mt-0.5'>
                    Structural Steel Inspection - Phase 2
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <span className='px-2.5 py-1 bg-[#ecfdf5] text-[#10b981] text-[10px] font-bold tracking-wider rounded'>
                  COMPLETE
                </span>
                <button className='text-[#10b981]'>
                  <Edit2 className='size-4' />
                </button>
                <button className='text-[#95a0b6]'>
                  <ChevronDown className='size-5' />
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between p-5 border-b border-[#e3e6ec] hover:bg-[#f9fafc]'>
              <div className='flex items-start gap-4'>
                <AlertTriangle className='size-5 text-[#5a6886] mt-0.5' />
                <div>
                  <p className='text-[14px] font-bold text-[#132651]'>Hazards</p>
                  <p className='text-[12px] text-[#5a6886] mt-0.5'>12 identified hazards handled</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <span className='px-2.5 py-1 bg-[#ecfdf5] text-[#10b981] text-[10px] font-bold tracking-wider rounded'>
                  COMPLETE
                </span>
                <button className='text-[#10b981]'>
                  <Edit2 className='size-4' />
                </button>
                <button className='text-[#95a0b6]'>
                  <ChevronDown className='size-5' />
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between p-5 border-b border-[#e3e6ec] hover:bg-[#f9fafc]'>
              <div className='flex items-start gap-4'>
                <Grid className='size-5 text-[#5a6886] mt-0.5' />
                <div>
                  <p className='text-[14px] font-bold text-[#132651]'>Risk Matrix</p>
                  <p className='text-[12px] text-[#5a6886] mt-0.5'>Residual spread reduced to 0</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <span className='px-2.5 py-1 bg-[#ecfdf5] text-[#10b981] text-[10px] font-bold tracking-wider rounded'>
                  COMPLETE
                </span>
                <button className='text-[#10b981]'>
                  <Edit2 className='size-4' />
                </button>
                <button className='text-[#95a0b6]'>
                  <ChevronDown className='size-5' />
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between p-5 border-b border-[#e3e6ec] hover:bg-[#f9fafc]'>
              <div className='flex items-start gap-4'>
                <Shield className='size-5 text-[#5a6886] mt-0.5' />
                <div>
                  <p className='text-[14px] font-bold text-[#132651]'>Controls</p>
                  <p className='text-[12px] text-[#5a6886] mt-0.5'>12 added control measures</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <span className='px-2.5 py-1 bg-[#ecfdf5] text-[#10b981] text-[10px] font-bold tracking-wider rounded'>
                  COMPLETE
                </span>
                <button className='text-[#10b981]'>
                  <Edit2 className='size-4' />
                </button>
                <button className='text-[#95a0b6]'>
                  <ChevronDown className='size-5' />
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between p-5 hover:bg-[#f9fafc]'>
              <div className='flex items-start gap-4'>
                <ImageIcon className='size-5 text-[#5a6886] mt-0.5' />
                <div>
                  <p className='text-[14px] font-bold text-[#132651]'>Site Images</p>
                  <p className='text-[12px] text-[#5a6886] mt-0.5'>
                    3 images attached for evidence
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <span className='px-2.5 py-1 bg-[#ecfdf5] text-[#10b981] text-[10px] font-bold tracking-wider rounded'>
                  COMPLETE
                </span>
                <button className='text-[#10b981]'>
                  <Edit2 className='size-4' />
                </button>
                <button className='text-[#95a0b6]'>
                  <ChevronDown className='size-5' />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final Risk Summary */}
        <div className='bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-[16px] font-bold text-[#132651]'>Final Risk Summary</h3>
            <span className='text-[11px] font-bold text-[#95a0b6]'>Post-Mitigation Totals</span>
          </div>

          <div className='grid grid-cols-5 gap-4 mb-8'>
            <div className='bg-[#f8f9fc] rounded-[8px] py-4 flex flex-col items-center justify-center border border-[#e3e6ec]'>
              <span className='text-[24px] font-bold text-[#132651]'>10</span>
              <span className='text-[11px] font-medium text-[#5a6886] mt-1'>Total</span>
            </div>
            <div className='bg-[#ecfdf5] rounded-[8px] py-4 flex flex-col items-center justify-center border border-[#a7f3d0]'>
              <span className='text-[24px] font-bold text-[#10b981]'>4</span>
              <span className='text-[11px] font-medium text-[#10b981] mt-1'>Low</span>
            </div>
            <div className='bg-[#fefce8] rounded-[8px] py-4 flex flex-col items-center justify-center border border-[#fef08a]'>
              <span className='text-[24px] font-bold text-[#d97706]'>5</span>
              <span className='text-[11px] font-medium text-[#d97706] mt-1'>Medium</span>
            </div>
            <div className='bg-[#fff7ed] rounded-[8px] py-4 flex flex-col items-center justify-center border border-[#fed7aa]'>
              <span className='text-[24px] font-bold text-[#ea580c]'>1</span>
              <span className='text-[11px] font-medium text-[#ea580c] mt-1'>High</span>
            </div>
            <div className='bg-[#fff1f2] rounded-[8px] py-4 flex flex-col items-center justify-center border border-[#fecdd3]'>
              <span className='text-[24px] font-bold text-[#e11d48]'>0</span>
              <span className='text-[11px] font-medium text-[#e11d48] mt-1'>Critical</span>
            </div>
          </div>

          <div className='flex items-center justify-between mb-2'>
            <span className='text-[12px] font-bold text-[#132651]'>Distribution</span>
            <span className='text-[11px] text-[#95a0b6]'>By percentage resolved</span>
          </div>
          <div className='w-full h-3 rounded-full flex overflow-hidden'>
            <div className='h-full bg-[#10b981]' style={{ width: '40%' }}></div>
            <div className='h-full bg-[#f59e0b]' style={{ width: '50%' }}></div>
            <div className='h-full bg-[#ea580c]' style={{ width: '10%' }}></div>
          </div>
        </div>

        {/* Assessor / Reviewer Details */}
        <div className='bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'>
          <h3 className='text-[16px] font-bold text-[#132651] mb-6'>Assessor / Reviewer Details</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-[12px] text-[#5a6886] mb-2'>Lead Assessor Name</label>
              <input
                type='text'
                value='Alan Ludewig'
                readOnly
                className='w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-[#132651] bg-[#f9fafc] outline-none'
              />
            </div>
            <div>
              <label className='block text-[12px] text-[#5a6886] mb-2'>Assessment Date</label>
              <input
                type='text'
                value='02/10/2024'
                readOnly
                className='w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-[#132651] bg-[#f9fafc] outline-none'
              />
            </div>
            <div>
              <label className='block text-[12px] text-[#5a6886] mb-2'>Document Version</label>
              <input
                type='text'
                value='1'
                readOnly
                className='w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-[#132651] bg-[#f9fafc] outline-none'
              />
            </div>
            <div>
              <label className='block text-[12px] text-[#5a6886] mb-2'>Format Reference</label>
              <input
                type='text'
                value='REF-ALPHA-2024-001'
                readOnly
                className='w-full h-10 px-3 rounded-[6px] border border-[#e3e6ec] text-[13px] text-[#132651] bg-[#f9fafc] outline-none'
              />
            </div>
          </div>
          <div>
            <label className='block text-[12px] text-[#5a6886] mb-2'>
              Reviewer Notes (Optional)
            </label>
            <textarea
              placeholder='Add any specific handover notes or clarifications for the reviewers...'
              className='w-full h-24 p-3 rounded-[6px] border border-[#c5c6cd] text-[13px] text-[#132651] outline-none focus:border-[#132651] resize-none placeholder:text-[#95a0b6]'
            ></textarea>
          </div>
        </div>

        {/* Final Declaration */}
        <div className='bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8'>
          <h3 className='text-[16px] font-bold text-[#132651] mb-6'>Final Declaration</h3>

          <div className='flex flex-col gap-4 mb-6'>
            <label className='flex items-start gap-3 p-4 bg-[#f8f9fc] rounded-[8px] cursor-pointer group hover:bg-[#f3f5f8] transition-colors border border-transparent'>
              <input type='checkbox' className='mt-1 shrink-0 rounded border-[#c5c6cd]' />
              <div>
                <p className='text-[14px] font-bold text-[#132651]'>Site Conditions Confirmation</p>
                <p className='text-[12px] text-[#5a6886] mt-1'>
                  I confirm that all site conditions have been accurately assessed and documented as
                  of the date of this report.
                </p>
              </div>
            </label>

            <label className='flex items-start gap-3 p-4 bg-[#f8f9fc] rounded-[8px] cursor-pointer group hover:bg-[#f3f5f8] transition-colors border border-transparent'>
              <input type='checkbox' className='mt-1 shrink-0 rounded border-[#c5c6cd]' />
              <div>
                <p className='text-[14px] font-bold text-[#132651]'>Hazard & Control Review</p>
                <p className='text-[12px] text-[#5a6886] mt-1'>
                  I have reviewed all 12 hazards and their corresponding 12 control measures,
                  ensuring they meet the required safety standards.
                </p>
              </div>
            </label>

            <label className='flex items-start gap-3 p-4 bg-[#f8f9fc] rounded-[8px] cursor-pointer group hover:bg-[#f3f5f8] transition-colors border border-transparent'>
              <input type='checkbox' className='mt-1 shrink-0 rounded border-[#c5c6cd]' />
              <div>
                <p className='text-[14px] font-bold text-[#132651]'>Competent Person Validation</p>
                <p className='text-[12px] text-[#5a6886] mt-1'>
                  I declare that I am a competent person to perform this assessment and all
                  information provided is true and accurate.
                </p>
              </div>
            </label>
          </div>

          <div className='bg-[#eef4ff] rounded-[8px] p-4 flex items-center gap-3 mb-8'>
            <Info className='size-5 text-[#3b82f6] shrink-0' />
            <p className='text-[12px] text-[#3b82f6]'>
              Completing sign-off will lock this assessment from editing and generate the compliance
              PDFs for the audit/archive record.
            </p>
          </div>

          <Button onClick={onSubmitForReview} className='h-10 bg-[#132651] px-8 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-none rounded-[6px]'>
            Submit for Review
          </Button>
        </div>
      </div>

      {/* Right Column */}
      <div className='xl:col-span-4 flex flex-col gap-6 sticky top-6'>
        {/* Assessment Summary */}
        <div className='bg-[#132651] rounded-[12px] p-6 text-white shadow-[0_4px_12px_rgba(19,38,81,0.2)]'>
          <h3 className='text-[16px] font-bold mb-6 opacity-90'>Assessment Summary</h3>
          <div className='flex flex-col gap-5 mb-8'>
            <div>
              <p className='text-[11px] text-white/60 mb-1 uppercase tracking-wider font-bold'>
                Reference
              </p>
              <p className='text-[14px] font-bold'>ALPHA-P-72-2024</p>
            </div>
            <div>
              <p className='text-[11px] text-white/60 mb-1 uppercase tracking-wider font-bold'>
                Project
              </p>
              <p className='text-[14px] font-bold'>Alpha Infrastructure Phase 2</p>
            </div>
            <div>
              <p className='text-[11px] text-white/60 mb-1 uppercase tracking-wider font-bold'>
                Assessor
              </p>
              <p className='text-[14px] font-bold'>
                Alan Ludewig (Senior
                <br />
                Consultant)
              </p>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between text-[11px] font-bold text-white/80 mb-2'>
              <span>Progress</span>
              <span className='text-[14px] font-bold text-white'>100%</span>
            </div>
            <div className='w-full h-1.5 bg-white/20 rounded-full overflow-hidden'>
              <div className='h-full bg-white rounded-full' style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Output Configuration */}
        <div className='bg-white rounded-[12px] border border-[#e3e6ec] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'>
          <h3 className='text-[16px] font-bold text-[#132651] mb-5'>Output Configuration</h3>
          <div className='flex flex-col gap-4'>
            <label className='flex items-center gap-3 cursor-pointer'>
              <input
                type='checkbox'
                className='rounded border-[#132651] text-[#132651] focus:ring-[#132651]'
                defaultChecked
              />
              <span className='text-[13px] text-[#5a6886]'>Standard PDF Report</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer'>
              <input
                type='checkbox'
                className='rounded border-[#132651] text-[#132651] focus:ring-[#132651]'
                defaultChecked
              />
              <span className='text-[13px] text-[#5a6886]'>Full Images Appendix</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer'>
              <input
                type='checkbox'
                className='rounded border-[#132651] text-[#132651] focus:ring-[#132651]'
              />
              <span className='text-[13px] text-[#5a6886]'>Attach Supporting Documents</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer'>
              <input
                type='checkbox'
                className='rounded border-[#132651] text-[#132651] focus:ring-[#132651]'
                defaultChecked
              />
              <span className='text-[13px] text-[#5a6886]'>Include Matrix Appendix</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
