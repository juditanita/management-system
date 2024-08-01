
import { EB_Garamond} from "next/font/google";
import "./globals.css";
import { ClerkProvider,   ClerkLoading, ClerkLoaded} from "@clerk/nextjs";
import Header from "@/components/Header";



const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme="cupcake">
   <body className={ebGaramond.className}>

    <ClerkLoading>
    <div class="loader"></div>
    </ClerkLoading>
  <Header/>
   
   <ClerkLoaded>
     {children}
     </ClerkLoaded>
     </body>
   </html>
 </ClerkProvider>
  );
}