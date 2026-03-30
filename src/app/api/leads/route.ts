import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: "Lead capture not implemented yet.",
    },
    { status: 501 },
  );
}
