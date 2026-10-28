import "./globals.css";

export const metadata = { title: "Next.js starter | Openstead", description: "Your next idea starts here. A Next.js application hosted on Openstead." };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
