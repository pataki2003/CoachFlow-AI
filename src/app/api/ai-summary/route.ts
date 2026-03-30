import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: "AI summary not implemented yet.",
    },
    { status: 501 },
  );
}
