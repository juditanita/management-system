import Link from 'next/link'



const Header = () => {
  return (
    <nav className=' py-4 px-6 flex items-center justify-between mb-5 '>
    <div className='flex items-center'>
      <Link href='/'>
        <div className='text-lg uppercase font-bold text-white'>
          Pinky Events
        </div>
      </Link>
    </div>
    <div className='text-white'>
   


    
    
    </div>
  </nav>
  )
}

export default Header