import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return  <>
  <SignUp
     appearance={{
      elements: {
        formButtonPrimary: "bg-orange-400 border-2 ",
      },
    }}
  
  />
</>;
}