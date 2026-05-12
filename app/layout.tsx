import "./globals.css";

export const metadata = {
  title: "Camila Duarte",
  description: "Personal Stylist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}