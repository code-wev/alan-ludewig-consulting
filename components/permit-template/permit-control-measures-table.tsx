"use client";

import { useState } from "react";
import { Check, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type PermitControlItem } from "./types";

type PermitControlMeasuresTableProps = {
  controlItems: PermitControlItem[];
  onAddControl: () => void;
  onUpdateControl: (controlId: string, patch: Partial<PermitControlItem>) => void;
};

export function PermitControlMeasuresTable({
  controlItems,
  onAddControl,
  onUpdateControl,
}: PermitControlMeasuresTableProps) {
  const [editingControlId, setEditingControlId] = useState<string | null>(null);

  return (
    <section className="overflow-hidden rounded-[12px] border border-[#e3e6ec] bg-white">
      <div className="flex items-center justify-between border-b border-[#f3f5f8] px-5 py-3.5">
        <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
          Permit Checks &amp; Control Measures
        </h3>
        <Button
          type="button"
          onClick={onAddControl}
          className="h-8 rounded-[6px] bg-brand-primary px-3 font-['Sansation'] text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
        >
          Add Control
        </Button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-245">
          <div className="grid grid-cols-[minmax(220px,1.4fr)_minmax(150px,1fr)_minmax(150px,1fr)_120px_120px_90px] items-center bg-[#d6e9ff] px-5 py-2.5">
            {[
              "Required Control",
              "Related Permit Check",
              "Responsible Person",
              "Confirmed",
              "Status",
              "Actions",
            ].map((heading) => (
              <p
                key={heading}
                className="font-['Sansation'] text-[12px] font-bold leading-[1.6] text-brand-primary"
              >
                {heading}
              </p>
            ))}
          </div>

          {controlItems.map((item) => {
            const isEditing = editingControlId === item.id;

            return (
              <div
                key={item.id}
                className="grid grid-cols-[minmax(220px,1.4fr)_minmax(150px,1fr)_minmax(150px,1fr)_120px_120px_90px] items-center border-b-[1.5px] border-[#f3f5f8] px-5 py-3"
              >
                <div className="pr-4">
                  {isEditing ? (
                    <>
                      <input
                        value={item.title}
                        onChange={(event) =>
                          onUpdateControl(item.id, { title: event.target.value })
                        }
                        className="h-8 w-full rounded-[6px] border border-[#dce0e7] px-2.5 font-['Sansation'] text-[12px] text-brand-primary outline-none focus:border-brand-primary"
                      />
                      <input
                        value={item.description}
                        onChange={(event) =>
                          onUpdateControl(item.id, {
                            description: event.target.value,
                          })
                        }
                        className="mt-2 h-8 w-full rounded-[6px] border border-[#dce0e7] px-2.5 font-['Sansation'] text-[11px] text-brand-secondary outline-none focus:border-brand-primary"
                      />
                    </>
                  ) : (
                    <>
                      <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                        {item.title}
                      </p>
                      <p className="font-['Sansation'] text-[12px] leading-[1.6] text-brand-secondary">
                        {item.description}
                      </p>
                    </>
                  )}
                </div>

                <div className="pr-4">
                  {isEditing ? (
                    <input
                      value={item.relatedCheck}
                      onChange={(event) =>
                        onUpdateControl(item.id, {
                          relatedCheck: event.target.value,
                        })
                      }
                      className="h-8 w-full rounded-[6px] border border-[#dce0e7] px-2.5 font-['Sansation'] text-[12px] text-brand-secondary outline-none focus:border-brand-primary"
                    />
                  ) : (
                    <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                      {item.relatedCheck}
                    </p>
                  )}
                </div>

                <div className="pr-4">
                  {isEditing ? (
                    <input
                      value={item.responsiblePerson}
                      onChange={(event) =>
                        onUpdateControl(item.id, {
                          responsiblePerson: event.target.value,
                        })
                      }
                      className="h-8 w-full rounded-[6px] border border-[#dce0e7] px-2.5 font-['Sansation'] text-[12px] text-brand-secondary outline-none focus:border-brand-primary"
                    />
                  ) : (
                    <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
                      {item.responsiblePerson}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      onUpdateControl(item.id, { confirmed: !item.confirmed })
                    }
                    className={cn(
                      "flex size-4.5 items-center justify-center rounded-lg border",
                      item.confirmed
                        ? "border-[#1e3a8a] bg-[#1e3a8a] text-white"
                        : "border-[#dce0e7] bg-white text-transparent",
                    )}
                  >
                    <Check className="size-3.5" />
                  </button>
                </div>

                <div>
                  <span
                    className={cn(
                      "inline-flex rounded-[6px] px-2.5 py-0.5 font-['Sansation'] text-[12px] leading-[1.6]",
                      item.confirmed
                        ? "bg-[#00bc7d] text-white"
                        : "bg-[#fef3c7] text-[#92400e]",
                    )}
                  >
                    {item.confirmed ? "Verified" : "Pending"}
                  </span>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setEditingControlId((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                    className="text-[#22c55e]"
                    aria-label={`Edit ${item.title}`}
                  >
                    <Pencil className="size-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
