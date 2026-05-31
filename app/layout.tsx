import "./globals.css";
import AppShell from "@/components/shared/AppShell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="business">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
