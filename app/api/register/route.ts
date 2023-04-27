import supabase from "@/app/utils/supabase";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import WaitlistWelcomeEmail from "@/app/email/WaitlistWelcomeEmail";
import sendgrid from "@/app/utils/sendgrid";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const username = searchParams.get("username");

  const { data, error } = await supabase
    .from("Waitlist")
    .insert([{ email, username }]);

  if (!error && email && username) {
    const html = render(WaitlistWelcomeEmail({ username }));
    const options = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `Your username ${username} is reserved 🤘`,
      text: `Thanks for joining our waitlist. Your username ${username} is now reserved on Saw that Band. We will notify you via email as soon as the app is launched to complete the registration.`,
      html,
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
