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
  title: "Sellify - Your Ultimate eCommerce Store",
  description:
    "Discover the best products at unbeatable prices with Sellify, your go-to eCommerce platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen bg-dark-300 font-sans antialiased bg-gradient-to-b from-gray-100 via-gray-50 to-white",
        inter.variable,
        poppins.variable
      )}
    >
      <body className="font-poppins">{children}</body>
    </html>
  );
}
