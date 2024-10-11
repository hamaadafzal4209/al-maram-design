import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

// Load the Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load the Poppins font for headings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Almaram Alfaneyah",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen bg-dark-300 font-sans antialiased",
        inter.variable,
        poppins.variable
      )}
    >
      <body className="font-poppins overflow-x-hidden bg-gradient-to-b from-gray-100 via-gray-50 to-white">
        {children}
      </body>
    </html>
  );
}
