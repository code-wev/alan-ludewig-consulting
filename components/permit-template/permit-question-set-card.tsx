"use client";

import { useState } from "react";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  type CustomPermitQuestion,
  type PermitQuestionResponse,
  type PermitQuestionTemplate,
} from "./types";

const answerOptions: Array<{
  label: string;
  value: PermitQuestionResponse["answer"];
}> = [
  { label: "YES", value: "yes" },
  { label: "NO", value: "no" },
  { label: "N/A", value: "na" },
];

type PermitQuestionSetCardProps = {
  focusedHazardQuestions: Array<PermitQuestionTemplate | CustomPermitQuestion>;
  questionResponses: Record<string, PermitQuestionResponse>;
  requiredPpe: string[];
  controlMeasures: string[];
  onQuestionResponseChange: (
    questionId: string,
    patch: Partial<PermitQuestionResponse>,
  ) => void;
  onAddCustomQuestion: () => void;
  onUpdateCustomQuestion: (questionId: string, text: string) => void;
  onRemoveCustomQuestion: (questionId: string) => void;
  onAddRequiredPpe: (value: string) => void;
  onRemoveRequiredPpe: (value: string) => void;
  onAddControlMeasure: (value: string) => void;
  onRemoveControlMeasure: (value: string) => void;
  onAddControl: () => void;
};

