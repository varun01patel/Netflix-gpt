import React from 'react'

const Header = () => {
  return (
    <div className='absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black flex justify-between'>
      <img 
      className = "w-44"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflixlogo" />

      <div className='flex p-2 space-x-3'>
        <img className='w-12 h-12' src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg" alt="" />
        <button className='font-bold text-white'>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Header
