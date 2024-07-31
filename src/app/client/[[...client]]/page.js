//server component

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ClientPage = async() => {
  const {userId} = auth();
  const isAuth =!!userId;
  const user = await currentUser();
if(!isAuth){
  redirect("/");
}

  return (
    <div>

      <h1>Welcome back {user.username}</h1>
    </div>
  )
}

export default ClientPage
