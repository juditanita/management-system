'use client'

import { useUser } from "@clerk/nextjs"

const Profile = () => {
    const {isLoaded, isSignedIn, user} = useUser();

    if(!isLoaded || !isSignedIn){
        return null;
    }
  return (
    <section className="w-10/12 mx-auto grid place-content-evenly">

    <h2>Hello {user.firstName}!</h2></section>
  )
}

export default Profile;
