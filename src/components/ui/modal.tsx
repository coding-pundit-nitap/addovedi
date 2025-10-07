"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative z-[101] w-[92vw] max-w-2xl rounded-xl border border-[#0B1020] bg-[#050A12] p-4 shadow-[0_0_40px_#0a0a2a] text-[#F5F7FA]",
          className,
        )}
      >
        <div className="flex items-center justify-between border-b border-[#0B1020] pb-3">
          <div className="text-lg font-semibold text-[#66FFFF]">{title}</div>
          <button
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#0B1020] bg-[#0A0F22] text-[#94a3b8] hover:bg-[#0B1020]"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="mt-4 max-h-[70vh] overflow-y-auto pr-1">
          {children}
        </div>
      </div>
    </div>
  );
}
