import "./globals.css";
import GoogleAnalyticsWrapper from "./components/GoogleAnalyticsWrapper";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Saw that band",
  description:
    "Turn your concert memories into an immersive and shareable experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
      <GoogleAnalyticsWrapper />
    </html>
  );
}
