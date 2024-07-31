//server component

import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ClientPage = async() => {
  const {userId} = auth();
  const isAuth =!!userId;
  const user = await currentUser();
if(!isAuth)
  {
  redirect("/");
}

  return (
    <section className=" w-10/12 mx-auto flex flex-col m-6 p-4 items-center gap-6">

      <h1>Welcome back {user.username}</h1>

      
      <UserProfile />
    </section>
  )
}

export default ClientPage
