import supabase from "@/app/utils/supabase";
import sendgrid from "@sendgrid/mail";
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

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

  const options = {
    to: "victor.gaard@gmail.com",
    from: "victor@sawthat.band",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sendgrid
    .send(options)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  return NextResponse.json({ data, error });
}
