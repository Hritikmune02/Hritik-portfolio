import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    console.log("📩 New Contact Message:", { name, email, message });

    return NextResponse.json(
      { ok: true, message: "Message received" },
      { status: 200 }
    );

  } catch (err) {
    console.error("❌ Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}