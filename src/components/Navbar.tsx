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
    <>
    <Link href="/" className={todosFilter === null ? "text-red-600" : ""}>Home</Link>
    {/* yahan yeh jo hai issay  /?todos=active* query parameter kehtay hain is main key value pair hota hai yeh hamesha ? say start hota hai */}
    {/* is main key todos hai aur value active is query parameter say hoga bus yeh k jab hum is active link per click karain gy toh url main http://localhost:3000/?todos=active likha ajaye gah*/}
    {/* agar na samaj aye toh video 1:07:00 say dekh lena is*/}
    <Link href="/?todos=active" className={todosFilter === "active" ? "text-red-600" :""}>Active</Link>
    <Link href="/?todos=completed" className={todosFilter === "completed" ? "text-red-600" : ""}>Completed</Link>
    </>
  )
}

export default Navbar