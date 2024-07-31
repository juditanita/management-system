import Link from "next/link";
import { UserButton, SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
const Header = () => {
  // it is a server side component
  const {userId} = auth();
  return (
    <header className="flex p-4 mx-auto w-full  bg-blue-700 justify-between px-12">
    
      <Link href={"/"}>  <span className="text-slate-50">Pinky Events</span></Link>
      
    
      {!userId ?( <div className="flex gap-6 items-center">
        <Link href={"/client"}>  <span className="text-slate-50">Client Page</span></Link>
        <div className="flex gap-6"><Link href={"/sign-in"}>  <span className="text-slate-50">Login</span></Link>
        <Link href={"/sign-up"}>  <span className="text-slate-50">Sign-up</span></Link></div>
    
   

    </div>):(
      <>
    <Link href={"/dashboard"}>  <span className="text-slate-50">Dashboard</span></Link>
    <SignedIn>
        <UserButton />
      </SignedIn>
      </>
     )}
   <>
     
   
      </>
     
    </header>
  );
};

export default Header;
