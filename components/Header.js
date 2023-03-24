import React from 'react'
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import { useSession, signIn, signOut } from "next-auth/react";
import { 
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
 } from '@heroicons/react/solid';
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";



function Header() {
    const { data: session } = useSession();
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
        {/*Left*/}
        <div className='flex items-center'>
            <img 
            className='rounded-full'
            width={40} 
            height={40}
            layout="fixed"
            src="https://links.papareact.com/5me"
            />
           <div className='hidden md:inline-flex flex ml-2 items-center rounded-full bg-gray-100 p-2'>
           <SearchIcon className="h-6 text-gray-600"/>
            <input 
            className='flex flex-shrink ml-2 items-center bg-transparent outline-none'
            type="text" 
            placeholder="Search Realm"></input>
           </div> 
        </div>

        {/* Center */}
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
            </div>
        </div>
        {/* Right */}
        <div className='flex item-center sm:space-x-2 justify-end'>
            {/*Profile pic*/}
            <img
            className='rounded-full cursor-pointer'
            onClick={signOut}
            src={session.user.image}
            width="40"
            height="40"
            />

            <p className='whitespace-nowrap font-semibold pr-3 pt-2'>{session.user.name}</p>
            <ViewGridIcon className='icon' />
            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <ChevronDownIcon className='icon' />
        </div>
        
    </div>

  )
}

export default Header