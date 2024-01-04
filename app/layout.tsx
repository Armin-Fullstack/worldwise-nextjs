import "./globals.css";
import { manrope } from "./ui/font";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} p-4`}>{children}</body>
    </html>
  );
}
