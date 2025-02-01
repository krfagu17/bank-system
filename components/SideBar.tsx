// 'use client'
// import { sidebarLinks } from '@/constants'
// import { cn } from '@/utils'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React from 'react'


// const SideBar = ({user}:SiderbarProps) => {

//   const pathname=usePathname()
//   return (
//     <section className='sidebar'>
//       <nav className='flex flex-col gap-4' >
//        <Link href='/' className='mb-12 cursor-pointer flex items-center gap-2'>
//        <Image src="/icons/logo.svg" 
//        width={34}
//        height={34}
//        alt='logo'
//        className='size-[24px] max-xl:size-14'
//        />
//        <h1 className='sidebar-logo '>Bank</h1>
//        </Link>
//        {sidebarLinks.map((link) =>{
//         const isActive= pathname===link.route || pathname.startsWith(`${link.route}/`)
//         return(
//           <Link href={link.route} key={link.label} className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
//            <div className='relative  size-6'>
//             <Image src={link.imgURL} 
//           fill
//             alt={link.label}
//             className={cn({
//               'brightness-[3] invert-0': isActive
//             })}
           
//             />
//             <p className={cn("sidebar-lable",{"!text-white":isActive})}>{link.label}</p>
//            </div>
//             </Link>
//         )
//        } )}
//       </nav>
//     </section>
//   )
// }

// export default SideBar


'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Munna</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
        
      User
      </nav>
Footer
    </section>
  )
}

export default Sidebar