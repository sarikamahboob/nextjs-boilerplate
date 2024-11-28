import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next JS Learn",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h2>Feature Products</h2>
    </>
  );
}
