'use client';

import { useUser } from '@clerk/nextjs';


const UserEvents = () => {

  
    const {isLoaded, isSignedIn, user} = useUser();
    

    if(!isLoaded || !isSignedIn){
        return null;
    }

  return (
    <section className="w-10/12 flex flex-col mx-auto items-center">

    <h2>Welcome back {user.username}</h2>
    <div>MY Upcoming event list</div>
    
    </section>
  )
  
}

export default UserEvents