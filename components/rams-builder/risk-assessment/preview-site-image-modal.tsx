import { Button } from '@/components/ui/button';
import { ChevronRight, FileIcon, Maximize, RotateCw, X, ZoomIn, ZoomOut } from 'lucide-react';

interface PreviewSiteImageModalProps {
  previewImageId: any;
  setPreviewImageId: any;
  images: any;
  setDeleteImageId: any;
}

export function PreviewSiteImageModal({
  previewImageId,
  setPreviewImageId,
  images,
  setDeleteImageId,
}: PreviewSiteImageModalProps) {
  return (
    <>
      {previewImageId && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 overflow-y-auto'>
          <div className='bg-white rounded-[12px] w-full max-w-[1000px] shadow-2xl flex flex-col my-8 h-[90vh] sm:h-[85vh] overflow-hidden transition-all duration-300'>
            {/* Header */}
            <div className='flex items-center justify-between border-b border-[#e3e6ec] px-4 sm:px-6 py-4 sm:py-4.5 shrink-0 bg-white'>
              <div className='flex items-center gap-2.5 text-brand-primary'>
                <FileIcon className='size-5 text-[#132651]' />
                <h3 className='text-[16px] sm:text-[18px] font-bold text-[#132651]'>
                  Document Preview: {images.find((i: any) => i.id === previewImageId)?.name}
                </h3>
              </div>
              <button
                onClick={() => setPreviewImageId(null)}
                className='text-[#5a6886] hover:text-[#132651] hover:bg-[#f3f5f8] p-1.5 rounded-full transition-all'
              >
                <X className='size-5' />
              </button>
            </div>

            {/* Body */}
            <div className='flex flex-col lg:flex-row flex-1 overflow-hidden bg-white'>
              {/* Left Viewer */}
              <div className='flex-1 bg-[#f3f5f8] border-b lg:border-b-0 lg:border-r border-[#e3e6ec] flex flex-col overflow-hidden relative min-h-[300px] lg:min-h-0'>
                {/* Toolbar */}
                <div className='h-12 border-b border-[#e3e6ec] bg-white flex items-center justify-between px-2 sm:px-4 shrink-0 overflow-x-auto'>
                  <div className='flex items-center gap-1'>
                    <button className='p-1.5 text-[#5a6886] hover:text-[#132651] transition-colors'>
                      <ZoomOut className='size-4' />
                    </button>
                    <div className='px-2 py-1 bg-[#f3f5f8] rounded-[4px] text-[13px] font-medium text-[#132651]'>
                      100%
                    </div>
                    <button className='p-1.5 text-[#5a6886] hover:text-[#132651] transition-colors'>
                      <ZoomIn className='size-4' />
                    </button>
                  </div>
                  <div className='flex items-center gap-2 sm:gap-3'>
                    <button className='p-1 text-[#95a0b6] hover:text-[#132651] transition-colors'>
                      <ChevronRight className='size-4 rotate-180' />
                    </button>
                    <span className='text-[12px] sm:text-[13px] font-medium text-[#132651] whitespace-nowrap'>
                      Page 1 of 4
                    </span>
                    <button className='p-1 text-[#5a6886] hover:text-[#132651] transition-colors'>
                      <ChevronRight className='size-4' />
                    </button>
                  </div>
                  <div className='flex items-center gap-1'>
                    <button className='p-1.5 text-[#5a6886] hover:text-[#132651] transition-colors'>
                      <RotateCw className='size-4' />
                    </button>
                    <button className='p-1.5 text-[#5a6886] hover:text-[#132651] transition-colors'>
                      <Maximize className='size-4' />
                    </button>
                  </div>
                </div>
                {/* Image Area */}
                <div className='flex-1 overflow-auto p-4 sm:p-6 flex items-start justify-center'>
                  <img
                    src={images.find((i: any) => i.id === previewImageId)?.url}
                    alt='Preview'
                    className='max-w-full shadow-md bg-white border border-[#e3e6ec]'
                  />
                </div>
              </div>

              {/* Right Sidebar */}
              <div className='w-full lg:w-[320px] bg-white flex flex-col overflow-y-auto shrink-0'>
                {(() => {
                  const img = images.find((i: any) => i.id === previewImageId);
                  if (!img) return null;
                  return (
                    <div className='p-5 sm:p-6 space-y-6 sm:space-y-7'>
                      {/* File Information */}
                      <div>
                        <h4 className='text-[14px] font-bold text-[#132651] mb-3.5'>
                          File Information
                        </h4>
                        <div className='space-y-3.5'>
                          <div>
                            <p className='text-[11px] text-[#5a6886] mb-1'>File Name</p>
                            <p className='text-[13px] font-medium text-[#132651] break-all'>
                              {img.name}
                            </p>
                          </div>
                          <div>
                            <p className='text-[11px] text-[#5a6886] mb-1'>Type</p>
                            <p className='text-[13px] font-medium text-[#132651]'>{img.type}</p>
                          </div>
                          <div className='flex gap-8'>
                            <div>
                              <p className='text-[11px] text-[#5a6886] mb-1'>Size</p>
                              <p className='text-[13px] font-medium text-[#132651]'>{img.size}</p>
                            </div>
                            <div>
                              <p className='text-[11px] text-[#5a6886] mb-1'>Resolution</p>
                              <p className='text-[13px] font-medium text-[#132651]'>
                                {img.resolution}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className='border-[#e3e6ec]' />

                      {/* Context & Relation */}
                      <div>
                        <h4 className='text-[14px] font-bold text-[#132651] mb-3.5'>
                          Context &amp; Relation
                        </h4>
                        <div className='space-y-3.5'>
                          <div>
                            <p className='text-[11px] text-[#5a6886] mb-1.5'>Related Hazard</p>
                            <div className='flex items-center gap-2'>
                              <div className='size-1.5 rounded-full bg-[#e11d48]' />
                              <p className='text-[13px] font-medium text-[#132651]'>
                                {img.relatedHazard}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p className='text-[11px] text-[#5a6886] mb-1'>Section</p>
                            <p className='text-[13px] font-medium text-[#132651]'>{img.section}</p>
                          </div>
                        </div>
                      </div>

                      <hr className='border-[#e3e6ec]' />

                      {/* Lifecycle */}
                      <div>
                        <h4 className='text-[14px] font-bold text-[#132651] mb-4'>Lifecycle</h4>
                        <div className='space-y-5'>
                          <div className='flex items-start gap-3'>
                            <div className='flex size-8 shrink-0 items-center justify-center rounded-full bg-[#132651] text-white text-[11px] font-bold'>
                              {img.uploadedBy
                                .split(' ')
                                .map((n: string) => n[0])
                                .join('')}
                            </div>
                            <div>
                              <p className='text-[11px] text-[#5a6886] mb-0.5'>Uploaded By</p>
                              <p className='text-[13px] font-bold text-[#132651] leading-tight'>
                                {img.uploadedBy}
                              </p>
                              <p className='text-[11px] text-[#5a6886] mt-1'>{img.uploadedAt}</p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 pl-1'>
                            <RotateCw className='size-4 text-[#95a0b6] mt-0.5' />
                            <div>
                              <p className='text-[11px] text-[#5a6886] mb-1'>Last Modified</p>
                              <p className='text-[13px] font-medium text-[#132651]'>
                                {img.lastModified}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className='border-[#e3e6ec]' />

                      {/* Internal Notes */}
                      <div>
                        <h4 className='text-[14px] font-bold text-[#132651] mb-3'>
                          Internal Notes
                        </h4>
                        <div className='bg-[#f8f9fc] rounded-[8px] border border-[#e3e6ec] p-4 text-[13px] text-[#5a6886] leading-relaxed shadow-sm'>
                          "{img.notes}"
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Footer */}
            <div className='flex flex-col sm:flex-row items-center justify-between border-t border-[#e3e6ec] p-4 sm:px-6 sm:py-4.5 bg-white shrink-0 gap-3 sm:gap-0'>
              <div className='flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto'>
                <Button
                  variant='outline'
                  className='h-10 w-full sm:w-auto rounded-[6px] border-[#c5c6cd] bg-white px-6 text-[14px] font-bold text-[#132651] hover:bg-brand-bg-main shadow-sm'
                >
                  Replace File
                </Button>
                <Button className='h-10 w-full sm:w-auto rounded-[6px] bg-[#132651] px-6 text-[14px] font-bold text-white hover:bg-[#0d1b3a] shadow-sm'>
                  Download File
                </Button>
              </div>
              <Button
                className='h-10 w-full sm:w-auto rounded-[6px] bg-[#e11d48] px-6 text-[14px] font-bold text-white hover:bg-[#be123c] shadow-sm'
                onClick={() => {
                  setDeleteImageId(previewImageId);
                  setPreviewImageId(null);
                }}
              >
                Delete File
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
