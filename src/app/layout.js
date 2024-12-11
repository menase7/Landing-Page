import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App with Tailwind CSS</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
