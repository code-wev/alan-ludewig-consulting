import React from 'react';
import { X, UploadCloud, Image as ImageIcon } from 'lucide-react';

interface UploadLogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadLogoModal({ isOpen, onClose }: UploadLogoModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='bg-white rounded-xl shadow-lg w-full max-w-4xl p-6 flex flex-col gap-6 relative'>
        <button
          onClick={onClose}
          className='absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors'
        >
          <X className='w-5 h-5 text-[#5A6886]' />
        </button>

        <h2 className='text-xl font-bold text-[#132651]'>Upload Company Logo</h2>

        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center justify-center border-2 border-dashed border-[#E3E6EC] rounded-lg p-6 gap-2 bg-[#FAFAFA] hover:bg-gray-50 transition-colors cursor-pointer'>
              <UploadCloud className='w-6 h-6 text-[#2170E4] mb-2' />
              <p className='font-bold text-sm text-[#132651]'>Drag and drop file here</p>
              <p className='text-xs text-[#5A6886]'>
                or <span className='font-medium text-[#132651]'>browse from your computer</span>
              </p>
              <p className='text-xs text-[#5A6886] mt-2 text-center'>
                Accepted formats: PNG, JPG, SVG. Recommended size: 500x500 px
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <span className='text-sm text-[#132651]'>Preview Section</span>
            <div className='flex flex-col items-center justify-center h-40 bg-[#F3F5F8] border border-dashed border-[#E3E6EC] rounded'>
              <ImageIcon className='w-9 h-9 text-[#5A6886] mb-2' />
              <p className='text-xs text-[#5A6886]'>No logo selected</p>
            </div>
          </div>
        </div>

        <div className='flex'>
          <button
            onClick={onClose}
            className='bg-[#132651] text-white font-bold text-xs px-6 py-2.5 rounded-md hover:bg-[#132651]/90 transition-colors'
          >
            Save Logo
          </button>
        </div>
      </div>
    </div>
  );
}
