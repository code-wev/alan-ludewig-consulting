'use client';

import { Eye, Calendar, Trash2, XCircle } from 'lucide-react';
import { type BookingHistoryItem } from './types';

interface BookingHistoryProps {
  history: BookingHistoryItem[];
  onCancelClick: (item: BookingHistoryItem) => void;
  onDelete: (id: string) => void;
  onRescheduleClick: (item: BookingHistoryItem) => void;
  onViewClick: (item: BookingHistoryItem) => void;
}

export function BookingHistory({ history, onCancelClick, onDelete, onRescheduleClick, onViewClick }: BookingHistoryProps) {
  return (
    <div className="bg-white border-[1.5px] border-[#d0d4dc] rounded-[10px] p-6 md:p-8 space-y-6 w-full shadow-[0_1px_0_rgba(10,25,47,0.02)]">
      <h2 className="font-['Inter'] text-[24px] font-bold text-[#132651]">
        Booking History
      </h2>

      <div className="overflow-x-auto no-scrollbar border border-[#e3e6ec] rounded-[12px] bg-white">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#d6e9ff] text-[#132651] font-['Sansation'] font-bold text-[14px] border-b border-[#e3e6ec]">
              <th className="py-[14px] px-6">Visit Type</th>
              <th className="py-[14px] px-6">Date</th>
              <th className="py-[14px] px-6">Time</th>
              <th className="py-[14px] px-6">Duration</th>
              <th className="py-[14px] px-6">Status</th>
              <th className="py-[14px] px-6">Consultant</th>
              <th className="py-[14px] px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e3e6ec] font-['Sansation'] text-[14px] text-[#132651]">
            {history.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-[#5a6886]">
                  No bookings found.
                </td>
              </tr>
            ) : (
              history.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 font-semibold">
                    {item.visitType}
                  </td>
                  <td className="py-5 px-6 text-[#5a6886]">
                    {item.date}
                  </td>
                  <td className="py-5 px-6 text-[#5a6886]">
                    {item.time}
                  </td>
                  <td className="py-5 px-6 text-[#5a6886]">
                    {item.duration}
                  </td>
                  <td className="py-5 px-6">
                    <span
                      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[12px] font-medium ${
                        item.status === 'Confirmed'
                          ? 'bg-[#eff6ff] text-[#1447e6]'
                          : item.status === 'Completed'
                          ? 'bg-[#ecfdf5] text-[#007a55]'
                          : 'bg-[#f3f5f8] text-[#5a6886]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-[#5a6886]">
                    {item.consultant}
                  </td>
                  <td className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {/* View Action */}
                      <button
                        onClick={() => onViewClick(item)}
                        title="View details"
                        className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                      >
                        <Eye className="size-4.5" />
                      </button>

                      {/* Reschedule/Edit Action (Only for Confirmed bookings) */}
                      {item.status === 'Confirmed' && (
                        <button
                          onClick={() => onRescheduleClick(item)}
                          title="Reschedule booking"
                          className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                        >
                          <Calendar className="size-4.5" />
                        </button>
                      )}

                      {/* Cancel/Delete Action */}
                      {item.status === 'Confirmed' ? (
                        <button
                          onClick={() => onCancelClick(item)}
                          title="Cancel booking"
                          className="p-1.5 hover:bg-red-50 rounded text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                        >
                          <XCircle className="size-4.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => onDelete(item.id)}
                          title="Delete record"
                          className="p-1.5 hover:bg-red-50 rounded text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                        >
                          <Trash2 className="size-4.5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
