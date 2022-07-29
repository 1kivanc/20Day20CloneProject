import React from 'react'
import Image from 'next/image'
import { BeakerIcon, HomeIcon , ChevronDownIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid'
import { 
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,
    SpeakerphoneIcon,
    VideoCameraIcon

} 
from '@heroicons/react/outline'
import { signIn } from 'next-auth/react'

function Header() {
  return ( 
    <div className='flex sticky top-0 z-50  bg-white px-4 py-2 shadow-sm'>

        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
            <Image objectFit='contain' src="https://links.papareact.com/fqy" layout="fill"/>
        </div>
        <div className='flex items-center mx-7 xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5'/>
            <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5' />
        </div>

        <form className='flex flex-1 items-center space-x-2 border-gray-200 rounded-sm border 
        bg-gray-100 px-3 py-1'>
            <SearchIcon className='h-6 w-6 text-gray-400'/>
            <input className='flex-1 bg-transparent outline-none' type="text" placeholder='Search Reddit'/>
            <button type="submit" hidden/>
        </form>
        <div className= 'mx-5 hidden flex items-center space-x-2 text-gray-500 lg:inline-flex'>
            <SparklesIcon className='icon'/>
            <GlobeIcon className='icon'/>
            <VideoCameraIcon className='icon'/>
            <hr className='h-10 border border-gary-10'/>
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <PlusIcon className='icon' />
            <SpeakerphoneIcon className='icon' />
        </div>

        <div className='ml-5 flex items-center lg:hidden'>
            <MenuIcon className='icon'/>
        </div>
        <div onClick={() => signIn()} className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
        <div className='relative h-5 w-5 flex-shrink-0 '>
            <Image objectFit='contain' src="https://links.papareact.com/23l"
             layout='fill' alt=""
            />
        </div>
        <p className='text-gray-400'>Sign In</p>
        </div>
        
    </div>
  )
}

export default Header