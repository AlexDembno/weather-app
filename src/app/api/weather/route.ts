import { getWeather } from "@/lib/server/getWeather";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const city = url.searchParams.get("city")?.trim() ?? "";

  if (city.length < 3) {
    return NextResponse.json(null, { status: 400 });
  }

  try {
    const data = await getWeather(city);
    if (!data) return NextResponse.json(null, { status: 404 });
    return NextResponse.json(data, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "Weather API error" },
      { status: 500 }
    );
  }
}
