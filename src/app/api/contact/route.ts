import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Semua input field wajib diisi" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured in environment variables. Falling back to simulation mode.");
      // Fallback in local dev environments if API key is not supplied
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Email simulated successfully (missing API key in dev).",
      });
    }

    const resend = new Resend(resendApiKey);

    // Send email via Resend to dimasroger89@gmail.com
    const response = await resend.emails.send({
      from: "LancarPos Contact <onboarding@resend.dev>",
      to: "dimasroger89@gmail.com",
      subject: `[LancarPos Landing] ${subject} - Dari: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e6e6e6; border-radius: 8px;">
          <h2 style="color: #0075de; margin-top: 0;">Pesan Kontak Baru — LancarPos</h2>
          <hr style="border: 0; border-top: 1px solid #e6e6e6; margin: 20px 0;">
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email Pengirim:</strong> ${email}</p>
          <p><strong>Subjek:</strong> ${subject}</p>
          <p><strong>Pesan:</strong></p>
          <div style="background-color: #f6f5f4; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #31302e;">
            ${message}
          </div>
          <hr style="border: 0; border-top: 1px solid #e6e6e6; margin: 20px 0;">
          <p style="font-size: 11px; color: #a39e98;">Email ini otomatis dikirim via Resend dari Landing Page LancarPos.</p>
        </div>
      `,
    });

    if (response.error) {
      console.error("Resend API returned error:", response.error);
      return NextResponse.json(
        { error: response.error.message || "Gagal mengirim pesan via Resend" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error("Error processing contact form route:", err);
    return NextResponse.json(
      { error: err.message || "Terjadi kesalahan internal server" },
      { status: 500 }
    );
  }
}
