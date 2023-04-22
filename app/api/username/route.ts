import supabase from "@/app/utils/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  const { data, error } = await supabase
    .from("Waitlist")
    .select()
    .eq("username", username);

  return NextResponse.json(data);
}
