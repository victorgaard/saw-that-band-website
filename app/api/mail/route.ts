import WaitlistWelcomeEmail from "@/app/email/WaitlistWelcomeEmail";
import sendgrid from "@/app/utils/sendgrid";
import { render } from "@react-email/render";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const username = searchParams.get("username");

  if (!email || !username)
    return NextResponse.json({ error: "Email or username are missing" });

  const html = render(WaitlistWelcomeEmail({ username }));
  const options = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `Your username ${username} is reserved 🤘`,
    text: `Thanks for joining our waitlist. Your username ${username} is now reserved on Saw that Band. We will notify you via email as soon as the app is launched to complete the registration.`,
    html,
  };

  await sendgrid.send(options);

  return NextResponse.json({ success: "email was sent!" });
}
