"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Navbar = () => {
// url main say data get karnay k liye hum is hook ko use kartay hain
    const serachParams = useSearchParams();
    // ab todos k equal to k baad jo data hai i.e active yeh completed woh humain is main mil jaye gah
    const todosFilter = serachParams.get("todos")
    console.log("Navbar" + todosFilter);


    return (
    <nav className='flex text-gray-400 items-center justify-between w-[55rem] text-4xl border-b-2 border-[#CCCCCC]'>
    <Link href="/" className={`border-b-8 ${todosFilter === null ? "border-[#68B984] text-[#000]" : "border-transparent hover:border-[#3A3845]"}`}>Home</Link>
    {/* yahan yeh jo hai issay  /?todos=active* query parameter kehtay hain is main key value pair hota hai yeh hamesha ? say start hota hai */}
    {/* is main key todos hai aur value active is query parameter say hoga bus yeh k jab hum is active link per click karain gy toh url main http://localhost:3000/?todos=active likha ajaye gah*/}
    {/* agar na samaj aye toh video 1:07:00 say dekh lena is*/}
    <Link href="/?todos=active" className={`border-b-8 ${todosFilter === "active" ? "border-[#68B984] text-[#000]" : "border-transparent hover:border-[#3A3845]"}`}>Active</Link>
    <Link href="/?todos=completed" className={`border-b-8 ${todosFilter === "completed" ? "border-[#68B984] text-[#000]" : "border-transparent hover:border-[#3A3845]"}`}>Completed</Link>
    </nav>
  )
}

export default Navbar