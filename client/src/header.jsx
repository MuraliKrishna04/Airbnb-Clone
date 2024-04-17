import {Link} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

export default function Header(){
  const {user} = useContext(UserContext);

    return(
        <header className=' flex justify-between'>
          <link to={'/'} className='flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>

          
          <span className='font-bold text-xl'>HOUSESHOP</span>
          </link>


          <div className='flex border border-gray-300 rounded-full py-1 px-4 shadow-md shadow-gray-300'>
            <div className='p-4'>Anywhere</div>
            <div className='border-l border-gray-300'></div>
            <div className='p-4'>Any Week</div>
            <div className='border-l border-gray-300'></div>
            <div className='p-4'>Add Guests</div>
            <button className='bg-primary text-white p-4 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            </button>
          </div>
          
          
          
          <Link to={user?'/account':'/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-1 px-2 shadow-md shadow-gray-300 p-4'>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            

            <div className=' bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden ' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative top m-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </div>
            {!!user && (
              <div>
                {user.name}
              </div>
            )}
          </Link>


        </header>
    );
}