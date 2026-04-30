"use client";

import { useState, useRef } from "react";

export default function LeadForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="bg-surface-container-low p-8 rounded-3xl border border-slate-200 shadow-xl">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-on-surface-variant mb-2">
            Primary Industry
          </label>
          <select className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:outline-none transition-all bg-white">
            <option>HVAC &amp; Air Quality</option>
            <option>Roofing &amp; Exteriors</option>
            <option>Landscaping &amp; Hardscaping</option>
            <option>Electrical &amp; Lighting</option>
            <option>Plumbing &amp; Rooter</option>
            <option>Solar Solutions</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-on-surface-variant mb-2">
            Upload Your Logo/Brand Assets
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept=".svg,.png,.jpg,.jpeg"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 text-center bg-white cursor-pointer transition-colors group ${
              isDragging
                ? "border-primary bg-blue-50"
                : "border-outline-variant hover:border-primary"
            }`}
          >
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-4xl block mb-2">
              upload_file
            </span>
            {fileName ? (
              <p className="text-sm text-primary font-medium">{fileName}</p>
            ) : (
              <>
                <p className="text-sm text-on-surface-variant">
                  Drag &amp; drop files here or{" "}
                  <span className="text-primary font-bold underline">browse</span>
                </p>
                <p className="text-[10px] text-outline mt-1 uppercase tracking-widest">
                  SVG, PNG, JPG (MAX 10MB)
                </p>
              </>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-primary text-white font-black text-lg rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
        >
          Get Your Free Strategy Session
        </button>
      </form>
    </div>
  );
}
