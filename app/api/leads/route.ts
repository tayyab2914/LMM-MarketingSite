import { put } from "@vercel/blob";
import { Resend } from "resend";
import type { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = (formData.get("name") as string | null)?.trim() ?? "";
    const company = (formData.get("company") as string | null)?.trim() ?? "";
    const industry = (formData.get("industry") as string | null)?.trim() ?? "";
    const file = formData.get("file") as File | null;

    if (!name || name.length < 2) {
      return Response.json({ error: "Full name is required." }, { status: 400 });
    }
    if (!company) {
      return Response.json({ error: "Company name is required." }, { status: 400 });
    }

    let logoUrl: string | null = null;
    if (file && file.size > 0) {
      if (file.size > 10 * 1024 * 1024) {
        return Response.json({ error: "Logo file must be under 10 MB." }, { status: 400 });
      }
      const { url } = await put(`leads/${Date.now()}-${file.name}`, file, {
        access: "public",
      });
      logoUrl = url;
    }

    const toEmail = process.env.TO_EMAIL ?? "";
    await resend.emails.send({
      from: "leads@intellipath.online",
      to: toEmail,
      subject: `New Lead — ${name} (${company})`,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        ${logoUrl ? `<p><strong>Logo:</strong> <a href="${logoUrl}">${logoUrl}</a></p>` : "<p><strong>Logo:</strong> Not provided</p>"}
      `,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
