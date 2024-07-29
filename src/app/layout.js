import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme="cupcake">
   <body>
     <header className="flex p-4 mx-auto">
   <SignedOut>
     <SignInButton>
     <button className="btn btn-accent text-white">Sign In</button>

        </SignInButton>
   </SignedOut>
   <SignedIn>
     <UserButton />
   </SignedIn>
   </header>
     {children}</body>
   </html>
 </ClerkProvider>
  );
}