export function PermitQuestionSetCard({
  focusedHazardQuestions,
  questionResponses,
  requiredPpe,
  controlMeasures,
  onQuestionResponseChange,
  onAddCustomQuestion,
  onUpdateCustomQuestion,
  onRemoveCustomQuestion,
  onAddRequiredPpe,
  onRemoveRequiredPpe,
  onAddControlMeasure,
  onRemoveControlMeasure,
  onAddControl,
}: PermitQuestionSetCardProps) {
  const [ppeInput, setPpeInput] = useState("");
  const [controlMeasureInput, setControlMeasureInput] = useState("");
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);

  return (
    <section className="overflow-hidden rounded-[12px] border border-[#e3e6ec] bg-white">
      <div className="flex items-center justify-between border-b border-[#c5c6d0] bg-[#f2f4f8] px-4 py-4">
        <div>
          <h3 className="font-['Sansation'] text-[20px] font-bold leading-[1.6] text-brand-primary">
            Hazard Identification
          </h3>
          <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-secondary">
            Select all hazards relevant to this permit.
          </p>
        </div>

        <Button
          type="button"
          onClick={onAddControl}
          className="h-8 rounded-[6px] bg-brand-primary px-3 font-['Sansation'] text-[12px] font-bold text-white hover:bg-[#0d1b3a]"
        >
          Add Control
        </Button>
      </div>

      <div className="space-y-5 p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h4 className="font-['Sansation'] text-[14px] font-bold leading-[1.6] text-brand-primary">
              Permit Question Set
            </h4>
            <p className="max-w-105 font-['Sansation'] text-[12px] leading-[1.6] text-brand-secondary">
              Questions can be edited for this permit only. Changes here will not
              alter the global admin template.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setEditingQuestionId(focusedHazardQuestions[0]?.id ?? null)}
              className="h-8 rounded-[6px] border-brand-primary bg-white px-3 font-['Sansation'] text-[12px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
            >
              Edit Question Set
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onAddCustomQuestion}
              className="h-8 rounded-[6px] border-brand-primary bg-white px-3 font-['Sansation'] text-[12px] font-bold text-brand-primary shadow-none hover:bg-brand-bg-main"
            >
              Add Custom Question
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {focusedHazardQuestions.map((question, index) => {
            const response = questionResponses[question.id] ?? {
              answer: null,
              comment: "",
              actionRequired: false,
            };
            const isEditing = editingQuestionId === question.id;

            return (
              <article
                key={question.id}
                className="rounded-[10px] bg-[#f6f8fb] p-3.5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    {isEditing ? (
                      <input
                        value={question.text}
                        onChange={(event) =>
                          onUpdateCustomQuestion(question.id, event.target.value)
                        }
                        onBlur={() => setEditingQuestionId(null)}
                        autoFocus
                        className="h-9 w-full rounded-[6px] border border-[#dce0e7] bg-white px-3 font-['Sansation'] text-[14px] text-brand-primary outline-none focus:border-brand-primary"
                      />
                    ) : (
                      <p className="font-['Sansation'] text-[14px] leading-[1.6] text-brand-primary">
                        {index + 1}. {question.text}
                      </p>
                    )}
                  </div>

                  <div className="flex shrink-0 rounded-[6px] border border-[#dce0e7] bg-white">
                    {answerOptions.map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() =>
                          onQuestionResponseChange(question.id, {
                            answer: option.value,
                          })
                        }
                        className={cn(
                          "px-2.5 py-1 font-['Sansation'] text-[10px] font-bold",
                          response.answer === option.value
                            ? "bg-brand-primary text-white"
                            : "text-brand-secondary",
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <input
                    value={response.comment}
                    onChange={(event) =>
                      onQuestionResponseChange(question.id, {
                        comment: event.target.value,
                      })
                    }
                    placeholder="Add comment..."
                    className="h-8.5 min-w-0 flex-1 rounded-[6px] border border-[#dce0e7] bg-white px-3 font-['Sansation'] text-[12px] text-brand-primary outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
                  />

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        onQuestionResponseChange(question.id, {
                          actionRequired: !response.actionRequired,
                        })
                      }
                      className="flex items-center gap-2"
                    >
                      <span className="flex size-3.5 items-center justify-center rounded-lg border border-[#dce0e7] bg-white">
                        {response.actionRequired ? (
                          <span className="size-2 rounded-xs bg-brand-primary" />
                        ) : null}
                      </span>
                      <span className="font-['Sansation'] text-[10px] leading-[1.6] text-brand-secondary">
                        Action Required
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setEditingQuestionId(question.id)}
                      className="text-[#22c55e]"
                      aria-label={`Edit question ${index + 1}`}
                    >
                      <Pencil className="size-3.5" />
                    </button>

                    {question.id.startsWith("custom-question-") ? (
                      <button
                        type="button"
                        onClick={() => onRemoveCustomQuestion(question.id)}
                        className="text-[#ef4444]"
                        aria-label={`Remove question ${index + 1}`}
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ChipSearchField
            label="Required PPE"
            placeholder="Search PPE..."
            value={ppeInput}
            onValueChange={setPpeInput}
            chips={requiredPpe}
            onAdd={onAddRequiredPpe}
            onRemove={onRemoveRequiredPpe}
          />
          <ChipSearchField
            label="Control Measures"
            placeholder="Search Control Measures..."
            value={controlMeasureInput}
            onValueChange={setControlMeasureInput}
            chips={controlMeasures}
            onAdd={onAddControlMeasure}
            onRemove={onRemoveControlMeasure}
          />
        </div>
      </div>
    </section>
  );
}

function ChipSearchField({
  label,
  placeholder,
  value,
  onValueChange,
  chips,
  onAdd,
  onRemove,
}: {
  label: string;
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  chips: string[];
  onAdd: (value: string) => void;
  onRemove: (value: string) => void;
}) {
  return (
    <div>
      <p className="font-['Sansation'] text-[12px] font-bold leading-[1.6] text-brand-primary">
        {label}
      </p>
      <div className="relative mt-1">
        <input
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onAdd(value);
              onValueChange("");
            }
          }}
          placeholder={placeholder}
          className="h-8.5 w-full rounded-[6px] border border-[#dce0e7] bg-white px-3 pr-9 font-['Sansation'] text-[12px] text-brand-primary outline-none placeholder:text-[#a3acba] focus:border-brand-primary"
        />
        <Search className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-brand-secondary" />
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => onRemove(chip)}
            className="rounded-full bg-[#f3f5f8] px-2 py-0.5 font-['Sansation'] text-[10px] leading-[1.6] text-brand-secondary"
          >
            {chip}
          </button>
        ))}
        {value.trim() ? (
          <button
            type="button"
            onClick={() => {
              onAdd(value);
              onValueChange("");
            }}
            className="inline-flex items-center gap-1 rounded-full border border-brand-primary px-2 py-0.5 font-['Sansation'] text-[10px] leading-[1.6] text-brand-primary"
          >
            <Plus className="size-3" />
            Add
          </button>
        ) : null}
      </div>
    </div>
  );
}
