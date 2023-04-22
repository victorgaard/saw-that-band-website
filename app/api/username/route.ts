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

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const username = searchParams.get("username");

  const { data, error } = await supabase
    .from("Waitlist")
    .insert([{ email, username }]);

  return NextResponse.json({ data, error });
}
