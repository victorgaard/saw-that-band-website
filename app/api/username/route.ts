import supabase from "@/app/utils/supabase";
import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const username = searchParams.get("username");

  const { data, error } = await supabase
    .from("Waitlist")
    .insert([{ email, username }]);

  if (!error && email && username) {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

    const options = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `Your username ${username} is reserved 🤘`,
      text: "Thanks for joining the waitlist of Saw that Band. Once it's launched you will receive an email to complete your registration.",
      html: "<strong>Thanks for joining the waitlist of Saw that Band. Once it's launched you will receive an email to complete your registration.</strong>",
    };

    sendgrid
      .send(options)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return NextResponse.json({ data, error });
}
