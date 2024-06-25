import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'

const SideBar = () => {
  return (
    <div className='border-r border-slate-400 p-4 flex flex-col'>
    <SearchInput />
    <div className='divider px-3' />  
    <Conversations />
    <LogoutButton />
    </div>
  )
}

export default SideBar