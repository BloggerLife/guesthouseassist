export const metadata = {
  title: "Guest House Assist",
  description: "Your number one BnB plug!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
