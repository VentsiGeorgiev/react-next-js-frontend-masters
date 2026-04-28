import Link from "next/link";
// import "doogle.css/doodle.css";
import "doodle.css/doodle.css";
import "./globals.css";

export const metaadata = {
  title: "Note Passer",
  description: "Example app for notes",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="doodle">
        <nav>
          <h1>
            <Link href="/">Note Passer</Link>
          </h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
