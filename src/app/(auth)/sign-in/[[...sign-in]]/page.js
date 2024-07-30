import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
   <>
      <SignIn
         appearance={{
          elements: {
            formButtonPrimary: "bg-orange-400 border-2 ",
          },
        }}
      
      />
    </>
  );
};
export default SignInPage;