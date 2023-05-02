import WaitlistWelcomeEmail from "@/app/email/WaitlistWelcomeEmail";
import sendgrid from "@/app/utils/sendgrid";
import supabase from "@/app/utils/supabase";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email")!;
  const username = searchParams.get("username")!;

  const { data, error } = await supabase
    .from("Waitlist")
    .insert([{ email, username }]);

  const html = render(WaitlistWelcomeEmail({ username }));
  const options = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `Your username ${username} is reserved 🤘`,
    text: `Thanks for joining our waitlist. Your username ${username} is now reserved on Saw that Band. We will notify you via email as soon as the app is launched to complete the registration.`,
    html,
  };

  if (!error) {
    await sendgrid.send(options);
  }

  return NextResponse.json({ data, error });
}
