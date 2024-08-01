'use client';

import SearchForm from '@/components/SearchForm';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';


const UserEvents = () => {

    const [open,setOpen] = useState(false);
  
    const {isLoaded, isSignedIn, user} = useUser();
    

    const handleForm =(e)=>{
        e.preventDefault();
        setOpen((prev)=>!prev);

    }

    if(!isLoaded || !isSignedIn){
        return null;
    }

  return (
    <section className="w-10/12 flex flex-col mx-auto items-center">

    <h2>Welcome back {user.username}</h2>
    <div>MY Upcoming event list</div>


{/* to be able to see the form with need to have an other onClickForm button which holds the icon */}
    
    <aside className='block w-1/4 ml-auto mr-0 p-4 border-2'>
    <span  className="flex flex-wrap" onClick={handleForm}> searchIcone
    <SearchForm active={open} formOpen={handleForm}/>
    </span>
    </aside>
    
    </section>
  )
  
}

export default UserEvents