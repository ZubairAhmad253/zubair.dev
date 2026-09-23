"use client";

import { Download } from "lucide-react";

export default function PrintButton() {
    return (
        <button
            type="button"
            onClick={() => window.print()}
            className="rainbow-bg group relative inline-flex min-h-12 min-w-[164px] items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] sm:px-7"
        >
            <Download className="h-4 w-4 shrink-0" />
            Download PDF
        </button>
    );
}
