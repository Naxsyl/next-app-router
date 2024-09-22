import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { status: 401, message: "Invalid Secret" },
      {
        status: 401,
      }
    );
  }

  if (!tag) {
    return NextResponse.json(
      { status: 400, message: "Missing tag Param" },
      { status: 400 }
    );
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidate: true, date: Date.now() });
}
