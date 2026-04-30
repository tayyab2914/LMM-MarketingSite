"use client";

import { useState, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/svg+xml", "image/png", "image/jpeg"];

export default function LeadForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("HVAC & Air Quality");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) next.name = "Full name is required.";
    if (!company.trim()) next.company = "Company name is required.";
    if (file) {
      if (!ACCEPTED_TYPES.includes(file.type)) next.file = "Only SVG, PNG, or JPG files are accepted.";
      else if (file.size > MAX_FILE_SIZE) next.file = "File must be under 10 MB.";
    }
    return next;
  }

  function pickFile(f: File) {
    const nextErrors = { ...errors };
    if (!ACCEPTED_TYPES.includes(f.type)) {
      nextErrors.file = "Only SVG, PNG, or JPG files are accepted.";
      setErrors(nextErrors);
      return;
    }
    if (f.size > MAX_FILE_SIZE) {
      nextErrors.file = "File must be under 10 MB.";
      setErrors(nextErrors);
      return;
    }
    delete nextErrors.file;
    setErrors(nextErrors);
    setFile(f);
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) pickFile(f);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    setServerError("");

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("company", company.trim());
    formData.append("industry", industry);
    if (file) formData.append("file", file);

    try {
      const res = await fetch("/api/leads", { method: "POST", body: formData });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-surface-container-low p-8 rounded-3xl border border-slate-200 shadow-xl text-center">
        <span className="material-symbols-outlined text-primary text-5xl block mb-4">check_circle</span>
        <h3 className="text-xl font-black text-on-surface mb-2">You&apos;re on the list!</h3>
        <p className="text-on-surface-variant text-sm">
          We&apos;ll be in touch shortly to lock in your suburb and get your free strategy session booked.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low p-8 rounded-3xl border border-slate-200 shadow-xl">
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:outline-none transition-all ${
                errors.name ? "border-red-400" : "border-outline-variant"
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:outline-none transition-all ${
                errors.company ? "border-red-400" : "border-outline-variant"
              }`}
            />
            {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-on-surface-variant mb-2">
            Primary Industry
          </label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:outline-none transition-all bg-white"
          >
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
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) pickFile(f);
            }}
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
              errors.file
                ? "border-red-400"
                : isDragging
                ? "border-primary bg-blue-50"
                : "border-outline-variant hover:border-primary"
            }`}
          >
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-4xl block mb-2">
              upload_file
            </span>
            {file ? (
              <p className="text-sm text-primary font-medium">{file.name}</p>
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
          {errors.file && <p className="mt-1 text-xs text-red-500">{errors.file}</p>}
        </div>

        {serverError && (
          <p className="text-sm text-red-500 text-center">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-primary text-white font-black text-lg rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
              Sending…
            </>
          ) : (
            "Get Your Free Strategy Session"
          )}
        </button>
      </form>
    </div>
  );
}
